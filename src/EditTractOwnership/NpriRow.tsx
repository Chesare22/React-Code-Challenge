import React from 'react';

import { Npri } from 'Types';

import { Form, Button } from 'react-bootstrap';
import Icon from 'Icon';
import InputWithAppendedText from 'atoms/InputWithAppendedText';

const NpriRow = ({ value }: { value: Npri }) => (
  <tr>
    <td>
      <Form.Control type="text" value={value.owner} />
    </td>

    <td>{/* Mineral interest percentage column */}</td>

    <td>
      <InputWithAppendedText type="text" value={value.interest}>
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

export default NpriRow;
