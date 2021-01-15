import React from 'react';

import { Npri, PropertyUpdater } from 'Types';

import { Form, Button } from 'react-bootstrap';
import Icon from 'Icon';
import InputWithAppendedText from 'atoms/InputWithAppendedText';

const NpriRow = ({
  value,
  onChange: updateProperty = () => () => {},
}: {
  value: Npri;
  onChange?: PropertyUpdater;
}) => {
  return (
    <tr>
      <td>
        <Form.Control
          type="text"
          defaultValue={value.owner}
          onChange={updateProperty('owner')}
        />
      </td>

      <td>{/* Mineral interest percentage column */}</td>

      <td>
        <InputWithAppendedText
          type="text"
          defaultValue={value.interest}
          onChange={updateProperty('interest')}
        >
          %
        </InputWithAppendedText>
      </td>

      <td>{/* Lease column */}</td>

      <td>
        <Button variant="light">
          <Icon icon="remove" />
        </Button>
      </td>
    </tr>
  );
};

export default NpriRow;
