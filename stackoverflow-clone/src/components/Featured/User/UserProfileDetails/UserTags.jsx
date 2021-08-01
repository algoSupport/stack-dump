import React from 'react';
import { Typography, Divider } from '@material-ui/core';

function UserTags(props) {
    const maxTags = props.tags.length > 5 ? 5 : props.tags.length;
    return (
        <div className="user-profile-tags-outer-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '2vh', gap: '1vh' }}>
            <Typography variant="h5">Top tags</Typography>
            {props.tags.slice(0, maxTags).map((tag) => {
                return (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', backgroundColor: '#fafafb' }}>
                        <div style={{ backgroundColor: '#e1ecf4', display: 'inline', padding: '1vh', margin: '1vh' }}>
                            {tag.name}
                        </div>
                        <div style={{ display: 'inline', padding: '1vh', margin: '0.5vh' }}>
                            <Typography variant="body2" style={{
                                display: 'inline',
                                fontVariant: 'small-caps',
                                marginRight: '1vh'
                            }}>
                                score
                            </Typography>
                            <Typography variant="h5" style={{ display: 'inline' }}>
                                {tag.count}
                            </Typography>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default UserTags;