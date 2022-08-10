const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lectureSchema = new Schema(
  {
    courseName: {
      type: String,
      required: false,
    },
    courseTerm: {
      type: String,
      required: false,
    },
    courseFullName: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
    },
    lectureName: {
      type: String,
      required: false,
    },
    labName: {
      type: String,
      required: false,
    },
    seminarName: {
      type: String,
      required: false,
    },
    days: {
      type: String,
      required: false,
    },
    time: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);
const lecture = mongoose.model("lec-json", lectureSchema);
module.exports = lecture;
