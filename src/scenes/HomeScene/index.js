import React from "react";

import TopOnMount from "@components/TopOnMount";

import AboutMe from "./components/AboutMe";
import ProjectList from "./components/ProjectList";

import "./styles.scss";

const HomeScene = ({homeInfo, projectsInfo}) => (
  <div className="HomeScene">
    <AboutMe
      text={homeInfo.description}
      email={homeInfo.email}
      github={homeInfo.github}
    />
    <ProjectList projects={projectsInfo}/>
    <TopOnMount/>
  </div>
);

export default HomeScene;