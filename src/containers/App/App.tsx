import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, layouts } from '@reducers/index';
import { fetchProjectList } from '@actions/projects';
import { pausePageTransitionAction, endPageTransitionAction } from '@actions/layouts';
import NavBar from '@components/NavBar';
import PageTransitionLayer from '@components/PageTransitionLayer';
import SplashScreen from '@components/SplashScreen';

import './App.scss';

interface StateProps {
  dataIsLoaded: boolean;
  pageTransitionStatus: string;
}

interface DispatchProps {
  fetchProjectList: () => void;
  pausePageTransitionAction: () => void;
  endPageTransitionAction: () => void;
}

type AppProps = StateProps & DispatchProps;

class App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.fetchProjectList();
  }

  render() {
    const { children, pageTransitionStatus } = this.props;
    return (
      <div className="App">
        <PageTransitionLayer
          status={pageTransitionStatus}
          onTransitionPause={this.props.pausePageTransitionAction}
          onTransitionEnd={this.props.endPageTransitionAction}
        />
        <SplashScreen />
        <NavBar />
        <div>
          {children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  dataIsLoaded: layouts.getDataIsLoaded(state),
  pageTransitionStatus: layouts.getPageTransitionStatus(state),
});

const mapDispatchToProps = {
  fetchProjectList,
  pausePageTransitionAction,
  endPageTransitionAction,
};

export default connect<StateProps, DispatchProps, any>(mapStateToProps, mapDispatchToProps)(App);
