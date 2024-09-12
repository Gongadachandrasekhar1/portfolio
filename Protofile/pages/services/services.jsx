import { useState } from "react";
import CodeIcon from "@mui/icons-material/Code";
import "./services.css";

export default function Services() {
  const [state, setState] = useState([
    {
      id: "1",
      icon: "https://cdn-icons-png.flaticon.com/128/3573/3573187.png",
      title: "Web Developer",
      Description:
        "As a web developer, I create dynamic and functional websites using a combination of front-end and back-end technologies. I specialize in building responsive, user-friendly interfaces that enhance the user experience. Whether it’s an e-commerce site, a blog, or a custom web application, I bring ideas to life through code",
    },
    {
      id: "2",
      icon: "https://cdn-icons-png.flaticon.com/128/3573/3573187.png",
      title: "UI Development",
      Description:
        "UI (User Interface) development focuses on creating the visual elements of a website or application. I specialize in turning design mockups into interactive interfaces using HTML, CSS, and JavaScript. My goal is to ensure that users have a seamless and enjoyable experience while interacting with your product.",
    },
    {
      id: "3",
      icon: "https://cdn-icons-png.flaticon.com/128/10134/10134271.png",
      title: "UI Designing",
      Description:
        "UI design is all about aesthetics and usability. As a UI designer, I craft visually appealing layouts, choose color schemes, and create intuitive navigation. I pay attention to details like typography, spacing, and consistency. My designs aim to enhance the overall look and feel of your digital product.",
    },
  ]);
  return (
    <div>
      <div className="container project mt-5" id="projects">
        <h1 className="text-center text-main" data-aos="fade-down">
          My Services
        </h1>
        <div
          className="row d-flex justify-content-evenly align-items-center gap-3 "
          data-aos="fade-up"
        >
          {state.map((Service) => (
            <div
              key={Service.id}
              className="card services shadow bg-transparent mt-5 text-light d-flex justify-content-evenly align-items-center"
              style={{ width: "22rem", height: "25rem" }}
            >
              <img
                src={Service.icon}
                className="icon mt-3"
                alt={Service.title}
                style={{ width: "5rem", height: "5rem" }}
              ></img>
              <div className="card-body">
                <h1 className="text-center">{Service.title}</h1>
                <p className="text-wrap">{Service.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
