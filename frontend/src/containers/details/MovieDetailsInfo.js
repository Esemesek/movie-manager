import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { getMovie } from '../../actions/movieDetailsActions';
import GridWrapper from '../../components/GridWrapper';
import Table from '../../components/Table';
import Image from '../../components/Image';
import WithLoading from '../../components/WithLoading';

const HEADINGS = [
  'imdbid',
  'title',
  'year',
  'director',
  'writer',
  'actors',
  'rated',
  'released',
  'runtime',
  'genre',
  'metascore',
];

class MovieDetailsInfo extends Component {
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
  }

  getRows() {
    return HEADINGS.map(heading => [heading, this.props.details.data[heading]]);
  }

  render() {
    return (
      <WithLoading size={200} isLoading={this.props.details.fetching}>
        <Grid container>
          <GridWrapper title="Poster" xs={12} sm={4}>
            <Image src={this.props.details.data.poster} alt={this.props.details.data.title} />
          </GridWrapper>
          <GridWrapper title="Movie info" xs={12} sm={6}>
            <Table rows={this.getRows()} />
          </GridWrapper>
        </Grid>
      </WithLoading>
    );
  }
}

const mapStateToProps = state => ({
  details: state.movie.details,
});

const mapDispatchToProps = dispatch => ({
  getMovie: id => dispatch(getMovie(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetailsInfo));
