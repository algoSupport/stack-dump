import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import QuestionDetailsBox from './QuestionDetails/QuestionDetailsBox.jsx';
import QuestionTag from './QuestionDetails/QuestionTag.jsx';

function Question(props) {
    return (
        <>
            <div className='questions-primary-container'>
                <QuestionDetailsBox value={props.question.score} label="score" />
                <QuestionDetailsBox value={props.question.answer_count} label="answers" />
                <QuestionDetailsBox value={props.question.view_count} label="views" />
                <div className="questions-inner-container">
                    <Typography variant="h5" style={{ marginLeft: '2vh' }}>{props.question.title}</Typography>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {
                            props.question.tags.map(tag => {
                                return (
                                    <QuestionTag tag={tag} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Divider />
        </>
    );
}

export default Question;