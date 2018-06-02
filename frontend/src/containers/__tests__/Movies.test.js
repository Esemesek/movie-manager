import React from 'react';
import { shallow } from 'enzyme';
import MovieSearchBar from '../MovieSearchBar';
import MovieList from '../MovieList';
import AppBanner from '../../components/AppBanner';
import Movies from '../Movies';

it('should render correctly', () => {
  const wrapper = shallow(<Movies />);

  expect(wrapper.find(AppBanner).length).toEqual(1);
  expect(wrapper.find(MovieList).length).toEqual(1);
  expect(wrapper.find(MovieList).length).toEqual(1);
});
