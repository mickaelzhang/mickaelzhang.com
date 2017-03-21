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
        <AboutMe
          text={data.description}
          email={data.email}
          github={data.github}
        />
        <ProjectList projects={data.projects}/>
        <ReturnToTop isActive={data.returnToTop.isActive}/>
      </div>
    );
  }
}

export default HomeScene;