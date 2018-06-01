import Request from 'supertest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mockApp from '../../__mocks__/mockApp';
import createApiUrl from '../../__mocks__/mockApiUrl';
import movieRouter from '../movieRouter';
import * as databaseHander from '../../database/movieHandler';

const MOVIES_URL = '/movies';
const TITLE = 'title';
const MOVIE_ID = '123';
const UPPERCASED_MOVIE = {
  TITLE: 'someTitle',
  AUTHOR: 'someAuthor',
};
const LOWERCASED_MOVIE = {
  title: 'someTitle',
  author: 'someAuthor',
};

const getTitleQuery = (title: string) => `title=${title}`;
const getMovieIdUrl = (id: string) => `${MOVIES_URL}/${id}`;

const axiosMock = new MockAdapter(axios);
const app = mockApp(movieRouter);

afterEach(() => {
  axiosMock.reset();
  jest.restoreAllMocks();
});

describe('POST /movies', () => {
  it('should get BAD_REQUEST for no title in body', () => {
    return Request(app)
      .post(MOVIES_URL)
      .expect(400);
  });

  it('should get NOT_FOUND when request to external api fails', () => {
    axiosMock.onGet(createApiUrl(TITLE)).reply(200, { Error: true });

    return Request(app)
      .post(MOVIES_URL)
      .send(getTitleQuery(TITLE))
      .expect(404);
  });

  it('should get server error in database call fails', () => {
    jest.spyOn(databaseHander, 'addMovie').mockRejectedValue({});
    axiosMock.onGet(createApiUrl(TITLE)).reply(200);

    return Request(app)
      .post(MOVIES_URL)
      .send(getTitleQuery(TITLE))
      .expect(500);
  });

  it('should get movie object for successful external api request', () => {
    jest.spyOn(databaseHander, 'addMovie').mockResolvedValue({});

    axiosMock.onGet(createApiUrl(TITLE)).reply(200, UPPERCASED_MOVIE);

    return Request(app)
      .post(MOVIES_URL)
      .send(getTitleQuery(TITLE))
      .expect(200, LOWERCASED_MOVIE)
      .then(() => {
        expect(databaseHander.addMovie).toHaveBeenCalledWith(LOWERCASED_MOVIE);
      });
  });
});

describe('GET /movies', () => {
  it('should return server error on failed database request', () => {
    jest.spyOn(databaseHander, 'getAllMovies').mockRejectedValue({});
    
    return Request(app)
      .get(MOVIES_URL)
      .expect(500);
  });

  it('should return all movies when database call is successful', () => {
    jest.spyOn(databaseHander, 'getAllMovies').mockResolvedValue([UPPERCASED_MOVIE, LOWERCASED_MOVIE]);

    return Request(app)
      .get(MOVIES_URL)
      .expect(200, [UPPERCASED_MOVIE, LOWERCASED_MOVIE]);
  });
});

describe('GET /movies/:id', () => {
  it('should return server error on failed database request', () => {
    jest.spyOn(databaseHander, 'getMovieById').mockRejectedValue({});

    return Request(app)
      .get(getMovieIdUrl(MOVIE_ID))
      .expect(500)
      .then(() => {
        expect(databaseHander.getMovieById).toHaveBeenCalledWith(MOVIE_ID);
      });
    });

  it('should return NOT_FOUND if movie doesn\' exist in database', () => {
    jest.spyOn(databaseHander, 'getMovieById').mockResolvedValue([]);

    return Request(app)
      .get(getMovieIdUrl(MOVIE_ID))
      .expect(404)
      .then(() => {
        expect(databaseHander.getMovieById).toHaveBeenCalledWith(MOVIE_ID);
      });
  });

  it('should return movie with given id', () => {
    jest.spyOn(databaseHander, 'getMovieById').mockResolvedValue([UPPERCASED_MOVIE]);

    return Request(app)
      .get(getMovieIdUrl(MOVIE_ID))
      .expect(200, UPPERCASED_MOVIE)
      .then(() => {
        expect(databaseHander.getMovieById).toHaveBeenCalledWith(MOVIE_ID);
      });
  });
});
