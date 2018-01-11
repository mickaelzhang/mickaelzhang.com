import * as React from 'react';
import * as classNames from 'classnames';

// Get props from parent components
import { LinkProps } from '../../Link';

import './ExternalLink.scss';

const ExternalLink: React.SFC<LinkProps> = ({ className, children, to, onMouseEnter, onMouseLeave }) => {
  const externalLinkClasses = classNames('ExternalLink', className);

  return (
    <a
      className={externalLinkClasses}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >{children}
    </a>
  );
};

export default ExternalLink;