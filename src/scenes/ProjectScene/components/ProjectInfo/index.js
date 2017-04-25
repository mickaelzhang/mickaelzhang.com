import React from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import "./styles.scss";

const ProjectInfo = ({name, description, url}) => (
  <CSSTransitionGroup
      transitionName="ProjectInfo"
      transitionAppear={true}
      transitionAppearTimeout={800}
      transitionEnter={false}
      transitionLeave={false}>
    <div className="ProjectInfo">
      <div className="ProjectInfo__Name">{name}</div>
      <div className="ProjectInfo__Description">{description}</div>
      <div className="ProjectInfo__ProjectInfo">
        <div className="ProjectInfo__ProjectInfoContainer">
          <a className="ProjectInfo__Link" href={url}>View website</a>
        </div>
      </div>
    </div>
  </CSSTransitionGroup>
);

export default ProjectInfo;