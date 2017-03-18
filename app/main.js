import React from "react";
import { render } from "react-dom";

import HomeContainer from "@containers/HomeContainer";

import "./shared/styles/general.scss";

render(
  <HomeContainer />,
  document.getElementById("root")
);