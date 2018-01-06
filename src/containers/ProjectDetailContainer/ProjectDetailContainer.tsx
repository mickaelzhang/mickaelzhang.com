import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { fetchBySlugAndSelectProject, unselectProjectAction } from '@actions/projectActions';
import { AppState, projects } from '@reducers/index';
import Project from '@models/project';

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
    return (
      <div className="ProjectDetail">

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
