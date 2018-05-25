import axios from 'axios';

const API_KEY = 'e5348b85';
const API_URL = `http://omdbapi.com/?apikey=${API_KEY}`;

export const getMovieByTitle = (title: string): Promise<any> => {
  return axios.get(`${API_URL}&t=${title}`);
};
