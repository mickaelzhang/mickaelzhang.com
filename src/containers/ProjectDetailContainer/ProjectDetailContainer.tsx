import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { unselectProjectAction, selectProjectAction } from '@actions/projectActions';
import { AppState, projects } from '@reducers/index';
import Project from '@models/project';

import ProjectTitle from './components/ProjectTitle';
import ProjectImage from './components/ProjectImage';
import ProjectOverview from './components/ProjectOverview';
import ModularContent from '@components/ModularContent';
import NextProjectLink from './components/NextProjectLink';

import './ProjectDetailContainer.scss';

interface StateProps {
  project: Project | null;
  nextProject: Project | null;
}

interface DispatchProps  {
  selectProjectAction: (id: string) => void;
  unselectProjectAction: () => void;
}

type ProjectDetailProps = StateProps & DispatchProps & RouteComponentProps<any>;

class ProjectDetailContainer extends React.Component<ProjectDetailProps> {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.selectProjectAction(id);
  }

  componentWillUnmount() {
    this.props.unselectProjectAction();
  }

  componentWillReceiveProps(nextProps: ProjectDetailProps) {
    const projectHasChanged = this.props.project !== nextProps.project;

    if (nextProps.project && projectHasChanged) {
      this.props.selectProjectAction(nextProps.project.id);
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { project, nextProject } = this.props;

    if (!project || !nextProject) {
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
        <ProjectOverview
          className="ProjectDetail__Overview"
          text={project.description}
          links={project.links}
        />
        <ModularContent
          className="ProjectDetail__Content"
          content={project.content}
        />
        <NextProjectLink
          project={nextProject}
          onClick={() => this.props.selectProjectAction(nextProject.id)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  project: projects.getSelected(state),
  nextProject: projects.getNextProject(state),
});

const mapDispatchToProps = {
  selectProjectAction,
  unselectProjectAction,
};

export default connect<StateProps, DispatchProps, any>(mapStateToProps, mapDispatchToProps)(ProjectDetailContainer);
