import React from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import "./styles.scss";

const AboutMe = ({text, email, github}) => (
  <CSSTransitionGroup
      transitionName="AboutMe"
      transitionAppear={true}
      transitionAppearTimeout={800}
      transitionEnter={false}
      transitionLeave={false}>
      <div className="AboutMe">
        <div className="AboutMe__Text">{text}
        </div>
        <div className="AboutMe__ContactInfo">
          <div className="AboutMe__ContactInfoContainer">
              <a className="AboutMe__Link" href={github}>Github</a>
              <span> / </span>
              <a className="AboutMe__Link" href={`mailto:${email}`}>Email</a>
          </div>
        </div>
      </div>
  </CSSTransitionGroup>
);

export default AboutMe;