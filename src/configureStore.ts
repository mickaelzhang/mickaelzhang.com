import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer, { AppState } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];
const enhancers: any[] = [];

const configureStore = (preloadedState?: any) => {
  const composedEnhancers = process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middleware), ...enhancers)
    : compose(applyMiddleware(...middleware), ...enhancers);

  const store = createStore<AppState>(rootReducer, preloadedState, composedEnhancers);

  return store;
};

export default configureStore;
