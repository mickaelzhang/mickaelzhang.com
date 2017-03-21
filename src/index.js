import React from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import "@shared/styles/general.scss";

import HomeContainer from "@containers/HomeContainer";
import ProjectContainer from "@containers/ProjectContainer";

render(
  <Router>
      <Switch>
        <Route exact path="/" component={HomeContainer}/>
        <Route path="/projects/:slug" component={ProjectContainer}/>
        <Route render={() => (
          <div style={{color: 'white'}}>404</div>
        )}/>
      </Switch>
  </Router>,
  document.getElementById("root")
);