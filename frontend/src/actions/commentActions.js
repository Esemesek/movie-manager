import axios from 'axios';

export const COMMENT_FETCH = 'COMMENT_FETCH';
export const COMMENT_SUCCESS = 'COMMENT_SUCCESS';
export const COMMENT_FAIL = 'COMMENT_FAIL';

const commentFetch = () => ({
  type: COMMENT_FETCH,
});

const commentSuccess = comments => ({
  type: COMMENT_SUCCESS,
  payload: {
    comments,
  },
});

const commentFail = () => ({
  type: COMMENT_FAIL,
});

export const fetchComments = id => (dispatch) => {
  dispatch(commentFetch());

  return axios.get(`/api/comments/${id}`)
    .then(res => dispatch(commentSuccess(res.data)))
    .catch(() => dispatch(commentFail()))
};
