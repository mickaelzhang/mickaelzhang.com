import React from "react";
import ProjectItem from "../ProjectItem";

// import "./styles.scss";

const ProjectList = ({projects}) => (
  <div className="ProjectList">
    {projects.map((project) =>
      <ProjectItem
        name={project.name}
        type={project.type}
      />
    )}
  </div>
);

export default ProjectList;