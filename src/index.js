import React from "react";
import { render } from "react-dom";

import "@shared/styles/general.scss";

import HomeContainer from "@containers/HomeContainer";


render(
  <HomeContainer />,
  document.getElementById("root")
);