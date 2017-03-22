import React from "react";

import "./styles.scss";

const ProjectPreview = ({slug, index}) => {
  const imgPath = require(`@shared/images/${slug}_${index}.jpg`);

  return (
    <div className="ProjectPreview">
      <img className="ProjectPreview__Visual" src={imgPath} alt=""/>
    </div>
  );
};

export default ProjectPreview;