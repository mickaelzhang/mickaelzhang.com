import React from "react";

// import "./styles.scss";

const ProjectItem = ({name, type}) => (
  <article className="ProjectItem">
    <span>{name}</span>
    <span>{type}</span>
  </article>
);

export default ProjectItem;