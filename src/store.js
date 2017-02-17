import { applyMiddleware, createStore, combineReducers } from 'redux';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
//import createLogger from 'redux-logger';

import auth from './reducers/auth';
import home from './reducers/home';
import common from './reducers/common';
import settings from './reducers/settings';
import article from './reducers/article';
import articleList from './reducers/articleList';
import profile from './reducers/profile';

const reducer = combineReducers({
  auth,
  common,
  home,
  settings,
  article,
  articleList,
  profile
});

const getMiddleware = () => {
    return applyMiddleware(promiseMiddleware, localStorageMiddleware);
};

const store = createStore(reducer, getMiddleware());

export default store;