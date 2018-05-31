import Request from 'supertest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mockApp from '../../__mocks__/mockApp';
import movieRouter from '../movieRouter';
import * as databaseHander from '../../database/movieHandler';

const createApiUrl = (title: string) => new RegExp(`http:\/\/omdbapi\.com\/(.+)&t=${title}`);

const API_URL = /http:\/\/omdbapi.com\/*/;
const TITLE = 'title';

const axiosMock = new MockAdapter(axios);
const app = mockApp(movieRouter);

beforeEach(() => {
  jest.spyOn(databaseHander, 'addMovie').mockResolvedValue({});
});

afterEach(() => {
  axiosMock.reset();
  jest.restoreAllMocks();
});

describe('POST /movies', () => {
  it('should get BAD_REQUEST for no title in body', () => {
    return Request(app)
      .post('/movies')
      .expect(400);
  });

  it('should get NOT_FOUND when request to external api fails', () => {
    axiosMock.onGet(createApiUrl(TITLE)).reply(200, { Error: true });

    return Request(app)
      .post('/movies')
      .send(`title=${TITLE}`)
      .expect(404);
  });

  it('should get movie object for successful external api request', () => {
    const MOVIE = {
      TITLE: 'someTitle',
      AUTHOR: 'someAuthor',
    };
    const EXPECTED_MOVIE = {
      title: 'someTitle',
      author: 'someAuthor',
    };

    axiosMock.onGet(createApiUrl(TITLE)).reply(200, MOVIE);

    return Request(app)
      .post('/movies')
      .send(`title=${TITLE}`)
      .expect(200, EXPECTED_MOVIE)
      .then(() => {
        expect(databaseHander.addMovie).toHaveBeenCalledWith(EXPECTED_MOVIE);
      });
  });
});
