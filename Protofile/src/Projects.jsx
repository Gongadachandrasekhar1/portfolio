import { useState } from "react";
import "./Project.css";
import NavBar from "./Nav";
import Footer from "./footer";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Icon } from "@mui/material";

export default function Projects() {
  // Replace initialState with your default state or data
  const [state, setState] = useState([
    {
      id: 1,
      title: "Weather Data",
      text: "This project visualizes weather data using OpenWeatherMap API's.",
      imgSrc: "weather.png",
      gitHubLink:
        "https://github.com/Gongadachandrasekhar1/Cities-Weather-Data-using-React",
    },
    {
      id: 2,
      title: "Amazon Clone",
      text: "Responsive Amazon clone website ",
      imgSrc: "amazonn.png",
      gitHubLink: "https://github.com/your-github-repo-link-2",
    },
    {
      id: 3,
      title: "Netflix Clone",
      text: "Responsive Netflix clone webiste ",
      imgSrc: "netflix.png",
      gitHubLink: "https://github.com/your-github-repo-link-3",
    },
  ]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="container project mt-5 mb-5" id="projects">
        <h1 className="text-center text-main" data-aos="fade-down">
          Projects
        </h1>
        <div
          className="row d-flex justify-content-evenly align-items-center gap-3 "
          data-aos="fade-up"
        >
          {state.map((project) => (
            <div
              key={project.id}
              className="card shadow bg-transparent mt-5 text-light d-flex justify-content-evenly align-items-center"
              style={{ width: "22rem", height: "33rem" }}
            >
              <img
                src={project.imgSrc}
                className="card-img-top mt-3"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="card-title ">{project.title}</h5>
                <p className="card-text">{project.text}</p>
                <a
                  href={project.gitHubLink}
                  className="btn mt-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-center">
        <b>
          Get In{" "}
          <span className="text-light">
            Touch<Icon>👇🏻</Icon>
          </span>
        </b>
      </h1>
    </div>
  );
}
