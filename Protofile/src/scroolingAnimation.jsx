import React, { useEffect } from "react";
import "./animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ScrollingAnimate() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="top">
      <h1 className="text-center mb-5 ">Welcome to react animation</h1>
      <h1>Fade</h1>
      <div className="animation" data-aos="fade-up"></div>
      <div className="animation" data-aos="fade-right"></div>
      <div className="animation" data-aos="fade-down"></div>
      <div className="animation" data-aos="fade-left"></div>
      <h1>Flip</h1>
      <div className="animation" data-aos="flip-right"></div>
      <div className="animation" data-aos="zoom-in"></div>
    </div>
  );
}
