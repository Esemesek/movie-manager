import { Client } from 'elasticsearch';

const matchAllQuery = {
  query: {
    match_all: {
    },
  },
};

const transformElasticResponse = (res: any) => res.hits.hits.map((e: any) => e._source);

export const client = new Client({
  host: 'http://localhost:9200',
});

export const addMovie = (movieBody: any): Promise<any> => {
  return client.index({
    index: 'movie',
    type: 'movie',
    body: movieBody,
  });
};

export const getAllMovies = async (): Promise<any> => {
  const response = await client.search({
    index: 'movie',
    type: 'movie',
    body: matchAllQuery,
  });

  return transformElasticResponse(response);
};