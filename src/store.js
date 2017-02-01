import { applyMiddleware, createStore, combineReducers } from 'redux';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
//import createLogger from 'redux-logger';

import auth from './reducers/auth';
import home from './reducers/home';
import common from './reducers/common';
import settings from './reducers/settings';

const reducer = combineReducers({
  auth,
  common,
  home,
  settings
});

const getMiddleware = () => {
    return applyMiddleware(promiseMiddleware, localStorageMiddleware);
};

const store = createStore(reducer, getMiddleware());

export default store;