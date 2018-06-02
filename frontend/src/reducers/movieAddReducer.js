import {
  MOVIE_ADD_FAIL,
  MOVIE_ADD_FETCH,
  MOVIE_ADD_SUCCESS,
} from '../actions/movieAddActions';

export const INITIAL_STATE = {
  error: false,
  fetching: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIE_ADD_FETCH:
      return {
        ...state,
        error: false,
        fetching: true,
      };
    case MOVIE_ADD_SUCCESS:
      return {
        ...state,
        error: false,
        fetching: false,
      };
    case MOVIE_ADD_FAIL:
      return {
        ...state,
        error: true,
        fetching: false,
      };
    default:
      return state;
  }
}