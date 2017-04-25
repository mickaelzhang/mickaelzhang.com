import React from "react";

import TopOnMount from "@components/TopOnMount";

import ProjectInfo from "./components/ProjectInfo";
import PreviewList from "./components/PreviewList";

import "./styles.scss";

const ProjectScene = ({data}) => {
  return (
    <div className="ProjectScene">
      <ProjectInfo
        name={data.name}
        description={data.description}
        url={data.url}
      />
      <PreviewList previewNumber={data.previewNumber} slug={data.slug} />
      <TopOnMount />
    </div>
  );
};

export default ProjectScene;