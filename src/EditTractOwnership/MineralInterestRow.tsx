import React from 'react';
import { ButtonClickHandler, MineralInterest, UpdateProperty } from 'Types';

import { Form, Button } from 'react-bootstrap';
import Icon from 'Icon';
import InputWithAppendedText from 'atoms/InputWithAppendedText';

const MineralInterestRow = ({
  value,
  onUpdate: updateProperty = () => () => {},
  onRemove = () => {},
}: {
  value: MineralInterest;
  onUpdate?: UpdateProperty<MineralInterest>;
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
        <Button variant="light" onClick={onRemove}>
          {Icon({ icon: 'remove' })}
        </Button>
      </td>
    </tr>
  );
};

export default MineralInterestRow;
