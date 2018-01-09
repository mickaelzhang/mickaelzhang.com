import * as React from 'react';
// import { Link } from 'react-router-dom';

import Logo from '@components/Logo';
import Link from '@components/Link';

import './NavBar.scss';

const NavBar = () => (
  <div className="NavBar">
    <Logo />
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  </div>
);

export default NavBar;