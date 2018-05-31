import elasticClient from './client';
import { transformElasticResponse } from '../utils';

const COMMENT_INDEX = {
  index: 'comment',
  type: 'comment',
};

export const addComment = ({ id, comment } : { id: string, comment: string}): Promise<any> => {
  return elasticClient.index({
    ...COMMENT_INDEX,
    refresh: 'true',
    body: { id, comment },
  });
};

export const getAllCommentsById = async (id: string): Promise<any> => {
  const response = await elasticClient.search({
    ...COMMENT_INDEX,
    q: `id:${id}`,
  });

  return transformElasticResponse(response);
};
