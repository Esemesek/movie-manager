import React from 'react';
import MovieSearchBar from './MovieSearchBar';
import MovieList from './MovieList';
import AppBanner from '../components/AppBanner';

const Movies = () => (
  <div>
    <AppBanner />
    <MovieSearchBar />
    <MovieList />
  </div>
);

export default Movies;
