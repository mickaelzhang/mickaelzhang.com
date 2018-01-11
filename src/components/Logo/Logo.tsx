import * as React from 'react';

import Link from '@components/Link';

const logo = require('./logo.svg') as string;
import './Logo.scss';

const Logo = () => (
  <Link to="/" className="Logo">
    <img className="Logo__Image" src={logo} alt="Mickael Zhang" />
  </Link>
);

export default Logo;