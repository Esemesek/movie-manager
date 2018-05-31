import {
  COMMENT_FAIL,
  COMMENT_SUCCESS,
  COMMENT_FETCH,
} from '../actions/commentActions';

const INITIAL_STATE = {
  fetching: false,
  error: false,
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COMMENT_FETCH:
      return {
        ...state,
        fetching: true,
        error: false,
      };
    case COMMENT_FAIL:
      return {
        ...state,
        fetching: false,
        error: true,
      };
    case COMMENT_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: false,
        data: action.payload.comments,
      };
    default:
      return state;
  }
}
