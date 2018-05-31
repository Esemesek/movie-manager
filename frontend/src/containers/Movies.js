import React, { Component } from 'react';
import { connect } from 'react-redux';
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
