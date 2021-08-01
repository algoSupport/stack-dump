import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Question from './Question/Question.jsx';
import { Typography } from '@material-ui/core';
import { fetchQuestions } from '../../services/question-service.js';
import '../../sassStyles/featured-questions.scss';

function Featured(props) {
    const history = useHistory();
    const [questions, setQuestions] = useState([]);

    // Reading from local to not hit API rate limits
    const importQnsFromFile = async () => {
        const response = await fetch('http://localhost:3000/sample_featured.txt');
        const data = await response.json();
        setQuestions(data.items);
    }

    useEffect(() => {
        (async function () {
            //importQnsFromFile();
            let questionsData = {};
            try {
                questionsData = await fetchQuestions();
                setQuestions(questionsData.items);
            }
            catch (err) {
                console.log("An error occurred while fetching featured questions:", err.toString());
                history.push('/error')
            }
        })();
    }, []);

    useEffect(() => {
        if (questions.length > 0) console.log(questions);
    }, [questions])

    return (
        <>
            <div className='featured-container'>
                <div className='questions-outer-container'>
                    <Typography variant="h3" style={{ margin: '2vh' }}>Top Questions</Typography>
                    {
                        questions.map((question) => {
                            return (<Question question={question} key={question.title} />);
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Featured;