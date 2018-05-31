export const makeKeysLowerCased = (obj: any) => {
  return Object.keys(obj).reduce((acc, key) => ({
    ...acc,
    [key.toLocaleLowerCase()]: obj[key],
  }), {});
};

export const transformElasticResponse = (res: any) => res.hits.hits.map((e: any) => e._source);
