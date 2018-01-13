import * as React from 'react';
import * as classNames from 'classnames';

import { isEmail, isExternalLink } from '@utils/regex';

import EmailLink from './components/EmailLink';
import ExternalLink from './components/ExternalLink';
import InternalLink from './components/InternalLink';

import './Link.scss';

export interface LinkProps {
  children: string | JSX.Element |  JSX.Element[];
  className?: string;
  to: string;
  onMouseEnter?: (evt?: React.MouseEvent<any>) => void;
  onMouseLeave?: (evt?: React.MouseEvent<any>) => void;
  onClick?: (evt?: React.MouseEvent<any>) => void;
}

const Link: React.SFC<LinkProps> = ({ className, children, to, onMouseEnter, onMouseLeave, onClick }) => {
  const linkClasses = classNames('Link', className, {
    'Link--Text': typeof children === 'string'
  });

  if (isExternalLink(to)) {
    return (
      <ExternalLink
        className={linkClasses}
        to={to}
      >
        {children}
      </ExternalLink>
    );
  } else if (isEmail(to)) {
    return (
      <EmailLink
        className={linkClasses}
        to={to}
      >
        {children}
      </EmailLink>
    );
  } else {
    return (
      <InternalLink
        className={linkClasses}
        to={to}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        {children}
      </InternalLink>
    );
  }
};

Link.defaultProps = {
  onMouseEnter: (evt) => {},
  onMouseLeave: (evt) => {},
  onClick: (evt) => {},
};

export default Link;