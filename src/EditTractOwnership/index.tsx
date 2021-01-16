import React from 'react';
import { useTranslation } from 'react-i18next';

import { MineralInterest, Npri } from 'Types';

import { Table, Button } from 'react-bootstrap';
import Icon from 'Icon';
import MineralInterestRow from './MineralInterestRow';
import NpriRow from './NpriRow';
import { Handlers } from 'Hooks/useMineralInterestsHandler';

const EditTractOwnership = ({
  value = [],
  onChange: handlers,
}: {
  value: MineralInterest[];
  onChange: Handlers;
}) => {
  const { t } = useTranslation();

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
      { text: t('Owner') },
      { text: t('Mineral Interest') },
      { text: t('NPRI') },
      { text: t('Lease'), colSpan: 2 },
    ];

    return tableHeaders.map(toThElement);
  })();

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
      onRemove={() => handlers.removeMineral({ mineralId: mineralInterest.id })}
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
        onRemove={() =>
          handlers.removeNpri({
            mineralId: mineralInterest.id,
            npriId: npri.id,
          })
        }
      />
    )),
    <tr>
      <td className="text-right">
        <Button
          variant="light"
          onClick={() => handlers.addNpri({ mineralId: mineralInterest.id })}
        >
          <Icon icon="add" /> Add NPRI
        </Button>
      </td>
      <td colSpan={5} />
    </tr>,
  ];

  return (
    <Table>
      <thead>
        <tr>{thElements}</tr>
      </thead>
      <tbody>
        {value.flatMap(toRows)}
        <tr>
          <td className="text-right">
            <Button variant="light" onClick={handlers.addMineral}>
              <Icon icon="add" /> Add Mineral Interest
            </Button>
          </td>
          <td colSpan={5} />
        </tr>
      </tbody>
    </Table>
  );
};

export default EditTractOwnership;
