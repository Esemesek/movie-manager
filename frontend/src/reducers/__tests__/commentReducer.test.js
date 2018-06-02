import {
  COMMENT_FAIL,
  COMMENT_SUCCESS,
  COMMENT_FETCH,
} from '../../actions/commentActions';
import commentReducer, { INITIAL_STATE } from '../commentReducer';

const COMMENTS = ['comment1', 'comment2'];
const ILLEGAL_ACTION = 'ILLEGAL_ACTION';

it('should not dispatch illegal action', () => {
  expect(commentReducer(INITIAL_STATE, { type: ILLEGAL_ACTION })).toEqual(
    INITIAL_STATE,
  );
});

it(`should dispatch ${COMMENT_FETCH}`, () => {
  expect(commentReducer(INITIAL_STATE, { type: COMMENT_FETCH })).toEqual({
    error: false,
    fetching: true,
    data: [],
  });
});

it(`should dispatch ${COMMENT_FAIL}`, () => {
  expect(commentReducer(INITIAL_STATE, { type: COMMENT_FAIL })).toEqual({
    error: true,
    fetching: false,
    data: [],
  });
});

it(`should dispatch ${COMMENT_SUCCESS}`, () => {
  expect(
    commentReducer(INITIAL_STATE, {
      type: COMMENT_SUCCESS,
      payload: { comments: COMMENTS },
    }),
  ).toEqual({
    fetching: false,
    error: false,
    data: COMMENTS,
  });
});
