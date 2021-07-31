import React from 'react';
import { TextField } from '@material-ui/core';

function TextFieldInput(props) {
    return (
        <TextField variant="outlined" autoComplete="off" size="small" fullWidth {...props} />
    );
}

export default TextFieldInput;