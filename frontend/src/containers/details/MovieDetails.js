import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import AppBanner from '../../components/AppBanner';
import MovieDetailsComments from './MovieDetailsComments';
import MovieDetailsInfo from './MovieDetailsInfo';

const MovieDetailsContainer = styled.div`
  text-align: center;
  margin: 40px;
`;

const MovieDetails = () => (
  <div>
    <AppBanner goBack />
    <MovieDetailsContainer>
      <Grid container justify="center" alignItems="center" direction="column">
        <MovieDetailsInfo />
        <MovieDetailsComments />
      </Grid>
    </MovieDetailsContainer>
  </div>
);

export default MovieDetails;
