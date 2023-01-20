import "animate.css";
import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import "./about.css";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="educationContainer">
        <p className="learned">Technologies Learned </p>
        <div className="aboutIcons">
          {" "}
          <div><AiFillHtml5 /></div>
          <div><FaCss3Alt /></div>
          <div><IoLogoJavascript /></div>
          <div><GrMysql /></div>
          <div><SiMongodb /></div>
          <div> <IoLogoNodejs /></div>
        </div>
      </div>
      <div className="workContainer">
        <h2>Work Experience</h2>
      </div>
    </div>
  );
};

export default About;
