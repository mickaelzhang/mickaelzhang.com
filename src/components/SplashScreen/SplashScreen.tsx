import * as React from 'react';
import * as classNames from 'classnames';

import Logo from '@components/Logo';

// import animations from './animations.js';
import './SplashScreen.scss';

interface SplashScreenProps {
  className?: string;
}

class SplashScreen extends React.Component<SplashScreenProps> {
  component: HTMLDivElement | null;

  render() {
    const { className } = this.props;
    const splashScreenClasses = classNames('SplashScreen', className);

    return (
      <div
        className={splashScreenClasses}
      >
        <Logo className="SplashScreen__Logo" />
      </div>
    );
  }
}

export default SplashScreen;