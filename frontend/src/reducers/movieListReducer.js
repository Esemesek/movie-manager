import {
  MOVIE_LIST_FETCH,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
} from '../actions/movieListActions';

export const INITIAL_STATE = {
  fetching: false,
  error: false,
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIE_LIST_FETCH:
      return {
        fetching: true,
        error: false,
        data: [],
      };
    case MOVIE_LIST_SUCCESS:
      return {
        fetching: false,
        error: false,
        data: action.payload.movieList,
      };
    case MOVIE_LIST_FAIL:
      return {
        fetching: false,
        error: true,
        data: [],
      };
    default:
      return state;
  }
};
