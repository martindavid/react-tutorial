import { applyMiddleware, createStore, combineReducers } from 'redux';
import { promiseMiddleware } from './middleware';

import auth from './reducers/auth';
import home from './reducers/home';
import common from './reducers/common';

const reducer = combineReducers({
  auth,
  common,
  home
});

const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(reducer, middleware);

export default store;