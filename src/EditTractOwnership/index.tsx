import React from 'react';

import { MineralInterest, Npri } from 'Types';

import { Table } from 'react-bootstrap';
import MineralInterestRow from './MineralInterestRow';
import NpriRow from './NpriRow';

interface TableHeader {
  text: string;
  colSpan?: number;
}

const toThElement = ({ text, colSpan }: TableHeader) => (
  <th key={text} colSpan={colSpan}>
    {text}
  </th>
);

const tableHeaders: TableHeader[] = [
  { text: 'Owner' },
  { text: 'Mineral Interest' },
  { text: 'NPRI' },
  { text: 'Lease', colSpan: 2 },
];

const thElements = tableHeaders.map(toThElement);

const toMineralInterestRow = (mineralInterest: MineralInterest) => (
  <MineralInterestRow key={mineralInterest.id} value={mineralInterest} />
);

const toNpriRow = (value: Npri) => <NpriRow key={value.id} value={value} />;

const toRows = (mineralInterest: MineralInterest) => [
  toMineralInterestRow(mineralInterest),
  ...mineralInterest.npris.map(toNpriRow),
];

const EditTractOwnership = ({
  value = [],
  onChange = () => {},
}: {
  value: MineralInterest[];
  onChange?: Function;
}) => {
  return (
    <Table>
      <thead>
        <tr>{thElements}</tr>
      </thead>
      <tbody>{value.map(toRows).flat()}</tbody>
    </Table>
  );
};

export default EditTractOwnership;
