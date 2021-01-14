import React from 'react';

import { MineralInterest, Npri } from 'Types';

import { Form, Button } from 'react-bootstrap';
import Icon from 'Icon';
import InputWithAppendedText from 'atoms/InputWithAppendedText';

const MineralInterestRow = ({ value }: { value: MineralInterest }) => (
  <tr>
    <td>
      <Form.Control type="text" value={value.owner} />
    </td>

    <td>
      <InputWithAppendedText type="text" value={value.interest}>
        %
      </InputWithAppendedText>
    </td>

    <td>{/* NPRI percentage column */}</td>

    <td>
      <Form.Control type="text" value={value.lease} />
    </td>

    <td>
      <Button variant="light">{Icon({ icon: 'remove' })}</Button>
    </td>
  </tr>
);

export default MineralInterestRow;
