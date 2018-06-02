import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import mockStore from '../../__mocks__/mockStore';
import * as movieDetailsActions from '../movieDetailsActions';

const MOVIE_ID = 12;
const MOVIE = {
  id: MOVIE_ID,
  title: 'movieTitle'
};
const GET_MOVIE_URL = `/api/movies/${MOVIE_ID}`;

const axiosMock = new MockAdapter(axios);
const mockedStore = mockStore({});

afterEach(() => {
  axiosMock.reset();
  mockedStore.clearActions();
});

it('should fail getting movie', () => {
  const EXPECTED_ACTIONS = [
    {
      type: movieDetailsActions.MOVIE_DETAIL_FETCH
    },
    {
      type: movieDetailsActions.MOVIE_DETAIL_FAIL
    }
  ];

  axiosMock.onGet(GET_MOVIE_URL).reply(500);

  return mockedStore
    .dispatch(movieDetailsActions.getMovie(MOVIE_ID))
    .then(() => {
      expect(mockedStore.getActions()).toEqual(EXPECTED_ACTIONS);
    });
});

it('should get movie successfully', () => {
  const EXPECTED_ACTIONS = [
    {
      type: movieDetailsActions.MOVIE_DETAIL_FETCH
    },
    {
      type: movieDetailsActions.MOVIE_DETAIL_SUCCESS,
      payload: {
        movie: MOVIE
      }
    }
  ];

  axiosMock.onGet(GET_MOVIE_URL).reply(200, MOVIE);

  return mockedStore
    .dispatch(movieDetailsActions.getMovie(MOVIE_ID))
    .then(() => {
      expect(mockedStore.getActions()).toEqual(EXPECTED_ACTIONS);
    });
});
