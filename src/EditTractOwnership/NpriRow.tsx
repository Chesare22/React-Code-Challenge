import React from 'react';
import { useTranslation } from 'react-i18next';

import { Npri, UpdateProperty, ButtonClickHandler } from 'Types';

import { Form, Button, InputGroup } from 'react-bootstrap';
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
  const { t } = useTranslation();
  return (
    <tr>
      <td>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text className="bg-transparent border-0">
              <Icon icon="indent" />
            </InputGroup.Text>
          </InputGroup.Prepend>

          <Form.Control
            type="text"
            placeholder={t('Owner')}
            defaultValue={value.owner}
            onChange={updateProperty('owner')}
          />
        </InputGroup>
      </td>

      <td>{/* Mineral interest percentage column */}</td>

      <td>
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
