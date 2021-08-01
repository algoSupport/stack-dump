import React from 'react';
import { Typography } from '@material-ui/core';

function UserProfilePicture(props) {

    return (
        <div>
            <div className="user-profile-picture-container" style={{ display: 'inline-block', margin: '2vh', backgroundColor: '#eff0f1', padding: '2vh', border: '1px solid #d6d9dc' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <img src={props.pictureUrl} style={{ margin: '1vh' }} />
                    <div className="user-profile-reputation" style={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="h5" style={{ marginRight: '1vh' }}>
                            {props.reputation}
                        </Typography>
                        <Typography style={{ fontSize: '0.7rem', fontVariant: 'small-caps' }}>
                            reputation
                        </Typography>
                    </div>
                    <div className="user-profile-badges-container" style={{ display: 'flex', width: '100%', color: '#3c4146' }}>
                        <div className="user-profile-badge" style={{ backgroundColor: '#fff4d1', border: '1px solid #f1b600' }}>
                            {props.badgeCounts.gold}
                        </div>
                        <div className="user-profile-badge" style={{ backgroundColor: '#e8e8e8', border: '1px solid #9a9c9f' }}>
                            {props.badgeCounts.silver}
                        </div>
                        <div className="user-profile-badge" style={{ backgroundColor: '#f2e9e1', border: '1px solid #ab825f' }}>
                            {props.badgeCounts.bronze}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default UserProfilePicture;