import { applyMiddleware, createStore, combineReducers } from 'redux';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
//import createLogger from 'redux-logger';

import auth from './reducers/auth';
import home from './reducers/home';
import common from './reducers/common';

const reducer = combineReducers({
  auth,
  common,
  home
});

const getMiddleware = () => {
    return applyMiddleware(promiseMiddleware, localStorageMiddleware);
};

const store = createStore(reducer, getMiddleware());

export default store;