import React, { Component } from "react";
import { Redirect } from 'react-router';

import projectsInfo from "@data/projects";
import ProjectScene from "@scenes/ProjectScene";

class ProjectContainer extends Component {
  constructor(props) {
    super(props);

    this.slug = this.props.match.params.slug;

    const matchSlug = (elem) => (
      elem.slug == this.slug
    );

    const project = projectsInfo.filter(matchSlug);
    const projectIsFound = project.length === 1;

    this.state = {
      isFound: projectIsFound,
      data: projectIsFound ? project[0] : null
    };
  }

  render() {
    return (
      this.state.isFound ? (
        <ProjectScene data={this.state.data}/>
      ) : (
        <Redirect to="/"/>
      )
    );
  }
}

export default ProjectContainer;