import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';

const CARD_TITLE = 'cardTitle';
const INVALID_CARD_TITLE = 'N/A';
const CARD_POSTER = 'cardPoster';
const POSTER_WIDTH = 200;

const getCardTitle = wrapper =>
  wrapper
    .children()
    .first()
    .shallow()
    .shallow();

it('should render Card without title', () => {
  const wrapper = shallow(<Card title={CARD_TITLE} poster={CARD_POSTER} />);

  expect(wrapper.children().props()).toEqual({
    src: CARD_POSTER,
    width: POSTER_WIDTH,
  });
});

it('should render Card with title', () => {
  const wrapper = shallow(<Card title={CARD_TITLE} poster={INVALID_CARD_TITLE} />);

  expect(getCardTitle(wrapper).text()).toEqual(CARD_TITLE);
  expect(wrapper.children().at(1).props()).toEqual({
    src: INVALID_CARD_TITLE,
    width: POSTER_WIDTH,
  });
});
