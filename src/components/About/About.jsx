import "animate.css";
import React from "react";
import {AiFillHtml5} from "react-icons/ai"
import {FaCss3Alt} from 'react-icons/fa'
import {IoLogoJavascript} from "react-icons/io"
import './about.css'

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="educationContainer">
        <h1>Education</h1>
        <p>OSU Full Stack Web Development Bootcamp -January 2023
         <p className="learned"> What I learned:</p>
          <p className="aboutIcons"> <AiFillHtml5/>
           <FaCss3Alt/> 
           <IoLogoJavascript/> </p>
          <li>MERN Stack</li>
          <li>Databases - MongoDb, MySQL</li>
        </p>
      </div>
      <div className="workContainer">
        <h2>Work Experience</h2>
      </div>
    </div>
  );
};

export default About