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
      
      <p>Originally business and marketing focused, I received my BA in Marketing from Marshall university in 2014. <br></br>However Tech has always interested me and the drive to learn, create and explore lead me to web developement.<br></br> A recent graduate of OSU's Full-Stack Web Development Bootcamp,<br></br> I am developer looking to 
          break into the industry. 
          <br></br>
          A team player at heart, Ive worked with several groups to collaborate on different projects, some listed below. 
        </p>
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
    </div>
  );
};
export default About;
