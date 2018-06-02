import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

const WithLoading = ({ children, isLoading, ...props }) => {
  if (isLoading) {
    return <CircularProgress {...props} />;
  }

  return children;
}

WithLoading.propTyps = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default WithLoading;
