import React from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from '@material-ui/core';

const renderRow = cells => cells.map(e => (
  <TableCell>{e}</TableCell>
));

const TableContainer = ({ rows }) => (
  <Table>
    <TableBody>
      {rows.map(e => <TableRow>{renderRow(e)}</TableRow>)}
    </TableBody>
  </Table>
);

export default TableContainer;
