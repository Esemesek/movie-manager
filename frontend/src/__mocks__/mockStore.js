import thunkMiddleware from 'redux-thunk';
import configureStore from 'redux-mock-store';

const middlewares = [thunkMiddleware];

export default initialState => configureStore(middlewares)(initialState);
