import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import movieListReducer from './reducers/movieListReducer';
import movieAddReducer from './reducers/movieAddReducer';
import movieDetailsReducer from './reducers/movieDetailsReducer';
import commentAddReducer from './reducers/commentAddReducer';
import commentReducer from './reducers/commentReducer';

export default createStore(
  combineReducers({
    movie: combineReducers({
      list: movieListReducer,
      add: movieAddReducer,
      details: movieDetailsReducer,
    }),
    comment: combineReducers({
      add: commentAddReducer,
      list: commentReducer,
    }),
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({}),
  applyMiddleware(
    thunkMiddleware,
  ),
);
