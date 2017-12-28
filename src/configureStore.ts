import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];
const enhancers: any[] = [];

const configureStore = (preloadedState?: any) => {
  const composedEnhancers = process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middleware), ...enhancers)
    : compose(applyMiddleware(...middleware), ...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     store.replaceReducer(rootReducer)
  //   })
  // }

  return store;
};

export default configureStore;
