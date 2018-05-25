import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

export default createStore(
  combineReducers({

  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({}),
  applyMiddleware(
    thunkMiddleware,
  ),
);
