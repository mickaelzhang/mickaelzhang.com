import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, layouts } from '@reducers/index';
import { fetchProjectList } from '@actions/projectActions';
import NavBar from '@components/NavBar';

import './App.scss';

interface StateProps {
  dataIsLoaded: boolean;
}

interface DispatchProps {
  fetchProjectList: () => void;
}

type AppProps = StateProps & DispatchProps;

class App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.fetchProjectList();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  dataIsLoaded: layouts.getDataIsLoaded(state),
});

const mapDispatchToProps = {
  fetchProjectList
};

export default connect<StateProps, DispatchProps, any>(mapStateToProps, mapDispatchToProps)(App);
