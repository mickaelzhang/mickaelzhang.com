import React from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import ProjectItem from "../ProjectItem";

import "./styles.scss";

const ProjectList = ({projects}) => (
  <CSSTransitionGroup
      transitionName="ProjectList"
      transitionAppear={true}
      transitionAppearTimeout={800}
      transitionEnter={false}
      transitionLeave={false}>
    <div className="ProjectList">
      {projects.map((project) =>
        <ProjectItem
          key={project.slug}
          slug={project.slug}
          name={project.name}
          type={project.type}
        />
      )}
    </div>
  </CSSTransitionGroup>
);

export default ProjectList;