import {
  COMMENT_ADD_FETCH,
  COMMENT_ADD_FAIL,
  COMMENT_ADD_SUCCESS,
} from '../actions/commentAddActions';

const INITIAL_STATE = {
  fetching: false,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COMMENT_ADD_FETCH:
      return {
        ...state,
        fetching: true,
        error: false,
      };
    case COMMENT_ADD_FAIL:
      return {
        ...state,
        fetching: false,
        error: true,
      };
    case COMMENT_ADD_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: false,
      };
    default:
      return state;
  }
};
