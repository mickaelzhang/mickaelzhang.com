import React from "react";
import SvgIconReturnToTop from "./components/SvgIconReturnToTop";
import "./styles.scss";

const ReturnToTop = () => (
  <div className="ReturnToTop">
    <SvgIconReturnToTop className="ReturnToTop__Icon"/>
    <span className="ReturnToTop__Text">top</span>
  </div>
);

export default ReturnToTop;