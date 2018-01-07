import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from '@containers/App';
import HomeContainer from '@containers/HomeContainer';
import AboutContainer from '@containers/AboutContainer';
import ProjectDetailContainer from '@containers/ProjectDetailContainer';

import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';

import './styles/base.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Switch>
          <App>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/about" component={AboutContainer} />
            <Route path="/projects/:id" component={ProjectDetailContainer} />
          </App>
        </Switch>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
