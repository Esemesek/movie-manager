export const makeKeysLowerCased = (obj: any) => {
  return Object.keys(obj).reduce((acc, key) => ({
    ...acc,
    [key.toLocaleLowerCase()]: obj[key],
  }), {});
};
