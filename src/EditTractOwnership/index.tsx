import React from 'react';

import { MineralInterest, Npri, UpdateProperty } from 'Types';

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

type PropName = Parameters<UpdateProperty>[0];

interface Action {
  type:
    | 'addMineral'
    | 'addNpri'
    | 'removeMineral'
    | 'removeNpri'
    | 'updateMineral'
    | 'updateNpri';
  recordId?: string;
  propName?: PropName;
  newVal?: string;
}

interface Dispatch {
  (action: Action): any;
}

const createUpdater = (
  dispatch: Dispatch,
  type: Action['type'],
  recordId: string
) => (propName: PropName) => (event: any) => {
  dispatch({
    type,
    recordId,
    propName,
    newVal: event.target.value,
  });
};

const EditTractOwnership = ({
  value = [],
  onChange = () => {},
}: {
  value: MineralInterest[];
  onChange: Dispatch;
}) => {
  const toMineralInterestRow = (mineralInterest: MineralInterest) => (
    <MineralInterestRow
      key={mineralInterest.id}
      value={mineralInterest}
      onChange={createUpdater(onChange, 'updateMineral', mineralInterest.id)}
    />
  );

  const toNpriRow = (npri: Npri) => (
    <NpriRow
      key={npri.id}
      value={npri}
      onChange={createUpdater(onChange, 'updateNpri', npri.id)}
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

export default EditTractOwnership;
export type { Action };
