import "./intro.css";
import { saveAs } from "file-saver";
import resumePDF from "./ChandraResume.pdf";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import DownloadIcon from "@mui/icons-material/Download";
import NavBar from "./Nav";
import About from "./about";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "../pages/services/services";

export default function () {
  const downloadResume = () => {
    saveAs(resumePDF, "ChandraResume.pdf");
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="Poster">
        <div className="textme text-center m-5">
          <p className="name fs-1 fw-bold text-wrap " data-aos="fade-down">
            HI! I'm
            <span className="text-main animate"> Full Satck developer</span>
          </p>
          <span className="text-wrap row" data-aos="fade-left">
            Building Bridges Between Front-End and Back-End, Transforming Ideas
            into Web Reality
          </span>
          <button
            className="btn mt-3"
            data-aos="fade-right"
            onClick={downloadResume}
            type="button"
          >
            Download CV{" "}
            <span>
              <DownloadIcon />
            </span>
          </button>
        </div>
        <div className="img-fluid d-flex justify-content-evenly align-items-center mb-5">
          <img src="chanduimg.png" data-aos="fade-right" />
          <div className="col-1 ms-5" data-aos="fade-right">
            <a
              href="https://www.linkedin.com/in/chandra-sekhar-gongada-80b8b0243/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                className="icons row-1 ms-1 mb-5 "
                data-aos="fade-up"
              />
            </a>
            <a
              href="https://github.com/Gongadachandrasekhar1"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // For security purposes
            >
              <GitHubIcon
                className="icons row-1 ms-1 mb-5"
                data-aos="fade-right"
              />
            </a>
            <a
              href="https://www.instagram.com/chandu__0625/"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // For security purposes
            >
              <InstagramIcon
                className="icons row-1 ms-1"
                data-aos="fade-down"
              />
            </a>
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
}
