import React from 'react';

import { Npri, UpdateProperty, ButtonClickHandler } from 'Types';

import { Form, Button } from 'react-bootstrap';
import Icon from 'Icon';
import InputWithAppendedText from 'atoms/InputWithAppendedText';

const NpriRow = ({
  value,
  onUpdate: updateProperty = () => () => {},
  onRemove = () => {},
}: {
  value: Npri;
  onUpdate?: UpdateProperty<Npri>;
  onRemove?: ButtonClickHandler;
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
        <Button variant="light" onClick={onRemove}>
          <Icon icon="remove" />
        </Button>
      </td>
    </tr>
  );
};

export default NpriRow;
