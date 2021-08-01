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
                    <div className="user-profile-badges-container" style={{ display: 'flex', width: '100%' }}>
                        <div className="user-profile-badge" style={{ margin: '0.5vh', flexGrow: '1', padding: '1vh', backgroundColor: '#fff4d1', textAlign: 'center' }}>
                            {props.badgeCounts.gold}
                        </div>
                        <div className="user-profile-badge" style={{ margin: '0.5vh', flexGrow: '1', padding: '1vh', backgroundColor: '#e8e8e8', textAlign: 'center' }}>
                            {props.badgeCounts.silver}
                        </div>
                        <div className="user-profile-badge" style={{ margin: '0.5vh', flexGrow: '1', padding: '1vh', backgroundColor: '#f2e9e1', textAlign: 'center' }}>
                            {props.badgeCounts.bronze}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default UserProfilePicture;