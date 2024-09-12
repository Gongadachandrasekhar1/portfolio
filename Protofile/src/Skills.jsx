import "./Skills.css";
import ProgressBar from "@ramonak/react-progress-bar";
import ProgressCircleBar from "gradient-progress-circle-bar";
import NavBar from "./Nav";
import Footer from "./footer";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="Skills" id="skills">
      <h1 className="text-center text-main" data-aos="fade-down">
        Skills
      </h1>
      <div className="container mt-4" data-aos="fade-right">
        <div className="Images Main-content">
          <img
            className="skills-icon img-fluid"
            src="https://img.icons8.com/?size=48&id=l75OEUJkPAk4&format=png"
          />
          {/* <ProgressBar
              completed={80}
              customLabel="Python "
              className="Bar"
              labelSize={"0.5px"}
              bgColor={"orange"}
              height={"13px"}
              labelColor={"black"}
              labelAlignment="center"
              transitionDuration="1s"
              transitionTimingFunction="ease-in-out"
              animateOnRender={true}
            /> */}
          <img
            className="skills-icon img-fluid"
            src="https://img.icons8.com/?size=80&id=JHNvegaTfHjR&format=png"
          />
          {/* <ProgressBar
              completed={60}
              customLabel="Data Strutures "
              className="Bar"
              labelSize={"0.5px"}
              bgColor={"orange"}
              height={"13px"}
              labelColor={"black"}
              labelAlignment="center"
              transitionDuration="1s"
              transitionTimingFunction="ease-in-out"
              animateOnRender={true}
            /> */}
          <img
            className="skills-icon img-fluid"
            src="https://img.icons8.com/?size=48&id=20909&format=png"
          />
          {/* <ProgressBar
              completed={90}
              customLabel="Html"
              className="Bar"
              labelSize={"0.5px"}
              bgColor={"orange"}
              height={"13px"}
              labelColor={"black"}
              labelAlignment="center"
              transitionDuration="1s"
              transitionTimingFunction="ease-in-out"
              animateOnRender={true}
            /> */}
          <img
            className="skills-icon img-fluid"
            src="https://img.icons8.com/?size=48&id=21278&format=png"
          />
          {/* <ProgressBar
              completed={60}
              customLabel="Python "
              className="Bar"
              labelSize={"0.5px"}
              bgColor={"orange"}
              height={"13px"}
              labelColor={"black"}
              labelAlignment="center"
              transitionDuration="1s"
              transitionTimingFunction="ease-in-out"
              animateOnRender={true}
            /> */}
          <img
            className="skills-icon img-fluid"
            src="https://img.icons8.com/?size=48&id=108784&format=png"
          />
          {/* <ProgressBar
              completed={60}
              customLabel="Python "
              className="Bar"
              labelSize={"0.5px"}
              bgColor={"orange"}
              height={"13px"}
              labelColor={"black"}
              labelAlignment="center"
              transitionDuration="1s"
              transitionTimingFunction="ease-in-out"
              animateOnRender={true}
            /> */}
          <img
            className="skills-icon img-fluid"
            src="https://img.icons8.com/?size=48&id=EzPCiQUqWWEa&format=png"
          />
          <img
            className="skills-icon img-fluid"
            src="https://img.icons8.com/?size=40&id=bzf0DqjXFHIW&format=png"
          />
          {/* <ProgressBar
              completed={60}
              customLabel="Python "
              className="Bar"
              labelSize={"0.5px"}
              bgColor={"orange"}
              height={"13px"}
              labelColor={"black"}
              labelAlignment="center"
              transitionDuration="1s"
              transitionTimingFunction="ease-in-out"
              animateOnRender={true}
            /> */}
          <img
            className="skills-icon img-fluid"
            src="https://img.icons8.com/?size=48&id=54087&format=png"
          />
          {/* <ProgressBar
              completed={60}
              customLabel="Python "
              className="Bar"
              labelSize={"0.5px"}
              bgColor={"orange"}
              height={"13px"}
              labelColor={"black"}
              labelAlignment="center"
              transitionDuration="1s"
              transitionTimingFunction="ease-in-out"
              animateOnRender={true}
            /> */}
          <img
            className="skills-icon img-fluid"
            src="https://img.icons8.com/?size=48&id=SDVmtZ6VBGXt&format=png"
          />
          {/* <ProgressBar
              completed={60}
              customLabel="Python "
              className="Bar"
              labelSize={"0.5px"}
              bgColor={"orange"}
              height={"13px"}
              labelColor={"black"}
              labelAlignment="center"
              transitionDuration="1s"
              transitionTimingFunction="ease-in-out"
              animateOnRender={true}
            /> */}
          <img
            className="skills-icon img-fluid"
            src="https://img.icons8.com/?size=80&id=8rKdRqZFLurS&format=png"
          />
          {/* <ProgressBar
              completed={60}
              customLabel="Python "
              className="Bar"
              labelSize={"0.5px"}
              bgColor={"orange"}
              height={"13px"}
              labelColor={"black"}
              labelAlignment="center"
              transitionDuration="1s"
              transitionTimingFunction="ease-in-out"
              animateOnRender={true}
            /> */}
          <img
            className="skills-icon img-fluid"
            src="https://img.icons8.com/?size=48&id=UFXRpPFebwa2&format=png"
          />
          {/* <ProgressBar
              completed={60}
              customLabel="Python "
              className="Bar"
              labelSize={"0.5px"}
              bgColor={"orange"}
              height={"13px"}
              labelColor={"black"}
              labelAlignment="center"
              transitionDuration="1s"
              transitionTimingFunction="ease-in-out"
              animateOnRender={true}
            /> */}
          <img
            className="skills-icon img-fluid"
            src="https://img.icons8.com/?size=50&id=21893&format=png"
          />
          {/* <ProgressBar
              completed={60}
              customLabel="Python "
              className="Bar"
              labelSize={"0.5px"}
              bgColor={"orange"}
              height={"13px"}
              labelColor={"black"}
              labelAlignment="center"
              transitionDuration="1s"
              transitionTimingFunction="ease-in-out"
              animateOnRender={true}
            /> */}
        </div>
        {/* <div
            className="circle-Bar d-flex justify-content-around align-items-center flex-wrap gap-4 mt-4"
            data-aos="fade-down"
          >
            <ProgressCircleBar
              value={70}
              remainingColor="lightgray"
              size={30}
              strokeWidth={2}
              progressColors={["#ff0000", "#00ff00", "#0000ff"]}
              innerColor="#f0f0f0"
              clockwise={true}
              label="Problem-solving"
              fontSize={5}
              fontColor="black"
              fontWeight="bold"
            />
            <ProgressCircleBar
              value={75}
              remainingColor="lightgray"
              size={30}
              strokeWidth={2}
              progressColors={["#ff0000", "#00ff00", "#0000ff"]}
              innerColor="#f0f0f0"
              clockwise={true}
              label="Problem-solving"
              fontSize={5}
              fontColor="black"
              fontWeight="bold"
            />
            <ProgressCircleBar
              value={75}
              remainingColor="lightgray"
              size={30}
              strokeWidth={2}
              progressColors={["#ff0000", "#00ff00", "#0000ff"]}
              innerColor="#f0f0f0"
              clockwise={true}
              label="Problem-solving"
              fontSize={5}
              fontColor="black"
              fontWeight="bold"
            />
            <ProgressCircleBar
              value={75}
              remainingColor="lightgray"
              size={30}
              strokeWidth={2}
              progressColors={["#ff0000", "#00ff00", "#0000ff"]}
              innerColor="#f0f0f0"
              clockwise={true}
              label="Problem-solving"
              fontSize={5}
              fontColor="black"
              fontWeight="bold"
            />
          </div> */}
      </div>
    </div>
  );
}
