import React from 'react'
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';

const Module2Intro = () => {
    const navigate = useNavigate();
    const onSurveyStart = () => {
        navigate("/module2")
    }
    return <div className='intro-main'>
        <div className='intro-container'>
            <h3 className='top-heading'>Title about an intro to the survey</h3>
            <p className='top-paragraph intro-p'>
                Provident et aut veniam quia dolor dicta laboriosam pariatur nam
                quibusdam dicta beatae quas dolore inventore expedita ab sit.
            </p>
            <Button value="Start the survey" onClick={onSurveyStart}/>
        </div>
    </div>

}

export default Module2Intro;