import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ApiRequestError from '../errors/ApiRequestError';
import MovieNotFoundError from '../errors/MovieNotFoundError';
import createApiUrl from '../__mocks__/mockApiUrl';
import { getMovieByTitle } from '../apiHandler';

const TITLE = 'movieTitle';
const MOVIE = {
  title: TITLE,
  id: '123',
  director: 'Someone',
};
const axiosMock = new MockAdapter(axios);

afterEach(() => {
  axiosMock.reset();
});

it('should throw ApiRequestError if request fails', async () => {
  axiosMock.onGet(createApiUrl(TITLE)).reply(500);

  try {
    await getMovieByTitle(TITLE);
  } catch (e) {
    expect(e).toBeInstanceOf(ApiRequestError);
  }
});

it('should throw MovieNotFoundError if movie is not found in API', async () => {
  axiosMock.onGet(createApiUrl(TITLE)).reply(200, { data: { Error: true } });

  try {
    await getMovieByTitle(TITLE);
  } catch (e) {
    expect(e).toBeInstanceOf(MovieNotFoundError);
  }
});

it('should movie object when api call is successful', async () => {
  axiosMock.onGet(createApiUrl(TITLE)).reply(200, MOVIE);

  const response = await getMovieByTitle(TITLE);
  expect(response.data).toEqual(MOVIE);
});
