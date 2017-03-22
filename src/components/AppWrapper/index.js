import React from "react";

import Logo from "@components/Logo";
import ReturnToTop from "@components/ReturnToTop";

import "./styles.scss";

const AppWrapper = ({children}) => (
  <div className="AppWrapper">
    <div className="AppWrapper__Container">
      <Logo/>
      <div>
        {children}
      </div>
      <ReturnToTop/>
    </div>
  </div>
);

export default AppWrapper;