import React, { Component } from "react";

class ProjectContainer extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params);
  }

  render() {
    return (
      <div style={{color: 'white'}}>ok</div>
    );
  }
}

export default ProjectContainer;