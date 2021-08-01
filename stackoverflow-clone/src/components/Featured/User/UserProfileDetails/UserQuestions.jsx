import React from 'react';
import { Typography, Divider } from '@material-ui/core';

function UserQuestions(props) {
    const maxQuestions = props.questions.length > 5 ? 5 : props.questions.length;

    return (
        <div style={{ margin: '2vh 2vh 5vh 2vh', display: 'flex', flexDirection: 'column', gap: '2vh' }}>
            <Typography variant="h5" >Top questions</Typography>
            {
                props.questions.slice(0, maxQuestions).map((question) => {
                    return (
                        <>
                            <Divider />
                            <div className="user-profile-inner-qn-container" style={{}}>
                                <div className="user-profile-qn-answer-box" style={{ display: 'inline', margin: '1vh', backgroundColor: '#5eba7d', color: 'white', padding: '1vh 2vh 1vh 2vh' }}>
                                    {question.answer_count}
                                </div>
                                <div className="user-profile-qn-title" style={{ display: 'inline', margin: '1vh' }}>
                                    <Typography variant="body2" style={{ display: 'inline', color: '#008cdb' }}>{question.title}</Typography>
                                </div>
                            </div>
                        </>
                    );
                })
            }
        </div>
    );
}

export default UserQuestions;