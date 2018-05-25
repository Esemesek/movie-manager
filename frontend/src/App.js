import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './containers/MovieList';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={MovieList} />
    </BrowserRouter>
  </Provider>
);

export default App;
