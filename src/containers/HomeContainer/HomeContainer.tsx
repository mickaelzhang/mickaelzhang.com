import * as React from 'react';
import { connect } from 'react-redux';

import Project from '@models/project';
import { AppState, projects } from '@reducers/index';
import { fetchProjectList } from '@actions/projectActions';
import ProjectCard from '@components/ProjectCard';

import './HomeContainer.scss';

interface StateProps {
  projects: Project[];
}

interface DispatchProps {
  fetchProjectList: () => void;
}

type HomeProps = StateProps & DispatchProps;

class HomeContainer extends React.Component<HomeProps> {
  render() {
    const projectList = this.props.projects.map(project => (
      <ProjectCard key={project.id} className="Home__ProjectCard" project={project} />
    ));

    return (
      <div className="Home">
        <div className="Home__ProjectList">
          {projectList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  projects: projects.getAll(state)
});

const mapDispatchToProps = {
  fetchProjectList
};

export default connect<StateProps, DispatchProps, any>(mapStateToProps, mapDispatchToProps)(HomeContainer);
