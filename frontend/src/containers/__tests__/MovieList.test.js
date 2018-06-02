import React from 'react';
import { mount } from 'enzyme';
import { MovieListContainer } from '../MovieList';

const MOVIE = {
  imdbid: '123',
  poster: 'poster',
  title: 'movieTitle',
};

const MOVIE_LIST = [MOVIE];

const REDUX_MOVIE_LIST = {
  data: MOVIE_LIST,
};

const getMoviesMock = jest.fn();
const pushMock = jest.fn();
const HISTORY = {
  push: pushMock,
};

const mountComponent = fetching =>
  mount(
    <MovieListContainer
      movieList={{ ...REDUX_MOVIE_LIST, fetching }}
      getMovies={getMoviesMock}
      history={HISTORY}
    />,
  );

afterEach(() => {
  pushMock.mockReset();
  getMoviesMock.mockReset();
});

it('should be rendered correctly', () => {
  const wrapper = mountComponent(false);

  const gridList = wrapper.find('Grid');
  const gridContainer = gridList.first();
  const gridItem = gridList.at(1);

  expect(getMoviesMock).toHaveBeenCalled();
  expect(gridContainer.prop('container')).toBeTruthy();
  expect(gridItem.prop('item')).toBeTruthy();
  expect(gridItem.prop('xs')).toEqual(12);
  expect(gridItem.prop('sm')).toEqual(2);
  expect(wrapper.find('Card').props()).toEqual({
    title: MOVIE.title,
    poster: MOVIE.poster,
  });
});

it('should go to details after click', () => {
  const wrapper = mountComponent(false);

  const gridItem = wrapper.find('Grid').at(1);
  gridItem.simulate('click');

  expect(pushMock).toHaveBeenCalledWith(`/movie/${MOVIE.imdbid}`);
});

it('should not render list if component is loading', () => {
  const wrapper = mountComponent(true);
  const loadingComponent = wrapper.find('WithLoading');

  expect(loadingComponent.prop('size')).toEqual(200);
  expect(loadingComponent.prop('isLoading')).toBeTruthy();
  expect(wrapper.find('Grid').length).toEqual(0);
});
