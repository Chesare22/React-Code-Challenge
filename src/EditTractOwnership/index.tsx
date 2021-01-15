import React from 'react';

import { MineralInterest, Npri } from 'Types';

import { Table } from 'react-bootstrap';
import MineralInterestRow from './MineralInterestRow';
import NpriRow from './NpriRow';

const thElements = (function () {
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

  return tableHeaders.map(toThElement);
})();

const toMineralInterestRow = (mineralInterest: MineralInterest) => (
  <MineralInterestRow key={mineralInterest.id} value={mineralInterest} />
);

const toNpriRow = (value: Npri) => <NpriRow key={value.id} value={value} />;

const toRows = (mineralInterest: MineralInterest) => [
  toMineralInterestRow(mineralInterest),
  ...mineralInterest.npris.map(toNpriRow),
];

type Action =
  | 'addMineral'
  | 'addNpri'
  | 'removeMineral'
  | 'removeNpri'
  | 'updateMineral'
  | 'updateNpri'
  | undefined;

const EditTractOwnership = ({
  value = [],
  onChange = () => {},
}: {
  value: MineralInterest[];
  onChange?: (change?: {
    action: Action;
    recordId?: string;
    propName?: string;
    newVal?: any;
  }) => void;
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
