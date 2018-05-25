import * as databaseHandler from '../databaseHandler';
import elasticsearch from 'elasticsearch';

afterEach(() => {
  jest.restoreAllMocks();
});

const MOVIE = {
  title: 'SomeTitle',
  author: 'SomeAuthor',
};

const MATCH_ALL_QUERY = {
  query: {
    match_all: {
    },
  },
};

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

it('should make addMovie database request', async () => {
  jest.spyOn(databaseHandler.client, 'index').mockResolvedValue({});
  await databaseHandler.addMovie(MOVIE);

  expect(databaseHandler.client.index).toHaveBeenCalledWith({
    index: 'movie',
    type: 'movie',
    body: MOVIE,
  });
});

it('should make getAllMovies database request', async () => {
  jest.spyOn(databaseHandler.client, 'search').mockResolvedValue(ALL_MOVIES_RESPONSE);
  const result = await databaseHandler.getAllMovies();

  expect(databaseHandler.client.search).toHaveBeenCalledWith({
    index: 'movie',
    type: 'movie',
    body: MATCH_ALL_QUERY,
  });
  expect(result).toEqual([ MOVIE, MOVIE ]);
});
