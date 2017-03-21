import React, { Component } from "react";

import DATA from "./data.js";
import HomeScene from "@scenes/HomeScene";

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = DATA;
  }

  render() {
    return (
      <HomeScene
        handleScroll={this.handleScroll}
        data={this.state}
      />
    );
  }
}

export default HomeContainer;