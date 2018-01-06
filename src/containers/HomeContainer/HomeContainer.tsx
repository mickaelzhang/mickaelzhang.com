import * as React from 'react';
import { connect } from 'react-redux';

import Project from '@models/project';
import { AppState } from '@reducers/index';
import { projects } from '@reducers/index';
import { fetchProjectList } from '@actions/projectActions';

interface StateProps {
  projects: Project[];
}

interface DispatchProps {
  fetchProjectList: () => void;
}

type HomeProps = StateProps & DispatchProps;

class HomeContainer extends React.Component<HomeProps> {
  componentDidMount() {
    this.props.fetchProjectList();
  }

  render() {
    return (
      <div className="Home">
        Home
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
