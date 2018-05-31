import axios from 'axios';
import ApiRequestError from './errors/ApiRequestError';
import MovieNotFoundEreor from './errors/MovieNotFoundError';

const API_KEY = 'e5348b85';
const API_URL = `http://omdbapi.com/?apikey=${API_KEY}`;

export const getMovieByTitle = async (title: string): Promise<any> => {
  let response;

  try {
    response = await axios.get(`${API_URL}&t=${title}`);
  } catch (e) {
    throw new ApiRequestError();
  }

  if (response.data.Error) {
    throw new MovieNotFoundEreor();
  }

  return response;
};
