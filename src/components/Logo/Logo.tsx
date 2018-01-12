import * as React from 'react';
import * as classNames from 'classnames';

const logo = require('./logo.svg') as string;
import './Logo.scss';

interface LogoProps {
  className?: string;
}

const Logo: React.SFC<LogoProps> = ({ className }) => {
  const logoClasses = classNames('Logo', className);

  return (
    <img className={logoClasses} src={logo} alt="Mickael Zhang" />
  );
};

export default Logo;