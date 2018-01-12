import * as React from 'react';
import * as classNames from 'classnames';
import { TransitionGroup } from 'react-transition-group';

import Logo from '@components/Logo';
// import LogoBanner from './components/LogoBanner';

import animations from './animations.js';
import './SplashScreen.scss';

interface SplashScreenProps {
  className?: string;
  dataIsLoaded?: boolean;
}

class SplashScreen extends React.Component<SplashScreenProps> {
  component: HTMLDivElement | null;

  componentWillAppear(cb: () => {}) {
    console.log('componentWillAppear');
    animations.show(this.component, cb);
  }

  componentDidAppear() {
    // animations.show(this.component);
  }

  componentWillLeave(cb: () => {}) {
    console.log('componentWillLeave');
    animations.hide(this.component, cb);
  }

  render() {
    const { className } = this.props;
    const splashScreenClasses = classNames('SplashScreen', className);

    return (
      <div
        className={splashScreenClasses}
        ref={element => { this.component = element; } }
      >
        <div className="SplashScreen__Banner">
          <div className="SplashScreen__CoverLayer" />
          <Logo className="SplashScreen__Logo" />
        </div>
      </div>
    );
  }
}

export default ({ dataIsLoaded, ...props}: SplashScreenProps) => {
  return (
    <TransitionGroup component={React.Fragment}>
      {!dataIsLoaded ? <SplashScreen {...props} /> : undefined}
    </TransitionGroup>
  );
};