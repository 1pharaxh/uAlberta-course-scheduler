<a name="readme-top"></a>
<h3>I AM NOT AFFILIATED WITH THE UNIVERSITY OF ALBERTA. This project uses publicly available data provided on uAlberta's website to make schedules</h3>

[![LinkedIn][linkedin-shield]][linkedin-url]
[![Check it out!](https://ualberta-sched.netlify.app/)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/1pharaxh/uAlberta-course-scheduler">
    <img src="client/src/assets/icon.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">uAlberta Course Scheduler</h3>

  <p align="center">
    MEVN (MongoDB, Express, Vue, Node) stack based web application that helps students plan their university schedule.
    <br />
    <a href="https://ualberta-sched.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/1pharaxh/uAlberta-course-scheduler/issues">Report Bug</a>
    ·
    <a href="https://github.com/1pharaxh/uAlberta-course-scheduler/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
 
As the name implies uAlberta course scheduler is schedule making webApp. Using the latest vue2, vuetify and other mainstream technology development, The webApp can be used to create various combinations of time tables for students to plan their courses. The webApp is built with the MEVN stack (MongoDB, Express, Vue, Node) and is hosted on Netlify. In the backend the data is stored in a MongoDB database and is scrapped using `puppeteer.js` from the uAlberta's course catalogue and gets served to the frontend using expressjs api routes.
 
[![Product Name Screen Shot][product-screenshot]](https://example.com)
 
Course name like `ENGL, MATH, STAT` etc can be typed in the Course Name text field and course number like `101, 102, 174` etc then upto 5 courses can be added
 
![2](https://user-images.githubusercontent.com/93630550/184046135-13f8031f-3f2c-4940-9005-aef33edde0c1.png)
 
After hitting the submit button the input form is clear and reloading and the user is presented with a time table

![3](https://user-images.githubusercontent.com/93630550/184046164-bfd20df0-5150-40a1-b199-36ea405dce6c.png)
Clicking on individual tiles would expand into a card revealing more details about the selected course

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With



* ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* [![Vue][Vue.js]][Vue-url]
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Frontend Installation

1. Get a Google Developer API Key at [https://console.developers.google.com/](https://console.developers.google.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/1pharaxh/uAlberta-course-scheduler.git
   ```
3. Change Directory to client
    ```sh
    cd client
    ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Enter your API in `client/src/main.js`
   ```js
   key = 'ENTER YOUR API';
   ```
6. Compiles and hot-reloads for development 
   ```sh
   npm run serve
   ```
7. Compiles and minifies for production
   ```sh
   npm run build
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] Add a smart course selector feature which picks the lecture and lab times that works the best
- [ ] Improve the individual Calendar component styling 
- [ ] Add a "Save" button to the Calendar component
    - [ ] That should download a png image of the calendar

See the [open issues](https://github.com/1pharaxh/uAlberta-course-scheduler/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact


Project Link: [https://github.com/1pharaxh/uAlberta-course-scheduler](https://github.com/1pharaxh/uAlberta-course-scheduler)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/akarshan-mishra-75577122a/
[product-screenshot]: https://user-images.githubusercontent.com/93630550/184044160-baf0f193-83d5-475f-9d9a-dbb2abf70131.png
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/