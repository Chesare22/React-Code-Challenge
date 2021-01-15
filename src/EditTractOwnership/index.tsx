import React from 'react';

import { MineralInterest, Npri, PropertyUpdater } from 'Types';

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

type ActionType =
  | 'addMineral'
  | 'addNpri'
  | 'removeMineral'
  | 'removeNpri'
  | 'updateMineral'
  | 'updateNpri';

const EditTractOwnership = ({
  value = [],
  onChange = () => {},
}: {
  value: MineralInterest[];
  onChange: (change: {
    type: ActionType;
    recordId?: string;
    propName?: Parameters<PropertyUpdater>[0];
    newVal?: string;
  }) => any;
}) => {
  const createUpdater = (type: ActionType, recordId: string) => (
    propName?: Parameters<PropertyUpdater>[0]
  ) => (event: any) => {
    onChange({
      type,
      recordId,
      propName,
      newVal: event.target.value,
    });
  };
  const toMineralInterestRow = (mineralInterest: MineralInterest) => (
    <MineralInterestRow
      key={mineralInterest.id}
      value={mineralInterest}
      onChange={createUpdater('updateMineral', mineralInterest.id)}
    />
  );

  const toNpriRow = (npri: Npri) => (
    <NpriRow
      key={npri.id}
      value={npri}
      onChange={createUpdater('updateNpri', npri.id)}
    />
  );

  const toRows = (mineralInterest: MineralInterest) => [
    toMineralInterestRow(mineralInterest),
    ...mineralInterest.npris.map(toNpriRow),
  ];
  return (
    <Table>
      <thead>
        <tr>{thElements}</tr>
      </thead>
      <tbody>{value.map(toRows).flat()}</tbody>
    </Table>
  );
};

type Action = Parameters<
  Parameters<typeof EditTractOwnership>[0]['onChange']
>[0];

export default EditTractOwnership;
export type { Action };
