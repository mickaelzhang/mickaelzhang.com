import * as React from 'react';
import * as classNames from 'classnames';

// Get props from parent components
import { LinkProps } from '../../Link';

import './EmailLink.scss';

const EmailLink: React.SFC<LinkProps> = ({ className, children, to, onMouseEnter, onMouseLeave }) => {
  const emailLinkClasses = classNames('EmailLink', className);

  return (
    <a
      className={emailLinkClasses}
      href={`mailto:${to}`}
    >{children}
    </a>
  );
};

export default EmailLink;