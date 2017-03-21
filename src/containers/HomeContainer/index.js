import React, { Component } from "react";

import homeInfo from "@data/home.js";
import projectsInfo from "@data/projects.js";

import HomeScene from "@scenes/HomeScene";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HomeScene
        homeInfo={homeInfo}
        projectsInfo={projectsInfo}
      />
    );
  }
}

export default HomeContainer;