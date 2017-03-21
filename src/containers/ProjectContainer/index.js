import React, { Component } from "react";

import projectsInfo from "@data/projects.js";

class ProjectContainer extends Component {
  constructor(props) {
    super(props);

    this.slug = this.props.match.params.slug;

    const matchSlug = (elem) => (
      elem.slug == this.slug
    );

    const project = projectsInfo.filter(matchSlug);
  }

  render() {
    return (
      <div style={{color: 'white'}}>ok</div>
    );
  }
}

export default ProjectContainer;