import React from "react";
import logo from "./logo.svg";
import "./styles.scss";

const Logo = ({title}) => (
  <h1 className="Logo">
    <img className="Logo__Image" src={logo} alt="Mickael Zhang"/>
  </h1>
);

export default Logo;