import React from "react";

import TopOnMount from "@components/TopOnMount";

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
        description={data.description}
        url={data.url}
      />
      {previewList}
      <TopOnMount />
    </div>
  );
};

export default ProjectScene;