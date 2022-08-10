const express = require("express");
const mongoose = require("mongoose");
const lecture = require("./models/lecture");
var cors = require("cors");
// import the scraper function from scraper.js
const scraper = require("./scraper");
// Function to create non time conflicting
// combos for json data
function createCombinations(arr, term) {
  newArr = [[]];
  arr.forEach((el, index) => {
    el.forEach((el2) => {
      if (el2.courseTerm === term) {
        newArr[index] = [];
      }
    });
  });
  arr.forEach((el, index) => {
    el.forEach((el2) => {
      if (el2.courseTerm === term) {
        newArr[index].push(el2);
      }
    });
  });
  let result = [];
  while (newArr[0].length) {
    var temp = [newArr[0][0]];
    newArr[0].splice(0, 1);
    for (var i = 1; i < newArr.length; i++) {
      for (var j = 0; j < newArr[i].length; j++) {
        if (
          newArr[i].days !== temp[temp.length - 1].days ||
          newArr[i].time !== temp[temp.length - 1].time
        ) {
          if (temp.indexOf(newArr[i].courseName) <= 0) {
            temp.push(newArr[i][j]);
            newArr[i].splice(j, 1);
            break;
          }
        }
      }
    }
    if (result.indexOf(temp) <= 0 && temp.length === newArr.length) {
      result.push(temp);
    }
  }
  let prevDay = "";
  let prevTime = "";
  let badIndex = null;
  result.forEach((el) => {
    el.forEach((el2) => {
      if (el2.days !== prevDay || el2.time !== prevTime) {
        prevDay = el2.days;
        prevTime = el2.time;
      } else {
        badIndex = result.indexOf(el);
      }
    });
  });
  if (badIndex !== null) {
    result.splice(badIndex, 1);
  }
  return result;
}
const app = express();
app.use(cors());
// connect to mongoDB
const dbURL =
  "mongodb+srv://nodeJS:" +
  process.env.DB_KEY +
  "@cluster0.yyanr9g.mongodb.net/lecture?retryWrites=true&w=majority";
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(function () {
    console.log("connected to mongoDB");
    // listen for request AFTER connecting to mongoDB
    app.listen(3000, function () {
      console.log("Server is running on port 3000");
    });
    // Error handling
  })
  .catch(function (err) {
    console.log(err);
  });

// Only scrape and update the Db is password parameter is correct.
app.get("/api/update-db/:password", function (req, res) {
  if (req.params.password === process.env.DB_KEY) {
    res.send("Updating DB");
    // Drop the database so we start fresh. Empty callback function as we don't need to do anything after dropping the database.
    mongoose.connection.db.dropCollection("lec-jsons", function (err, result) {
      null;
    });
    // scrape the data from the website
    scraper.scrape("https://apps.ualberta.ca/catalogue/course/");
  } else {
    res.send("Wrong password");
  }
});
var courseterm = "";
app.get("/get/all/:term/:year", (req, res) => {
  try {
    // req.params is an object that contains all the our 5 optional subjects
    req.params.term === "fa"
      ? (courseterm = `Fall Term 20${req.params.year}`)
      : "";
    req.params.term === "sp"
      ? (courseterm = `Spring Term 20${req.params.year}`)
      : "";
    req.params.term === "su"
      ? (courseterm = `Summer Term 20${req.params.year}`)
      : "";
    req.params.term === "wi"
      ? (courseterm = `Winter Term 20${req.params.year}`)
      : "";
    lecture
      .find({ courseTerm: courseterm })
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
});
var result = [];
var flag = false;
var termYear = "";
app.get(
  "/get/:term?/:year?/:subject1?/:subject2?/:subject3?/:subject4?/:subject5?/",
  async function (req, res) {
    try {
      result = [];
      // req.params is an object that contains all the our 5 optional subjects
      req.params.term === "fa"
        ? (termYear = `Fall Term 20${req.params.year}`)
        : "";
      req.params.term === "sp"
        ? (termYear = `Spring Term 20${req.params.year}`)
        : "";
      req.params.term === "su"
        ? (termYear = `Summer Term 20${req.params.year}`)
        : "";
      req.params.term === "wi"
        ? (termYear = `Winter Term 20${req.params.year}`)
        : "";
      for (const key of Object.keys(req.params)) {
        // if the key is not empty list then we have a collection.
        if (
          req.params[key] !== undefined &&
          ["term", "year"].indexOf(key) < 0
        ) {
          // Find all the JSON objects in the collection
          var results = await lecture.find({ courseName: req.params[key] });
          result.push(results);
          flag = true;
        }
      }
      if (flag === true) {
        res.write(JSON.stringify(createCombinations(result, termYear)));
        res.end();
        result = [];
        flag = false;
        termYear = "";
      }
    } catch (error) {
      res
        .status(500)
        .send(
          "<h1>Either the API EndPoint is incorrect or No Combinations exists</h1>"
        );
    }
  }
);
