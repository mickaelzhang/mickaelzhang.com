import React from "react";
import "./styles.scss";

const SvgIconReturnToTop = ({className}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`SvgIconReturnToTop ${className}`}
  >
    <circle className="SvgIconReturnToTop__Circle" cx="16" cy="16" r="16"/>
    <polygon className="SvgIconReturnToTop__Arrow" points="11.41 19.41 16 14.83 20.59 19.41 22 18 16 12 10 18 11.41 19.41"/>
  </svg>
);

export default SvgIconReturnToTop;