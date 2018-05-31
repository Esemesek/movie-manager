import React from 'react';
import { CircularProgress } from '@material-ui/core';

const WithLoading = ({ children, isLoading, ...props }) => {
  if (isLoading) {
    return <CircularProgress {...props} />;
  }

  return children;
}

export default WithLoading;
