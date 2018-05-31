import axios from 'axios';

export const MOVIE_DETAIL_FETCH = 'MOVIE_DETAIL_FETCH';
export const MOVIE_DETAIL_SUCCESS = 'MOVIE_DETAIL_SUCCESS';
export const MOVIE_DETAIL_FAIL = 'MOVIE_DETAIL_FAIL';

const movieDetailFetch = () => ({
  type: MOVIE_DETAIL_FETCH,
});

const movieDetailSuccess = movie => ({
  type: MOVIE_DETAIL_SUCCESS,
  payload: {
    movie,
  },
});

const movieDetailFail = () => ({
  type: MOVIE_DETAIL_FAIL,
});

export const getMovie = id => (dispatch) => {
  dispatch(movieDetailFetch());

  return axios.get(`/api/movies/${id}`)
    .then(res => dispatch(movieDetailSuccess(res.data)))
    .catch(() => dispatch(movieDetailFail()));
};
