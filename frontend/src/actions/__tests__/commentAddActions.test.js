import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import mockStore from '../../__mocks__/mockStore';
import { COMMENT_FETCH } from '../commentActions';
import * as commentAddActions from '../commentAddActions';

const MOVIE_ID = '123';
const COMMENT = 'someComment';
const COMMENTS = ['first', 'second'];

const axiosMock = new MockAdapter(axios);
const mockedStore = mockStore({});

afterEach(() => {
  axiosMock.reset();
  mockedStore.clearActions();
});

it('should successfully add actions and refresh comments', () => {
  const EXPECTED_ACTIONS = [
    {
      type: commentAddActions.COMMENT_ADD_FETCH
    },
    {
      type: commentAddActions.COMMENT_ADD_SUCCESS
    },
    {
      type: COMMENT_FETCH
    }
  ];

  axiosMock.onPost('/api/comments').reply(200);

  return mockedStore
    .dispatch(commentAddActions.addComment(MOVIE_ID, COMMENT))
    .then(() => {
      expect(mockedStore.getActions()).toEqual(EXPECTED_ACTIONS);
    });
});

it('should fail adding comments', () => {
  const EXPECTED_ACTIONS = [
    {
      type: commentAddActions.COMMENT_ADD_FETCH
    },
    {
      type: commentAddActions.COMMENT_ADD_FAIL
    }
  ];

  axiosMock.onPost('/api/comments').reply(500);

  return mockedStore
    .dispatch(commentAddActions.addComment(MOVIE_ID, COMMENT))
    .then(() => {
      expect(mockedStore.getActions()).toEqual(EXPECTED_ACTIONS);
    });
});
