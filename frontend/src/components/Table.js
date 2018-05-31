import React from 'react';
import {
  Table,
  TableBody,
  TableHead,
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

export default TableContainer;
