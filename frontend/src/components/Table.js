import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';
import { generate } from 'shortid';

const renderRow = cells => cells.map(e => (
  <TableCell key={generate()}>{e}</TableCell>
));

const TableContainer = ({ rows }) => (
  <Table>
    <TableBody>
      {rows.map(e => <TableRow key={generate()}>{renderRow(e)}</TableRow>)}
    </TableBody>
  </Table>
);

TableContainer.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
};

export default TableContainer;
