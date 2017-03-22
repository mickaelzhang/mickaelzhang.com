import React from "react";
import "./styles.scss";

const AboutMe = ({text, email, github}) => (
  <div className="AboutMe">
    <div className="AboutMe__Text">{text}</div>
    <div className="AboutMe__ContactInfo">
      <a className="AboutMe__Link" href={github}>Github</a> / <a className="AboutMe__Link" href={`mailto:${email}`}>Email</a>
    </div>
  </div>
);

export default AboutMe;