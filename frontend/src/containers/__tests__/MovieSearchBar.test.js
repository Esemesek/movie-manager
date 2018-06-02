import React from 'react';
import { shallow } from 'enzyme';
import { MovieSearchBarContainer } from '../MovieSearchBar';

const LABEL = 'Add movie';
const ADD_STATUS = { fetching: false };

const addMovieMock = jest.fn();

afterEach(() => {
  addMovieMock.mockReset();
});

it('should render movie search bar', () => {
  const wrapper = shallow(
    <MovieSearchBarContainer addMovie={addMovieMock} addStatus={ADD_STATUS} />,
  );

  const inputBar = wrapper.find('InputBar');
  expect(inputBar.props()).toEqual({
    label: LABEL,
    onClick: addMovieMock,
    disabled: false,
  });
});
