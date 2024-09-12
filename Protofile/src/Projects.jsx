import { useState } from "react";
import "./Project.css";
import NavBar from "./Nav";
import Footer from "./footer";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  // Replace initialState with your default state or data
  const [state, setState] = useState([
    {
      id: 1,
      title: "Weather Data",
      text: "This project visualizes weather data using real-time charts and graphs.",
      imgSrc:
        "https://img.freepik.com/free-vector/water-cycle-infographic-design_23-2149128275.jpg?size=626&ext=jpg&ga=GA1.1.806524813.1725452061&semt=ais_hybrid",
      gitHubLink: "https://github.com/your-github-repo-link",
    },
    {
      id: 2,
      title: "Climate Change Dashboard",
      text: "Interactive dashboard to explore global climate data.",
      imgSrc:
        "https://img.freepik.com/free-vector/water-cycle-infographic-design_23-2149128275.jpg?size=626&ext=jpg&ga=GA1.1.806524813.1725452061&semt=ais_hybrid",
      gitHubLink: "https://github.com/your-github-repo-link-2",
    },
    {
      id: 3,
      title: "Rainfall Prediction Model",
      text: "Machine learning model that predicts rainfall based on.",
      imgSrc:
        "https://img.freepik.com/free-vector/water-cycle-infographic-design_23-2149128275.jpg?size=626&ext=jpg&ga=GA1.1.806524813.1725452061&semt=ais_hybrid",
      gitHubLink: "https://github.com/your-github-repo-link-3",
    },
  ]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="container project mt-5 mb-3" id="projects">
        <h1 className="text-center text-main" data-aos="fade-down">
          Projects
        </h1>
        <div className="row d-flex justify-content-center align-items-center gap-3 ">
          {state.map((project) => (
            <div
              key={project.id}
              className="card shadow bg-transparent mt-5 col-md-4"
              data-aos="fade-up"
              style={{ width: "20rem" }}
            >
              <img
                src={project.imgSrc}
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.text}</p>
                <a
                  href={project.gitHubLink}
                  className="btn btn-success"
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
    </div>
  );
}
