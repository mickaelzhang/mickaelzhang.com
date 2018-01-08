import * as React from 'react';
import * as classNames from 'classnames';

import { Link } from 'react-router-dom';

import './AppLink.scss';

interface LinkProps {
  children: string | JSX.Element;
  className?: string;
  to: string;
}

const AppLink: React.SFC<LinkProps> = ({ className, children, to }) => {
  const appLinkClasses = classNames('AppLink', className);
  const isExternal = /^https?:\/\//.test(to);

  if (isExternal) {
    return (
      <a
        className={appLinkClasses}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
      >{children}
      </a>
    );
  } else {
    return <Link to={to} className="AppLink">{children}</Link>;
  }
};

export default AppLink;