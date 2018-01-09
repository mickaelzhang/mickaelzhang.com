import * as React from 'react';
import * as classNames from 'classnames';

import ExternalLink from './components/ExternalLink';
import InternalLink from './components/InternalLink';

import './Link.scss';

interface LinkProps {
  children: string | JSX.Element;
  className?: string;
  to: string;
}

const Link: React.SFC<LinkProps> = ({ className, children, to }) => {
  const linkClasses = classNames('Link', className);
  const isExternal = /^https?:\/\//.test(to);

  return isExternal ? (
    <ExternalLink className={linkClasses} to={to}>{children}</ExternalLink>
  ) : (
    <InternalLink to={to} className="Link">{children}</InternalLink>
  );
};

export default Link;