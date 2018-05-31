import { Client } from 'elasticsearch';

const matchAllQuery = {
  query: {
    match_all: {
    },
  },
};

const transformElasticResponse = (res: any) => res.hits.hits.map((e: any) => e._source);

export const client = new Client({
  host: 'http://elasticsearch:9200',
});

export const addMovie = (movieBody: any): Promise<any> => {
  return client.index({
    refresh: 'true',
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

export const getMovieById = async (id: string): Promise<any> => {
  const response = await client.search({
    index: 'movie',
    type: 'movie',
    q: `imdbid:${id}&size=1`,
  });

  return transformElasticResponse(response);
};

export const addComment = ({ id, comment } : { id: string, comment: string}): Promise<any> => {
  return client.index({
    refresh: 'true',
    index: 'comment',
    type: 'comment',
    body: { id, comment },
  });
}

export const getAllCommentsById = async (id: string): Promise<any> => {
  const response = await client.search({
    index: 'comment',
    type: 'comment',
    q: `id:${id}`,
  });

  return transformElasticResponse(response);
}
