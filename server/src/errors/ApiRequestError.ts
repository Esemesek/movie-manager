export default class ApiRequestError extends Error {
  constructor() {
    super('Api request failed');
  }
}