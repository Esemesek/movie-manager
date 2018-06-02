import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import mockStore from '../../__mocks__/mockStore';
import * as movieListActions from '../movieListActions';

const MOVIE_LIST_URL = '/api/movies';
const MOVIE_LIST = ['movie1', 'movie2', 'movie3'];

const axiosMock = new MockAdapter(axios);
const mockedStore = mockStore({});

afterEach(() => {
  axiosMock.reset();
  mockedStore.clearActions();
});

it('shoul fail getting move list', () => {
  const EXPECTED_ACTIONS = [
    {
      type: movieListActions.MOVIE_LIST_FETCH
    },
    {
      type: movieListActions.MOVIE_LIST_FAIL
    }
  ];

  axiosMock.onGet(MOVIE_LIST_URL).reply(500);

  return mockedStore.dispatch(movieListActions.fetchMovies()).then(() => {
    expect(mockedStore.getActions()).toEqual(EXPECTED_ACTIONS);
  });
});

it('should successfully get movie list', () => {
  const EXPECTED_ACTIONS = [
    {
      type: movieListActions.MOVIE_LIST_FETCH
    },
    {
      type: movieListActions.MOVIE_LIST_SUCCESS,
      payload: {
        movieList: MOVIE_LIST
      }
    }
  ];

  axiosMock.onGet(MOVIE_LIST_URL).reply(200, MOVIE_LIST);

  return mockedStore.dispatch(movieListActions.fetchMovies()).then(() => {
    expect(mockedStore.getActions()).toEqual(EXPECTED_ACTIONS);
  });
});
