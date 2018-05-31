import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Image from './Image';

const CardWrapper = styled.div`
  background-color: #fcfcfc;
  margin: 10px;
  border: 1px #bfbfbf solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 100%;
`;

const Card = ({ title, poster }) => (
  <CardWrapper>
    {poster === 'N/A'
      ? <Typography variant="headline">{title}</Typography>
      : null}
    <Image src={poster} width={200} />
  </CardWrapper>
);

export default Card;
