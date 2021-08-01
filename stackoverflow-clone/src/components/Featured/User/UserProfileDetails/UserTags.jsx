import React from 'react';
import { Typography } from '@material-ui/core';

function UserTags(props) {
    const maxTags = props.tags.length > 5 ? 5 : props.tags.length;
    return (
        <div className="user-profile-tags-outer-container" style={{ display: 'inline', margin: '2vh' }}>
            <Typography variant="h5">Top tags</Typography>
            {props.tags.slice(0, maxTags).map((tag) => {
                return (
                    <div style={{ display: 'inline-block', backgroundColor: '#fafafb', margin: '1vh' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ backgroundColor: '#d1e5f1', display: 'inline', padding: '1vh', margin: '1vh', color: '#0077cc' }}>
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
                    </div>
                )
            })}
        </div>
    );
}

export default UserTags;