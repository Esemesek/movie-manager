import React from 'react';
import { shallow } from 'enzyme';
import { Clear } from '@material-ui/icons';
import Image from '../Image';

const SRC = 'http://domain.com/someImage.jpg';
const INVALID_SRC = 'N/A';
const ALT = 'No image ;<';

it('should render image', () => {
  const wrapper = shallow(<Image src={SRC} alt={ALT} />);

  expect(wrapper.props()).toEqual({
    src: SRC,
    alt: ALT,
  });
});

it('should render Clear icon if image src is invalid', () => {
  const wrapper = shallow(<Image src={INVALID_SRC} alt={ALT} />);

  expect(wrapper.is(Clear)).toBeTruthy();
});
