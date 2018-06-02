import {
  MOVIE_DETAIL_FAIL,
  MOVIE_DETAIL_SUCCESS,
  MOVIE_DETAIL_FETCH,
} from '../../actions/movieDetailsActions';
import movieDetailsReducer, { INITIAL_STATE } from '../movieDetailsReducer';

const ILLEGAL_ACTION = 'ILLEGAL_ACTION';
const MOVIE = {
  id: 'movieId',
  title: 'movieTitle',
  director: 'movieDirector',
};

it('should not dispatch illegal action', () => {
  expect(movieDetailsReducer(INITIAL_STATE, { type: ILLEGAL_ACTION })).toEqual(
    INITIAL_STATE,
  );
});

it(`should dispatch ${MOVIE_DETAIL_FETCH}`, () => {
  expect(
    movieDetailsReducer(INITIAL_STATE, { type: MOVIE_DETAIL_FETCH }),
  ).toEqual({
    fetching: true,
    error: false,
    data: {},
  });
});

it(`should dispatch ${MOVIE_DETAIL_FAIL}`, () => {
  expect(
    movieDetailsReducer(INITIAL_STATE, { type: MOVIE_DETAIL_FAIL }),
  ).toEqual({
    fetching: false,
    error: true,
    data: {},
  });
});

it(`should dispatch ${MOVIE_DETAIL_SUCCESS}`, () => {
  expect(
    movieDetailsReducer(INITIAL_STATE, {
      type: MOVIE_DETAIL_SUCCESS,
      payload: { movie: MOVIE },
    }),
  ).toEqual({
    fetching: false,
    error: false,
    data: MOVIE,
  });
});
