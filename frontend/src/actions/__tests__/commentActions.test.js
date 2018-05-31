import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import mockStore from '../../__mocks__/mockStore';
import * as commentActions from '../commentActions';

const axiosMock = new MockAdapter(axios);
const mockedStore = mockStore({});

const MOVIE_ID = 'someId';
const COMMENTS = ['first', 'second'];

afterEach(() => {
  axiosMock.restore();
  mockedStore.clearActions();
});

it('should successfully fetch comments', () => {
  const EXPECTED_ACTIONS = [
    {
      type: commentActions.COMMENT_FETCH,
    },
    {
      type: commentActions.COMMENT_SUCCESS,
      payload: {
        comments: COMMENTS,
      },
    },
  ];

  axiosMock.onGet(`/api/comments/${MOVIE_ID}`).reply(200, COMMENTS);

  return mockedStore.dispatch(commentActions.fetchComments(MOVIE_ID))
    .then(() => {
      expect(mockedStore.getActions()).toEqual(EXPECTED_ACTIONS);
    });
});

it('should fail fetching comments', () => {
  const EXPECTED_ACTIONS = [{
    type: commentActions.COMMENT_FETCH,
  },
  {
    type: commentActions.COMMENT_FAIL,
  }];

  axiosMock.onGet(`api/comments/${MOVIE_ID}`).reply(400);

  return mockedStore.dispatch(commentActions.fetchComments(MOVIE_ID))
    .then(() => {
      expect(mockedStore.getActions()).toEqual(EXPECTED_ACTIONS);
    });
});
