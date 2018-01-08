import * as React from 'react';
import { connect } from 'react-redux';

import IProject from '@models/project';
import { AppState, projects } from '@reducers/index';
import ProjectCard from '@components/ProjectCard';

import './HomeContainer.scss';

interface StateProps {
  projects: IProject[];
}

interface DispatchProps {
}

type HomeProps = StateProps & DispatchProps;

class HomeContainer extends React.Component<HomeProps> {
  state = {
    hoveredProjectId: null
  };

  render() {
    const { hoveredProjectId } = this.state;

    const projectList = this.props.projects.map(project => (
      <ProjectCard
        key={project.id}
        className="Home__ProjectCard"
        project={project}
        onMouseEnter={() => this.onProjectMouseEnter(project.id)}
        onMouseLeave={() => this.onProjectMouseLeave()}
        isActive={hoveredProjectId ? hoveredProjectId === project.id : true}
      />
    ));

    return (
      <div className="Home">
        <div className="Home__ProjectList">
          {projectList}
        </div>
      </div>
    );
  }

  onProjectMouseEnter(id: string): void {
    this.setState({ hoveredProjectId: id });
  }

  onProjectMouseLeave(): void {
    this.setState({ hoveredProjectId: null });
  }
}

const mapStateToProps = (state: AppState) => ({
  projects: projects.getAll(state)
});

const mapDispatchToProps = {
};

export default connect<StateProps, DispatchProps, any>(mapStateToProps, mapDispatchToProps)(HomeContainer);
