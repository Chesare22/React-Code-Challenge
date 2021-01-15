import React from 'react';
import { MineralInterest, PropertyUpdater } from 'Types';

import { Form, Button } from 'react-bootstrap';
import Icon from 'Icon';
import InputWithAppendedText from 'atoms/InputWithAppendedText';

const MineralInterestRow = ({
  value,
  onChange: updateProperty = () => () => {},
}: {
  value: MineralInterest;
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

      <td>
        <InputWithAppendedText
          type="text"
          defaultValue={value.interest}
          onChange={updateProperty('interest')}
        >
          %
        </InputWithAppendedText>
      </td>

      <td>{/* NPRI percentage column */}</td>

      <td>
        <Form.Control
          type="text"
          defaultValue={value.lease}
          onChange={updateProperty('lease')}
        />
      </td>

      <td>
        <Button variant="light">{Icon({ icon: 'remove' })}</Button>
      </td>
    </tr>
  );
};

export default MineralInterestRow;
