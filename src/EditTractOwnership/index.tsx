import React from 'react';

import { MineralInterest } from '../Types';

import { Table } from 'react-bootstrap';
import MineralInterestRow from './MineralInterestRow';

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

const toMineralInterestRow = (mineralInterest: MineralInterest) => (
  <MineralInterestRow key={mineralInterest.id} value={mineralInterest} />
)

const EditTractOwnership = ({ value = [], onChange = () => { } }: {value: MineralInterest[], onChange?: Function}) => {
  return (
    <Table>
      <thead>
        <tr>{headersJSX}</tr>
      </thead>
      <tbody>
        {value.map(toMineralInterestRow)}
      </tbody>
    </Table>
  );
};

export default EditTractOwnership;
