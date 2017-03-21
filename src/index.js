import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "@shared/styles/general.scss";

import HomeContainer from "@containers/HomeContainer";

render(
  <Router>
      <Switch>
        <Route exact path="/" component={HomeContainer}/>
        <Route path="/projects/:slug" render={HomeContainer}/>
        <Route render={() => (
          <div style={{color: 'white'}}>404</div>
        )}/>
      </Switch>
  </Router>,
  document.getElementById("root")
);