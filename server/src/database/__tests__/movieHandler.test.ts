import elasticClient from '../client';
import * as movieHandler from '../movieHandler';

const MOVIE_INDEX = {
  index: 'movie',
  type: 'movie',
};

const MOVIE = {
  title: 'SomeTitle',
  author: 'SomeAuthor',
};

const MOVIE_ID = 'movieId';

const ALL_MOVIES_RESPONSE = {
  hits: {
    hits: [
      {
        _source: MOVIE,
      },
      {
        _source: MOVIE,
      },
    ],
  },
};

const MOVIE_RESPONSE = {
  hits: {
    hits: [
      {
        _source: MOVIE,
      },
    ],
  },
};

afterEach(() => {
  jest.restoreAllMocks();
});

it('should make addMovie database request', async () => {
  jest.spyOn(elasticClient, 'index').mockResolvedValue({});

  await movieHandler.addMovie(MOVIE);

  expect(elasticClient.index).toHaveBeenCalledWith({
    ...MOVIE_INDEX,
    refresh: 'true',
    body: MOVIE,
  });
});

it('should make getAllMovies database request', async () => {
  jest.spyOn(elasticClient, 'search').mockResolvedValue(ALL_MOVIES_RESPONSE);

  const result = await movieHandler.getAllMovies();

  expect(result).toEqual([ MOVIE, MOVIE ]);
  expect(elasticClient.search).toHaveBeenCalledWith({
    ...MOVIE_INDEX,
  });
});

it('should getMovieById database request', async () => {
  jest.spyOn(elasticClient, 'search').mockResolvedValue(MOVIE_RESPONSE);

  const result = await movieHandler.getMovieById(MOVIE_ID);

  expect(result).toEqual([MOVIE]);
  expect(elasticClient.search).toHaveBeenCalledWith({
    ...MOVIE_INDEX,
    q: `imdbid:${MOVIE_ID}&size=1`,
  });
});
