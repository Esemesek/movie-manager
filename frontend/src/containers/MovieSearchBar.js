import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputBar from '../components/InputBar';
import { addMovie } from '../actions/movieAddActions';

export const MovieSearchBarContainer = ({ addStatus, addMovie }) => (
  <InputBar
    label="Add movie"
    onClick={addMovie}
    disabled={addStatus.fetching}
  />
);

MovieSearchBarContainer.propTypes = {
  addStatus: PropTypes.shape({
    fetching: PropTypes.bool.isRequired,
  }).isRequired,
  addMovie: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  addStatus: state.movie.add,
});

const mapDispatchToProps = dispatch => ({
  addMovie: title => dispatch(addMovie(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  MovieSearchBarContainer,
);
