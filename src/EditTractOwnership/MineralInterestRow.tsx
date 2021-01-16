import React from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

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
  const { t } = useTranslation();

  return (
    <tr>
      <td className="readable-cell">
        <Form.Control
          type="text"
          placeholder={t('Owner')}
          defaultValue={value.owner}
          onChange={updateProperty('owner')}
        />
      </td>

      <td className="readable-cell">
        <InputWithAppendedText
          type="number"
          step="0.01"
          placeholder={t('Interest')}
          defaultValue={value.interest}
          onChange={updateProperty('interest')}
        >
          %
        </InputWithAppendedText>
      </td>

      <td>{/* NPRI percentage column */}</td>

      <td className="readable-cell">
        <Form.Control
          type="text"
          placeholder={t('Lease')}
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
