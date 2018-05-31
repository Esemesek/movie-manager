import axios from 'axios';
import { fetchComments } from './commentActions';

export const COMMENT_ADD_FETCH = 'COMMENT_ADD_FETCH';
export const COMMENT_ADD_SUCCESS = 'COMMENT_ADD_SUCCESS';
export const COMMENT_ADD_FAIL = 'COMMENT_ADD_FAIL';

const commentAddFetch = () => ({
  type: COMMENT_ADD_FETCH,
});

const commentAddSuccess = () => ({
  type: COMMENT_ADD_SUCCESS,
});

const commentAddFail = () => ({
  type: COMMENT_ADD_FAIL,
});

export const addComment = (id, comment) => (dispatch) => {
  dispatch(commentAddFetch());

  return axios.post('/api/comments/', { id, comment })
    .then(() => {
      dispatch(commentAddSuccess());
      dispatch(fetchComments(id));
    })
    .catch(() => dispatch(commentAddFail()));
}
