import * as React from 'react';
import { Link } from 'react-router-dom';

import './AppLink.scss';

interface LinkProps {
  children: string | JSX.Element;
  to: string;
}

const AppLink: React.SFC<LinkProps> = ({ children, to }) => (
  <Link to={to} className="AppLink">{children}</Link>
);

export default AppLink;