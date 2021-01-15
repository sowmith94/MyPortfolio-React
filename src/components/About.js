import React from "react";
import personimg from '../images/personimg.jpg';

const About = ({personalInfo}) => {

  const {fullname,occupation,address}=personalInfo;

  return (
    <div className="about-section" id="About">
      <img src={personimg} alt="profile picture" className="profile-picture"/>
      <div className="info">
        <h3>About me </h3>
        <p className="">My name is {fullname}, I work as a {occupation}</p>
        <h3>Contact Details:</h3>
        <p>
          H No: 123-505-411,
          <br/> 
          Some Street, Some lane
          <br/>
          Hyderabad, Telangana State, 
          <br/>
          India
          <br/>
          +917055177330
        </p>
      </div>
      <button className="download-button"> <i className="fas fa-download"></i>  Download Resume</button>
    </div>
  );
};

export default About;
