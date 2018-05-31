import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import mockStore from '../../__mocks__/mockStore';
import * as commentAction from '../commentActions';

const axiosMock = new MockAdapter(axios);

const MOVIE_ID = 'someId';
const COMMENTS = [

];

afterEach(() => {
  axiosMock.restore();
});

it('should successfully fetch comments', async () => {
  const mockedStore = mockStore({});

  axiosMock.onGet(`/api/comments/${MOVIE_ID}`).reply(200, COMMENTS);

  await commentAction.fetchComments(MOVIE_ID);

  console.log(mockedStore.getActions());
});
