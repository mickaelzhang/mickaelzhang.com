import React from "react";

import "./styles.scss";

const ProjectItem = ({name, type}) => (
  <article className="ProjectItem">
    <div className="ProjectItem__Visual"></div>
    <div className="ProjectItem__Title">
      <span className="ProjectItem__Name">{name}</span>
      <span className="ProjectItem__Role">{type}</span>
    </div>
  </article>
);

export default ProjectItem;