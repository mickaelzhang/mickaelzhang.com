import React from "react";
import { Link } from 'react-router-dom';

import logo from "./logo.svg";
import "./styles.scss";

const Logo = ({title}) => (
  <Link to="/" className="Logo">
    <img className="Logo__Image" src={logo} alt="Mickael Zhang"/>
  </Link>
);

export default Logo;