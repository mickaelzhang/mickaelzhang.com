import * as React from 'react';
// import { Link } from 'react-router-dom';

import Logo from '@components/Logo';
import Link from '@components/Link';

import './NavBar.scss';

const NavBar = () => (
  <div className="NavBar">
    <Link to="/" className="NavBar__Logo">
      <Logo />
    </Link>
    <div className="NavBar__Menu">
      <Link className="NavBar__Link" to="/">Home</Link>
      <Link className="NavBar__Link" to="/about">About</Link>
    </div>
  </div>
);

export default NavBar;