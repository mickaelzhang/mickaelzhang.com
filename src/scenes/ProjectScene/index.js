import React from "react";

import ProjectInfo from "./components/ProjectInfo";
import ProjectPreview from "./components/ProjectPreview";

// import "./styles.scss";

const ProjectScene = ({data}) => {
  return (
    <div className="ProjectScene">
      <ProjectInfo
        name={data.name}
      />
      <ProjectPreview slug={data.slug}/>
    </div>
  );
};

export default ProjectScene;