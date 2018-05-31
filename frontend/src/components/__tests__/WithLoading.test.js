import React from 'react';
import { shallow } from 'enzyme';
import { CircularProgress } from '@material-ui/core';
import WithLoading from '../WithLoading';

const CONTENT = 'CONTENT';

it('should render loader when component is loading', () => {
  const wrapper = shallow(<WithLoading isLoading>{CONTENT}</WithLoading>);

  expect(wrapper.find(CircularProgress).length).toEqual(1);
});

it('should render children when componenet is not loading', () => {
  const wrapper = shallow(<WithLoading>{CONTENT}</WithLoading>);

  expect(wrapper.text()).toEqual(CONTENT);
});
