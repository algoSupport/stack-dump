import React from 'react';
import { Typography } from '@material-ui/core';

function FieldError(props) {
    return (
        <div className='field-error' style={{ color: 'red' }}>
            <Typography variant="body2">{props.children}</Typography>
        </div>
    );
}

export default FieldError;