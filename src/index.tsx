import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './containers/App';
import HomeContainer from './containers/HomeContainer';
import ProjectDetailContainer from './containers/ProjectDetailContainer';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/projects/:slug" component={ProjectDetailContainer} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
