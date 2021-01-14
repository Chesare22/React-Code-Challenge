import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

function InputWithAppendedText({children, ...inputProps}: any) {
    return (
        <InputGroup>
            <Form.Control {...inputProps} />
            <InputGroup.Append>
                <InputGroup.Text>{children}</InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>
    )
}

export default InputWithAppendedText;