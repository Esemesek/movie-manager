import Request from 'supertest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mockApp from '../../__mocks__/mockApp';
import commentRouter from '../commentRouter';
import * as commentHandler from '../../database/commentHandler';

const axiosMock = new MockAdapter(axios);
const app = mockApp(commentRouter);

const COMMENT = {
  id: 'commentId',
  comment: 'comment',
};

afterEach(() => {
  axiosMock.reset();
  jest.restoreAllMocks();
});

describe('POST /comments', () => {
  it('should return BAD_REQUEST for no ID and COMMENT in body', () => {
    return Request(app)
      .post('/comments')
      .expect(400);
  });

  it('should return server error if database call fails', () => {
    jest.spyOn(commentHandler, 'addComment').mockRejectedValue({});

    return Request(app)
      .post('/comments')
      .send(`id=${COMMENT.id}&comment=${COMMENT.comment}`)
      .expect(500);
  });
});
