import React from 'react';
import { Typography, Divider } from '@material-ui/core';

function QuestionDetailsBox(props) {
    return (
        <div style={{ margin: '2vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4">{props.value}</Typography>
            <Typography variant="body2">{props.label}</Typography>
        </div>
    );
}

export default QuestionDetailsBox;