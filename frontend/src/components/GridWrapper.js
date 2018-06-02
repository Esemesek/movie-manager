import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography, Grid } from '@material-ui/core';

const Container = styled.div`
  padding: 50px;
  text-align: center;
`;

const GridWrapper = ({ children, title, ...props }) => (
  <Grid item {...props}>
    <Container>
      <Typography variant="headline">{title}</Typography>
      {children}
    </Container>
  </Grid>
);

GridWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default GridWrapper;
