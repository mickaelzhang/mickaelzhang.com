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
  componentDidMount() {
    window.addEventListener('scroll', this.props.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.handleScroll);
  }

  render() {
    const data = this.props.data;

    return (
      <div className="HomeScene">
        <div className="HomeScene__Container">
          <Logo title={data.title}/>
          <AboutMe
            text={data.description}
            email={data.email}
            github={data.github}
          />
          <ProjectList projects={data.projects} imgPath={data.imgPath}/>
          <ReturnToTop isActive={data.returnToTop.isActive}/>
        </div>
      </div>
    );
  }
}

export default HomeScene;