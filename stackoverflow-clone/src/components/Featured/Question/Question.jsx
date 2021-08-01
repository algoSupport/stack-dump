import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import DetailsBox from './QuestionDetails/QuestionDetailsBox.jsx';
import Tag from './QuestionDetails/QuestionTag.jsx';
import Owner from './QuestionDetails/QuestionOwner.jsx';
import { decodeHtmlEntity } from '../../../utils/stack-utils.js';

function Question(props) {
    return (
        <>
            <div className='questions-primary-container'>
                <div style={{ display: 'flex' }}>
                    <DetailsBox value={props.question.score} label="score" />
                    <DetailsBox
                        value={props.question.answer_count} label="answers"
                        isAnswered={props.question.is_answered}
                        acceptedAnswer={props.question.accepted_answer_id}
                    />
                    <DetailsBox value={props.question.view_count} label="views" />
                </div>
                <div className='questions-inner-container'>
                    <div className='questions-bounty-container'>
                        <Typography style={{ fontSize: '0.6rem', display: 'inline' }}>
                            {props.question.bounty_amount}
                        </Typography>
                    </div>
                    <Typography variant="h5" style={{ display: 'inline', margin: '2vh', marginLeft: '0.5vh' }}>
                        {decodeHtmlEntity(props.question.title)}
                    </Typography>
                    <div className='question-sub-details' style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        margin: '1vh'
                    }}>
                        <div className='question-tags'>
                            {
                                props.question.tags.map(tag => {
                                    return (
                                        <Tag tag={tag} key={tag} />
                                    )
                                })
                            }
                        </div>
                        <Owner modified={props.question.last_activity_date} owner={props.question.owner} />
                    </div>
                </div>
            </div>
            <Divider />
        </>
    );
}

export default Question;