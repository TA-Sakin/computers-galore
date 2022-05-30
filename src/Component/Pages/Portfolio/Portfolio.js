import React from "react";

const Portfolio = () => {
  return (
    <div className="m-10">
      <p>
        <span className="font-bold">Name:</span> Tahjib Al Sakin
      </p>
      <p>
        <span className="font-bold">Email:</span> tasakin98@gmail.com
      </p>
      <p>
        <span className="font-bold">Education: </span>BSc in CSE,International
        Islamic University Chittagong.[2018-Present]
      </p>
      <p>
        <span className="font-bold">Skills: </span>
        JavaScript, Python, C++, ReactJS, NodeJS, Express, MongoDB, HTML, CSS,
        Bootstrap, Tailwind, DaisyUI, Heroku, Firebase, Github, Netlify
      </p>
      <div>
        <h3 className="font-bold">Projects: </h3>
        <p>
          1.
          <a
            className="text-cyan-500"
            href="https://workout-mapty.netlify.app/"
            rel=""
          >
            Workout Map
          </a>
          - A tracking website to track your trekking/hiking activities on a
          map. Applied OOP approach of JavaScript, used leaflet library to load
          the map and local storage to store data.
        </p>
        <p>
          2.
          <a
            className="text-cyan-500"
            href="https://ta-sakin.github.io/Weather-App/"
            rel=""
          >
            Weather App
          </a>
          - Allows you to search and see weather in real time. Used JavaScript
          and openweather API to load weather data.
        </p>
        <p>
          3.
          <a
            className="text-cyan-500"
            href="https://book-store-8d028.web.app/"
            rel=""
          >
            Book Store
          </a>
          - An inventory management website where you can manage your store's
          book. It is a full-stack project build using React, Firebase, NodeJS,
          Express, Mongodb and JWT for user authorization.
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
