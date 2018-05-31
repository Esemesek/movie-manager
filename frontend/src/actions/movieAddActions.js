import axios from 'axios';
import { fetchMovies } from './movieListActions';

export const MOVIE_ADD_FETCH = 'MOVIE_ADD_FETCH';
export const MOVIE_ADD_SUCCESS = 'MOVIE_ADD_SUCCESS';
export const MOVIE_ADD_FAIL = 'MOVIE_ADD_FAIL';

const movieFetch = () => ({
  type: MOVIE_ADD_FETCH,
});

const movieSuccess = () => ({
  type: MOVIE_ADD_SUCCESS,
});

const movieFail = () => ({
  type: MOVIE_ADD_FAIL,
});

export const addMovie = title => (dispatch) => {
  dispatch(movieFetch());

  return axios.post('/api/movies' , { title })
    .then(() => {
      dispatch(movieSuccess());
      dispatch(fetchMovies());
    })
    .catch(() => dispatch(movieFail()));
}
