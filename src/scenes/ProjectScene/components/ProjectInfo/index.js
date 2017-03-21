import React from "react";
import "./styles.scss";

const ProjectInfo = ({name}) => (
  <div className="ProjectInfo">
    <div className="ProjectInfo__ProjectName">{name}</div>
  </div>
);

export default ProjectInfo;