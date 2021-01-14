import React from 'react';
import { Table } from 'react-bootstrap';
import { Tract } from '../Types';

interface TableHeader {
  text: string,
  colSpan?: number,
}

const tableHeaders: TableHeader[] = [
  {text: 'Owner'},
  {text: 'Mineral Interest'},
  {text: 'NPRI'},
  {text: 'Lease', colSpan: 2},
]

const headersJSX = tableHeaders.map(({text, colSpan}) => (
  <th key={text} colSpan={colSpan}> {text} </th>
));

const EditTractOwnership = ({ value = [], onChange = () => { } }: {value: Tract[], onChange?: Function}) => {
  return (
    <Table>
      <thead>
        <tr>{headersJSX}</tr>
      </thead>
    </Table>
  );
};

export default EditTractOwnership;
