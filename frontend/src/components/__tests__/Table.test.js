import React from 'react';
import { shallow } from 'enzyme';
import Table from '../Table';

const ROWS = [['cell1', 'cell2'], ['cell3', 'cell4']];

const getRow = (wrapper, index) =>
  wrapper
    .children()
    .children()
    .at(index);

const getCellText = rowWrapper =>
  rowWrapper.children().map(e => e.children().text());

it('should render', () => {
  const wrapper = shallow(<Table rows={ROWS} />);

  expect(getCellText(getRow(wrapper, 0))).toEqual(ROWS[0]);
  expect(getCellText(getRow(wrapper, 1))).toEqual(ROWS[1]);
});
