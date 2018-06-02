import {
  COMMENT_ADD_FETCH,
  COMMENT_ADD_FAIL,
  COMMENT_ADD_SUCCESS,
} from '../../actions/commentAddActions';
import commentAddReducer, { INITIAL_STATE } from '../commentAddReducer';

const ILLEGAL_ACTION = 'ILLEGAL_ACTION';

it('should not dispatch illegal action', () => {
  expect(commentAddReducer(INITIAL_STATE, { type: ILLEGAL_ACTION })).toEqual(
    INITIAL_STATE,
  );
});

it(`should dispatch ${COMMENT_ADD_FETCH}`, () => {
  expect(commentAddReducer(INITIAL_STATE, { type: COMMENT_ADD_FETCH })).toEqual(
    {
      fetching: true,
      error: false,
    },
  );
});

it(`should dispatch ${COMMENT_ADD_FAIL}`, () => {
  expect(commentAddReducer(INITIAL_STATE, { type: COMMENT_ADD_FAIL })).toEqual({
    fetching: false,
    error: true,
  });
});

it(`should dispatch ${COMMENT_ADD_SUCCESS}`, () => {
  expect(
    commentAddReducer(INITIAL_STATE, { type: COMMENT_ADD_SUCCESS }),
  ).toEqual({
    fetching: false,
    error: false,
  });
});
