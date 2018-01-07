import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { fetchBySlugAndSelectProject, unselectProjectAction } from '@actions/projectActions';
import { AppState, projects } from '@reducers/index';
import Project from '@models/project';

import ProjectTitle from './components/ProjectTitle';
import ProjectImage from './components/ProjectImage';

import './ProjectDetailContainer.scss';

interface StateProps {
  project: Project | null;
}

interface DispatchProps  {
  fetchBySlugAndSelectProject: (slug: string) => void;
  unselectProjectAction: () => void;
}

type ProjectDetailProps = StateProps & DispatchProps & RouteComponentProps<any>;

class ProjectDetailContainer extends React.Component<ProjectDetailProps> {
  componentDidMount() {
    const slug = this.props.match.params.slug;
    this.props.fetchBySlugAndSelectProject(slug);
  }

  componentWillUnmount() {
    this.props.unselectProjectAction();
  }

  render() {
    const { project } = this.props;

    if (!project) {
      return null;
    }

    return (
      <div className="ProjectDetail">
        <ProjectTitle
          className="ProjectDetail__Title"
          title={project.name}
          type={project.type}
        />
        <ProjectImage
          className="ProjectDetail__HeroImage"
          src={project.heroImage.original}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  project: projects.getSelected(state)
});

const mapDispatchToProps = {
  fetchBySlugAndSelectProject,
  unselectProjectAction
};

export default connect<StateProps, DispatchProps, any>(mapStateToProps, mapDispatchToProps)(ProjectDetailContainer);
