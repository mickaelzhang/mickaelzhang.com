import React, { Component } from "react";

import Logo from "@components/Logo";
import ReturnToTop from "@components/ReturnToTop";
import AboutMe from "./components/AboutMe";
import ProjectList from "./components/ProjectList";

import "./styles.scss";

class HomeScene extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.homeInfo;
    const projects = this.props.projectsInfo;

    return (
      <div className="HomeScene">
        <AboutMe
          text={data.description}
          email={data.email}
          github={data.github}
        />
        <ProjectList projects={projects}/>
        <ReturnToTop/>
      </div>
    );
  }
}

export default HomeScene;