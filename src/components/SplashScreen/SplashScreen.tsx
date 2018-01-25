import * as React from 'react';
import * as classNames from 'classnames';
import { TransitionGroup } from 'react-transition-group';

import Logo from '@components/Logo';
// import LogoBanner from './components/LogoBanner';

import animations from './animations.js';
import './SplashScreen.scss';

interface WrappedSplashScreenProps {
  className?: string;
  dataIsLoaded?: boolean;
}

interface SplashScreenProps extends WrappedSplashScreenProps {
  onStartAnimationEnd: () => void;
}

interface AnimationState {
  appeared: boolean;
}

class SplashScreen extends React.Component<SplashScreenProps> {
  component: HTMLDivElement | null;

  componentDidAppear() {
    const cb = () => {
      this.props.onStartAnimationEnd();
    };

    animations.show(this.component, cb);
  }

  componentWillLeave(cb: () => {}) {
    animations.hide(this.component, cb);
  }

  render() {
    const { className } = this.props;
    const splashScreenClasses = classNames('SplashScreen', className);

    return (
      <div
        className={splashScreenClasses}
        ref={element => { this.component = element; }}
      >
        <div className="SplashScreen__Banner">
          <div className="SplashScreen__CoverLayer" />
          <Logo className="SplashScreen__Logo" />
        </div>
      </div>
    );
  }
}

export default class WrappedSplashScreen extends React.Component<WrappedSplashScreenProps, AnimationState> {
  state = {
    appeared: false,
  };

  animationAppearFinished = () => {
    this.setState({ appeared: true });
  }

  render() {
    const { dataIsLoaded, ...props } = this.props;

    return (
      <TransitionGroup component={React.Fragment}>
        {!this.state.appeared && !dataIsLoaded ?
          <SplashScreen onStartAnimationEnd={this.animationAppearFinished} {...props} />
          : undefined
        }
      </TransitionGroup>
    );
  }
}
