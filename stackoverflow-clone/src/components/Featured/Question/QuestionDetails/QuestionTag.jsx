import React from 'react';
import { Typography } from '@material-ui/core';

function Tag(props) {
    return (
        <div style={{ backgroundColor: '#e1ecf4', margin: '0.2vh', padding: '0.5vh', display: 'inline', color: '#39739d' }}>
            <Typography variant="body2" style={{ display: 'inline' }}>{props.tag}</Typography>
        </div>
    );
}

export default Tag;