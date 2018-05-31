import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Paper, Typography } from '@material-ui/core';
import AppBanner from '../../components/AppBanner';
import MovieDetailsComments from './MovieDetailsComments';
import MovieDetailsInfo from './MovieDetailsInfo';

const MovieDetailsContainer = styled.div`
  text-align: center;
  margin: 40px;
`;

class MovieDetails extends Component {
  renderTable() {
    return (
      <MovieDetailsContainer>
        <Grid container justify="center" alignItems="center" direction="column">
          <MovieDetailsInfo />
          <MovieDetailsComments />
        </Grid>
      </MovieDetailsContainer>
    );
  }

  render() {
    return (
      <div>
        <AppBanner goBack />
        {this.renderTable()}
      </div>
    );
  }
}

export default MovieDetails;
