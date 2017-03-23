import React, { Component } from "react";

class TopOnMount extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {
    return null;
  }
}

export default TopOnMount;