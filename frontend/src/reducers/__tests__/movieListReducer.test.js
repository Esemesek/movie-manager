import {
  MOVIE_LIST_FETCH,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
} from '../../actions/movieListActions';
import movieListReducer, { INITIAL_STATE } from '../movieListReducer';

const ILLEGAL_ACTION = 'ILLEGAL_ACTION';
const MOVIE_LIST = ['movie1', 'movie2', 'movie3'];

it('should not dispatch illegal action', () => {
  expect(movieListReducer(INITIAL_STATE, { type: ILLEGAL_ACTION })).toEqual(
    INITIAL_STATE,
  );
});

it(`should dispatch ${MOVIE_LIST_FETCH}`, () => {
  expect(movieListReducer(INITIAL_STATE, { type: MOVIE_LIST_FETCH })).toEqual({
    fetching: true,
    error: false,
    data: [],
  });
});

it(`should dispatch ${MOVIE_LIST_FAIL}`, () => {
  expect(movieListReducer(INITIAL_STATE, { type: MOVIE_LIST_FAIL })).toEqual({
    fetching: false,
    error: true,
    data: [],
  });
});

it(`should dispatch ${MOVIE_LIST_SUCCESS}`, () => {
  expect(
    movieListReducer(INITIAL_STATE, {
      type: MOVIE_LIST_SUCCESS,
      payload: { movieList: MOVIE_LIST },
    }),
  ).toEqual({
    fetching: false,
    error: false,
    data: MOVIE_LIST,
  });
});
