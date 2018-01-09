import * as React from 'react';
import * as classNames from 'classnames';

import './ExternalLink.scss';

interface ExternalLinkProps {
  children: string | JSX.Element;
  className?: string;
  to: string;
}

const ExternalLink: React.SFC<ExternalLinkProps> = ({ className, children, to }) => {
  const externalLinkClasses = classNames('ExternalLink', className);

  return (
    <a
      className={externalLinkClasses}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >{children}
    </a>
  );
};

export default ExternalLink;