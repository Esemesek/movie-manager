import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import AppBanner from '../../components/AppBanner';
import MovieDetailsComments from './MovieDetailsComments';
import MovieDetailsInfo from './MovieDetailsInfo';

const MovieDetailsContainer = styled.div`
  text-align: center;
  margin: 40px;
`;

class MovieDetails extends Component {
  renderDetails() {
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
        {this.renderDetails()}
      </div>
    );
  }
}

export default MovieDetails;
