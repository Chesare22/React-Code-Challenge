import React from 'react';

import { MineralInterest } from 'Types';

import { Table } from 'react-bootstrap';
import MineralInterestRow from './MineralInterestRow';

interface TableHeader {
  text: string,
  colSpan?: number,
}

const toThElement = ({text, colSpan}: TableHeader) => (
  <th key={text} colSpan={colSpan}> {text} </th>
);

const tableHeaders: TableHeader[] = [
  {text: 'Owner'},
  {text: 'Mineral Interest'},
  {text: 'NPRI'},
  {text: 'Lease', colSpan: 2},
];

const thElements = tableHeaders.map(toThElement);

const toMineralInterestRow = (mineralInterest: MineralInterest) => (
  <MineralInterestRow key={mineralInterest.id} value={mineralInterest} />
);

const EditTractOwnership = ({ value = [], onChange = () => { } }: {value: MineralInterest[], onChange?: Function}) => {
  return (
    <Table>
      <thead>
        <tr>{thElements}</tr>
      </thead>
      <tbody>
        {value.map(toMineralInterestRow)}
      </tbody>
    </Table>
  );
};

export default EditTractOwnership;
