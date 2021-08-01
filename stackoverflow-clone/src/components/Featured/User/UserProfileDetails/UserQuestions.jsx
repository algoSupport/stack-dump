import React from 'react';
import { Typography, Divider } from '@material-ui/core';

function UserQuestions(props) {
    const maxQuestions = props.questions.length > 5 ? 5 : props.questions.length;

    const getExtraStyles = (question) => {
        let extraStyles = {};
        if (question.is_answered) {
            extraStyles = {
                ...extraStyles,
                border: '1px solid #5eba7d',
                color: '#5eba7d',
                borderRadius: '5px'
            }
        }
        else {
            extraStyles = {
                ...extraStyles,
                border: '1px solid #9fa6ad',
                color: '#9fa6ad',
                borderRadius: '5px'
            }
        }

        if (question.accepted_answer_id) {
            extraStyles = {
                ...extraStyles,
                backgroundColor: '#5eba7d',
                color: 'white'
            }
        }
        return extraStyles;
    }

    return (
        <div style={{ margin: '2vh 2vh 5vh 2vh', display: 'flex', flexDirection: 'column', gap: '2vh' }}>
            <Typography variant="h5" >Top questions</Typography>
            {
                props.questions.slice(0, maxQuestions).map((question) => {
                    return (
                        <>
                            <Divider />
                            <div className="user-profile-inner-qn-container" style={{}}>
                                <div className="user-profile-qn-answer-box" style={{ display: 'inline', margin: '1vh', padding: '1vh 2vh 1vh 2vh', ...getExtraStyles(question) }}>
                                    {question.score}
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