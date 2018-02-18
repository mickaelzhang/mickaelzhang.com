import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import * as ReactGA from 'react-ga';

import App from '@containers/App';
import HomeContainer from '@containers/HomeContainer';
import AboutContainer from '@containers/AboutContainer';
import ProjectDetailContainer from '@containers/ProjectDetailContainer';

import NotFound from '@components/NotFound';

import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import './styles/base.scss';

ReactGA.initialize('UA-86800485-1', {
  debug: process.env.NODE_ENV === 'development'
});

const history = createHistory();

history.listen((location, action) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/about" component={AboutContainer} />
          <Route path="/projects/:id" component={ProjectDetailContainer} />
          <Route component={NotFound} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
