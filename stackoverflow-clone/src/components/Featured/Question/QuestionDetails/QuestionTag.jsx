import React from 'react';

function QuestionTag(props) {
    return (
        <div style={{ backgroundColor: '#676767', margin: '0.5vh', padding: '0.5vh' }}>
            {props.tag}
        </div>
    );
}

export default QuestionTag;