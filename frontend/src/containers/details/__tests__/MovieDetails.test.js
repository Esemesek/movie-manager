import React from 'react';
import { shallow } from 'enzyme';
import { Grid } from '@material-ui/core';
import AppBanner from '../../../components/AppBanner';
import MovieDetailsComments from '../MovieDetailsComments';
import MovieDetailsInfo from '../MovieDetailsInfo';
import MovieDetails from '../MovieDetails';

const getContainersInGrid = wrapper =>
  wrapper
    .at(1)
    .children()
    .children();

it('should be rendered correctly', () => {
  const wrapper = shallow(<MovieDetails />).children();
  const containersInGrid = getContainersInGrid(wrapper);

  expect(wrapper.find(AppBanner).props('goBack')).toBeTruthy();
  expect(containersInGrid.find(MovieDetailsInfo).length).toEqual(1);
  expect(containersInGrid.find(MovieDetailsComments).length).toEqual(1);
});
