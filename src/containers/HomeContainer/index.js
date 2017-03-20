import React, { Component } from "react";

import DATA from "./data.js";
import HomeScene from "@scenes/HomeScene";

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = DATA;

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const topPos  = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    // Change state if window view is low enough and if the state would be different than de previous one
    if ((windowHeight < topPos) != this.state.returnToTop.isActive) {
      this.setState({ returnToTop: { isActive: !this.state.returnToTop.isActive } });
    }
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