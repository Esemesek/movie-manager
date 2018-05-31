import elasticClient from '../client';
import * as commentHandler from '../commentHandler';

const COMMENT_INDEX = {
  index: 'comment',
  type: 'comment',
};

const COMMENT = {
  id: 'commendId',
  comment: 'commentName',
};

const COMMENT_RESPONSE = {
  hits: {
    hits: [
      {
        _source: COMMENT,
      },
    ],
  },
};

afterEach(() => {
  jest.restoreAllMocks();
});

it('should addComment database request', async () => {
  jest.spyOn(elasticClient, 'index').mockResolvedValue({});
  await commentHandler.addComment(COMMENT);

  expect(elasticClient.index).toHaveBeenCalledWith({
    ...COMMENT_INDEX,
    refresh: 'true',
    body: COMMENT,
  });
});

it('should getAllCommentsById database request', async () => {
  jest.spyOn(elasticClient, 'search').mockResolvedValue(COMMENT_RESPONSE);
  const result = await commentHandler.getAllCommentsById(COMMENT.id);

  expect(result).toEqual([COMMENT]);
  expect(elasticClient.search).toHaveBeenCalledWith({
    ...COMMENT_INDEX,
    q: `id:${COMMENT.id}`,
  });
});
