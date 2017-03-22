import React from "react";
import "./styles.scss";

const ProjectInfo = ({name, description, url}) => (
  <div className="ProjectInfo">
    <div className="ProjectInfo__Name">{name}</div>
    <div className="ProjectInfo__Description">{description}</div>
    <a className="ProjectInfo__Link" href={url}>View project</a>
  </div>
);

export default ProjectInfo;