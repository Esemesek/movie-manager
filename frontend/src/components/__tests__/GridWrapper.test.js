import React from 'react';
import { mount } from 'enzyme';
import GridWrapper from '../GridWrapper';

const TITLE = 'TITLE';
const CONTENT = 'CONTENT';
const CONTENT_CLASS = 'content-div';
const VARIANT = 'headline';

it('should wrap component with Grid', () => {
  const wrapper = mount(
    <GridWrapper title={TITLE}>
      <div className={CONTENT_CLASS}>{CONTENT}</div>
    </GridWrapper>,
  );
  const gridTitle = wrapper.find('Typography');

  expect(wrapper.find(`.${CONTENT_CLASS}`).text()).toEqual(CONTENT);
  expect(gridTitle.text()).toEqual(TITLE);
  expect(gridTitle.prop('variant')).toEqual(VARIANT);
});
