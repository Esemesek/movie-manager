export default class MovieNotFoundError extends Error {
  constructor() {
    super('Movie not found');
  }
}