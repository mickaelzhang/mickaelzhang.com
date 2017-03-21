import React from "react";

import "./styles.scss";

const ProjectPreview = ({slug}) => (
  <div className="ProjectPreview">
    <img className="ProjectPreview__Visual" src={require(`@shared/images/vaivai.png`)} alt=""/>
  </div>
);

export default ProjectPreview;