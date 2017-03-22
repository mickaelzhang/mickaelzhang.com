import React from "react";

import ProjectInfo from "./components/ProjectInfo";
import ProjectPreview from "./components/ProjectPreview";

import "./styles.scss";

const ProjectScene = ({data}) => {
  const previewList = [];

  for (var i = 0; i < data.previewNumber; i++) {
    previewList.push(<ProjectPreview key={i} slug={data.slug} index={i} />)
  }

  return (
    <div className="ProjectScene">
      <ProjectInfo
        name={data.name}
      />
      {previewList}
    </div>
  );
};

export default ProjectScene;