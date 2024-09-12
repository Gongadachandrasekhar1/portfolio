import NavBar from "./Nav";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="About mt-5" id="about">
      <h1 className="text-center text-main" data-aos="fade-down">
        About Me
      </h1>
      <div className="main-content d-flex justify-content-evenly align-items-center flex-wrap  ">
        <div className="text" data-aos="fade-up">
          <p className="text text-wrap fs-5 text-about m-5">
            I’m a Full Stack Developer with a strong foundation in HTML, CSS,
            JavaScript, Bootstrap, SQL, MongoDB, Node.js, Express.js, ReactJS,
            and Python. I’m passionate about using these skills to develop
            innovative web applications that are user-friendly. I’m always eager
            to learn more about web development and marketing. I enjoy the
            challenge of coding and solving real-world problems. Currently, I’m
            looking for opportunities to join a team that values innovation and
            shares my enthusiasm for technology.
          </p>
        </div>
        {/* <div className="About-img" data-aos="fade-right">
          <img
            src="https://img.freepik.com/free-vector/flat-illustrated-about-me-concept_52683-59107.jpg?ga=GA1.1.806524813.1725452061&semt=ais_hybrid"
            className="img-fluid"
          />
        </div> */}
      </div>
    </div>
  );
}
