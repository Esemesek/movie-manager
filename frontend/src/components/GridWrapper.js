import React from 'react';
import styled from 'styled-components';
import { Typography, Grid } from '@material-ui/core';

const Container = styled.div`
  padding: ${({ padding }) => padding ? padding : 50}px;
  text-align: center;
`;

const GridWrapper = ({ children, title, padding, ...props }) => (
  <Grid item {...props}>
    <Container padding={padding}>
      <Typography variant="headline">{title}</Typography>
      {children}
    </Container>
  </Grid>
);

export default GridWrapper;
