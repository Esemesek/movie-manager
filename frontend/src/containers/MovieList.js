import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { generate } from 'shortid';
import { fetchMovies } from '../actions/movieListActions';
import WithLoading from '../components/WithLoading';
import Card from '../components/Card';

const MovieListWrapper = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
`;

export class MovieListContainer extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  goToDetails = id => () => this.props.history.push(`/movie/${id}`);

  renderList() {
    return this.props.movieList.data.map(e => (
      <Grid
        key={generate()}
        item xs={12} sm={2}
        onClick={this.goToDetails(e.imdbid)}
      >
        <Card title={e.title} poster={e.poster} />
      </Grid>
    ));
  }

  render() {
    return (
      <MovieListWrapper>
        <WithLoading size={200} isLoading={this.props.movieList.fetching}>
          <Grid container>
            {this.renderList()}
          </Grid>
        </WithLoading>
      </MovieListWrapper>
    );
  }
}

MovieListContainer.propTypes = {
  movieList: PropTypes.shape({
    fetching: PropTypes.bool.isRequired,
    data: PropTypes.instanceOf(Object).isRequired,
  }).isRequired,
  getMovies: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  movieList: state.movie.list,
});

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(fetchMovies()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieListContainer));
