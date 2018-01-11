import * as React from 'react';
import * as classNames from 'classnames';

import ExternalLink from './components/ExternalLink';
import InternalLink from './components/InternalLink';

import './Link.scss';

export interface LinkProps {
  children: string | JSX.Element |  JSX.Element[];
  className?: string;
  to: string;
  onMouseEnter?: (evt: React.MouseEvent<any>) => void;
  onMouseLeave?: (evt: React.MouseEvent<any>) => void;
}

const Link: React.SFC<LinkProps> = ({ className, children, to, onMouseEnter, onMouseLeave }) => {
  const linkClasses = classNames('Link', className, {
    'Link--Text': typeof children === 'string'
  });

  const isExternal = /^https?:\/\//.test(to);

  return isExternal ? (
    <ExternalLink
      className={linkClasses}
      to={to}
    >
      {children}
    </ExternalLink>
  ) : (
    <InternalLink
      className={linkClasses}
      to={to}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </InternalLink>
  );
};

Link.defaultProps = {
  onMouseEnter: (evt) => {},
  onMouseLeave: (evt) => {},
};

export default Link;