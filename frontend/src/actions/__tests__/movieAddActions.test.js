import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import mockStore from '../../__mocks__/mockStore';
import { MOVIE_LIST_FETCH } from '../movieListActions';
import * as movieAddActions from '../movieAddActions';

const ADD_MOVIE_URL = '/api/movies';
const MOVIE_TITLE = 'movieTitle';

const axiosMock = new MockAdapter(axios);
const mockedStore = mockStore({});

afterEach(() => {
  axiosMock.reset();
  mockedStore.clearActions();
});

it('should fail adding movie', () => {
  const EXPECTED_ACTIONS = [
    {
      type: movieAddActions.MOVIE_ADD_FETCH
    },
    {
      type: movieAddActions.MOVIE_ADD_FAIL
    }
  ];

  axiosMock.onPost(ADD_MOVIE_URL, { title: MOVIE_TITLE }).reply(500);

  return mockedStore
    .dispatch(movieAddActions.addMovie(MOVIE_TITLE))
    .then(() => {
      expect(mockedStore.getActions()).toEqual(EXPECTED_ACTIONS);
    });
});

it('should add movie successfully', () => {
  const EXPECTED_ACTIONS = [
    {
      type: movieAddActions.MOVIE_ADD_FETCH
    },
    {
      type: movieAddActions.MOVIE_ADD_SUCCESS
    },
    {
      type: MOVIE_LIST_FETCH
    }
  ];

  axiosMock.onPost(ADD_MOVIE_URL, { title: MOVIE_TITLE }).reply(200);

  return mockedStore
    .dispatch(movieAddActions.addMovie(MOVIE_TITLE))
    .then(() => {
      expect(mockedStore.getActions()).toEqual(EXPECTED_ACTIONS);
    });
});
