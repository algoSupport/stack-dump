import React from 'react';
import { Typography } from '@material-ui/core';

function DetailsBox(props) {

    const getExtraStyles = () => {
        let extraStyles = {};
        if (props.isAnswered) {
            extraStyles = {
                ...extraStyles,
                border: '1px solid #5eba7d',
                color: '#5eba7d',
                borderRadius: '5px'
            }
        }

        if (props.acceptedAnswer) {
            extraStyles = {
                ...extraStyles,
                backgroundColor: '#5eba7d',
                color: 'white'
            }
        }
        return extraStyles;
    }

    return (
        <div style={{ margin: '1vh', display: 'flex', flexDirection: 'column', padding: '1vh', alignItems: 'center', color: '#848d95', ...getExtraStyles() }}>
            <Typography variant="h5">{props.value}</Typography>
            <Typography variant="body2">{props.label}</Typography>
        </div>
    );
}

export default DetailsBox;