import "./intro.css";
import { saveAs } from "file-saver";
import resumePDF from "./ChandraResume.pdf";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import NavBar from "./Nav";
import Footer from "./footer";

export default function () {
  const downloadResume = () => {
    saveAs(resumePDF, "ChandraResume.pdf");
  };

  return (
    <div>
      <NavBar />
      <div className="Poster">
        <div className="text text-center m-4">
          <p className="name fs-1 fw-bold text-wrap ">
            HI! I'm
            <span className="text-light animate"> Full Satck developer</span>
          </p>
          <span className="text-wrap row">
            I seeking for the opportunityI seeking for the opportunityI seeking
            for the opportunityI seeking for the opportunityI seeking for the
            opportunityI seeking for the opportunityI seeking for the
            opportunity
          </span>
          <button
            className="btn btn-dark mt-3 shadow"
            onClick={downloadResume}
            type="button"
          >
            Download CV
          </button>
        </div>
        <div className="img-fluid d-flex justify-content-evenly align-items-center">
          <img src="chanduimg.png" />
          <div className="col-1 ms-5">
            <a
              href="https://www.linkedin.com/in/chandra-sekhar-gongada-80b8b0243/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="icons row-1 ms-1 mb-5" />
            </a>
            <a
              href="https://github.com/Gongadachandrasekhar1"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // For security purposes
            >
              <GitHubIcon className="icons row-1 ms-1 mb-5" />
            </a>
            <a
              href="https://www.instagram.com/chandu__0625/"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // For security purposes
            >
              <InstagramIcon className="icons row-1 ms-1 mb-5" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
