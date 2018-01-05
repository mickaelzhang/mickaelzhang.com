import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from '@reducers/index';
import { fetchProjectList } from '@actions/projectActions';

interface StateProps {
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

const mapStateToProps = (state: AppState) => ({});

const mapDispatchToProps = {
  fetchProjectList
};

export default connect<StateProps, DispatchProps, any>(mapStateToProps, mapDispatchToProps)(HomeContainer);
