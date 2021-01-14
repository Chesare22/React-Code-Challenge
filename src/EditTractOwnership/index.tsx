import React from 'react';

import { MineralInterest } from '../Types';

import { Form, Table, Button } from 'react-bootstrap';
import Icon from '../Icon';
import InputWithAppendedText from '../atoms/InputWithAppendedText';

interface TableHeader {
  text: string,
  colSpan?: number,
}

const tableHeaders: TableHeader[] = [
  {text: 'Owner'},
  {text: 'Mineral Interest'},
  {text: 'NPRI'},
  {text: 'Lease', colSpan: 2},
]

const headersJSX = tableHeaders.map(({text, colSpan}) => (
  <th key={text} colSpan={colSpan}> {text} </th>
));

const EditTractOwnership = ({ value = [], onChange = () => { } }: {value: MineralInterest[], onChange?: Function}) => {
  return (
    <Table>
      <thead>
        <tr>{headersJSX}</tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Form.Control type="text" value={value[0].owner} />
          </td>
          <td>
            <InputWithAppendedText type="text" value={value[0].interest}>
              %
            </InputWithAppendedText>
          </td>
          <td>
            {/* NPRI interest column */}
          </td>
          <td>
            <Form.Control type="text" value={value[0].lease} />
          </td>
          <td>
            <Button variant="light">{Icon({icon: 'remove'})}</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default EditTractOwnership;
