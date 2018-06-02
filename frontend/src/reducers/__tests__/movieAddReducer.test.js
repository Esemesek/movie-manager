import {
  MOVIE_ADD_FAIL,
  MOVIE_ADD_FETCH,
  MOVIE_ADD_SUCCESS,
} from '../../actions/movieAddActions';
import movieAddReducer, { INITIAL_STATE } from '../movieAddReducer';

const ILLEGAL_ACTION = 'ILLEGAL_ACTION';

it('should not dispatch illegal action', () => {
  expect(movieAddReducer(INITIAL_STATE, { type: ILLEGAL_ACTION })).toEqual(
    INITIAL_STATE,
  );
});

it(`should dispatch ${MOVIE_ADD_FETCH}`, () => {
  expect(movieAddReducer(INITIAL_STATE, { type: MOVIE_ADD_FETCH })).toEqual({
    fetching: true,
    error: false,
  });
});

it(`should dispatch ${MOVIE_ADD_FAIL}`, () => {
  expect(movieAddReducer(INITIAL_STATE, { type: MOVIE_ADD_FAIL })).toEqual({
    fetching: false,
    error: true,
  });
});

it(`should dispatch ${MOVIE_ADD_SUCCESS}`, () => {
  expect(movieAddReducer(INITIAL_STATE, { type: MOVIE_ADD_SUCCESS })).toEqual({
    fetching: false,
    error: false,
  });
});
