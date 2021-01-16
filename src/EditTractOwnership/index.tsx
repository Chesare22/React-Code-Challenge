import React from 'react';

import { MineralInterest, Npri, UpdateProperty } from 'Types';

import { Table } from 'react-bootstrap';
import MineralInterestRow from './MineralInterestRow';
import NpriRow from './NpriRow';
import { Handlers } from 'Hooks/useMineralInterestsHandler';

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

const EditTractOwnership = ({
  value = [],
  onChange: handlers,
}: {
  value: MineralInterest[];
  onChange: Handlers;
}) => {
  const toRows = (mineralInterest: MineralInterest) => [
    <MineralInterestRow
      key={mineralInterest.id}
      value={mineralInterest}
      onUpdate={(propertyName) => (event) =>
        handlers.updateMineral({
          mineralId: mineralInterest.id,
          propertyName,
          newValue: event.currentTarget.value,
        })}
    />,
    ...mineralInterest.npris.map((npri: Npri) => (
      <NpriRow
        key={npri.id}
        value={npri}
        onUpdate={(propertyName) => (event) =>
          handlers.updateNpri({
            mineralId: mineralInterest.id,
            npriId: npri.id,
            propertyName,
            newValue: event.currentTarget.value,
          })}
      />
    )),
  ];

  return (
    <Table>
      <thead>
        <tr>{thElements}</tr>
      </thead>
      <tbody>{value.flatMap(toRows)}</tbody>
    </Table>
  );
};

export default EditTractOwnership;
