import {
  MOVIE_DETAIL_FAIL,
  MOVIE_DETAIL_SUCCESS,
  MOVIE_DETAIL_FETCH,
} from '../actions/movieDetailsActions';

const INITIAL_STATE = {
  error: false,
  fetching: false,
  data: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIE_DETAIL_FETCH:
      return {
        ...state,
        error: false,
        fetching: true,
      };
    case MOVIE_DETAIL_FAIL:
      return {
        ...state,
        error: true,
        fetching: false,
      };
    case MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        error: false,
        fetching: false,
        data: action.payload.movie,
      };
    default:
      return state;
  }
}
