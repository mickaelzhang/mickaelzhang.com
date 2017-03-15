import React from "react";

import img from "@shared/images/julien-lienard.png";
import "./styles.scss";

const ProjectItem = ({name, type, url}) => (
  <article className="ProjectItem">
    <div className="ProjectItem__Visual" style={{backgroundImage: `url(${img})`}}></div>
    <div className="ProjectItem__Title">
        <a className="ProjectItem__Name" href={url}>{name}</a>
        <a className="ProjectItem__Role" href={url}>{type}</a>
    </div>
  </article>
);

export default ProjectItem;