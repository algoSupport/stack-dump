import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Typography } from '@material-ui/core';
import { decodeHtmlEntity } from '../../../../utils/stack-utils';

function Owner(props) {

    const showUsername = (username, userId) => {
        return (<Typography style={{ color: '#0077cc', fontSize: '0.8rem', display: 'inline' }}>
            <Link to={`/users/${userId}`}>
                {decodeHtmlEntity(username)}
            </Link></Typography>)
    }

    const showQuestionDetails = (props) => {
        return (
            <>
                <Typography style={{ color: '#9199a1', fontSize: '0.8rem' }}>
                    modified {moment(props.modified * 1000).format('MMM DD [at] h:mm')} by {showUsername(props.owner.display_name, props.owner.user_id)} {props.owner.reputation}
                </Typography>
            </>
        )
    }

    return (
        <>
            {showQuestionDetails(props)}
        </>
    );
}

export default Owner;