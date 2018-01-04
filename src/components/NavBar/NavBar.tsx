import * as React from 'react';
// import { Link } from 'react-router-dom';

import Logo from '@components/Logo';
import AppLink from '@components/AppLink';

import './NavBar.scss';

const NavBar = () => (
  <div className="NavBar">
    <Logo />
    <div>
      <AppLink to="/">Home</AppLink>
      <AppLink to="/about">About</AppLink>
    </div>
  </div>
);

export default NavBar;