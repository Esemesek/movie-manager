import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { AppBannerContainer } from '../AppBanner';

const TITLE = 'Movie Manager';
const COLOR = 'default';
const POSITION = 'static';
const VARIANT = 'title';

const goBackMock = jest.fn();

const HISTORY = {
  goBack: goBackMock,
};

const expectAppBar = appBar => {
  expect(appBar.prop('color')).toEqual(COLOR);
  expect(appBar.prop('position')).toEqual(POSITION);
};

const expectTitle = title => {
  expect(title.prop('variant')).toEqual(VARIANT);
  expect(title.text()).toEqual(TITLE);
};

afterEach(() => {
  goBackMock.mockReset();
});

it('should render app without goBack button', () => {
  const wrapper = mount(<AppBannerContainer history={HISTORY} />);

  const appBar = wrapper.find('AppBar');
  const button = wrapper.find('Button');
  const title = wrapper.find('Typography');

  expect(button.length).toEqual(0);
  expectAppBar(appBar);
  expectTitle(title);
});

it('should render app with goBack button', () => {
  const wrapper = mount(<AppBannerContainer goBack history={HISTORY} />);

  const appBar = wrapper.find('AppBar');
  const button = wrapper.find('Button');
  const title = wrapper.find('Typography');

  expect(button.length).toEqual(1);
  expectAppBar(appBar);
  expectTitle(title);
});

it('should goBack in history when button is clicked', () => {
  const wrapper = mount(<AppBannerContainer goBack history={HISTORY} />);
  const button = wrapper.find('Button');

  button.simulate('click');

  expect(goBackMock).toHaveBeenCalled();
});
