import React from 'react';
import { injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Movies from './containers/Movies';
import MovieDetails from './containers/details/MovieDetails';
import store from './store';

injectGlobal`
  body {
    margin: 0;
  }
`;

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Movies} />
        <Route path="/movie/:id" component={MovieDetails} />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
