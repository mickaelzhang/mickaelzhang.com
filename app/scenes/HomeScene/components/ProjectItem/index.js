import React from "react";

import "./styles.scss";

const ProjectItem = ({name, type, url}) => (
  <article className="ProjectItem">
    <div className="ProjectItem__Visual"></div>
    <div className="ProjectItem__Title">
        <a className="ProjectItem__Name" href={url}>{name}</a>
        <a className="ProjectItem__Role" href={url}>{type}</a>
    </div>
  </article>
);

export default ProjectItem;