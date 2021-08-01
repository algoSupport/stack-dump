import React from 'react';
import { Typography } from '@material-ui/core';
import moment from 'moment';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LanguageIcon from '@material-ui/icons/Language';
import RestoreIcon from '@material-ui/icons/Restore';
import { decodeHtmlEntity } from '../../../../utils/stack-utils';

function UserProfileBiography(props) {
    return (
        <div style={{ margin: '2vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <div>
                <Typography variant="h5" style={{ marginBottom: '2vh' }}>{decodeHtmlEntity(props.username)}</Typography>
            </div>
            <div>
                {props.location && <><LocationOnIcon style={{ display: 'inline', fontSize: '0.8rem', marginRight: '1vh', color: '#6a737c' }} />
                    <Typography variant="body2" style={{ display: 'inline-block', color: '#6a737c' }}>
                        {props.location}
                    </Typography></>}
                <br />
                {props.website && <> <LanguageIcon style={{ display: 'inline', fontSize: '0.8rem', marginRight: '1vh', color: '#6a737c' }} />
                    <Typography variant="body2" style={{ display: 'inline-block', color: '#6a737c' }}>
                        {props.website}
                    </Typography></>}
                <br />
                <RestoreIcon style={{ display: 'inline', fontSize: '0.8rem', marginRight: '1vh', color: '#6a737c' }} />
                <Typography variant="body2" style={{ display: 'inline-block', color: '#6a737c' }}>
                    Member since {moment(props.memberSince * 1000).format('MMM DD YYYY')}
                </Typography>
            </div>
        </div>
    );
}

export default UserProfileBiography;