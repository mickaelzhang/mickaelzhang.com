import * as React from 'react';
import { Link } from 'react-router-dom';

const logo = require('./logo.svg') as string;
import './Logo.scss';

const Logo = () => (
  <Link to="/" className="Logo">
    <img className="Logo__Image" src={logo} alt="Mickael Zhang" />
  </Link>
);

export default Logo;