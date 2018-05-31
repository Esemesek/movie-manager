import elasticClient from './client';
import { transformElasticResponse } from '../utils';

const MOVIE_INDEX = {
  index: 'movie',
  type: 'movie',
};

export const addMovie = (movieBody: any): Promise<any> => {
  return elasticClient.index({
    ...MOVIE_INDEX,
    refresh: 'true',
    body: movieBody,
  });
};

export const getAllMovies = async (): Promise<any> => {
  const response = await elasticClient.search({
    ...MOVIE_INDEX,
  });

  return transformElasticResponse(response);
};

export const getMovieById = async (id: string): Promise<any> => {
  const response = await elasticClient.search({
    ...MOVIE_INDEX,
    q: `imdbid:${id}&size=1`,
  });

  return transformElasticResponse(response);
};
