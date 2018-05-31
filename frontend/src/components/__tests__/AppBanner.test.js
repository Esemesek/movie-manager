import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import { AppBannerContainer } from '../AppBanner';

const goBackMock = jest.fn();

const history = {
  goBack: goBackMock,
};

it('should render correctly with goBack option', () => {
  const wrapper = mount(<AppBannerContainer goBack history={history} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should render correctly without goBack button', () => {
  const wrapper = mount(<AppBannerContainer history={history} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
