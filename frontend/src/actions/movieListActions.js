import axios from 'axios';

export const MOVIE_LIST_FETCH = 'MOVIE_LIST_FETCH';
export const MOVIE_LIST_SUCCESS = 'MOVIE_LIST_SUCCESS';
export const MOVIE_LIST_FAIL = 'MOVIE_LIST_FAIL';

const movieListFetch = () => ({
  type: MOVIE_LIST_FETCH,
});

const movieListSuccess = movieList => ({
  type: MOVIE_LIST_SUCCESS,
  payload: {
    movieList,
  },
});

const movieListFail = () => ({
  type: MOVIE_LIST_FAIL,
});

export const fetchMovies = () => dispatch => {
  dispatch(movieListFetch());

  return axios.get('/api/movies')
    .then(res => dispatch(movieListSuccess(res.data)))
    .catch(() => dispatch(movieListFail()));
};
