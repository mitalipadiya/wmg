import React from 'react'
import './Intro.css';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
    const navigate = useNavigate();
    const onSurveyStart = () => {
        navigate("/module1")
    }
    return <div className='intro-main'>
        <div className='intro-container'>
            <h3 className='top-heading'>Net Zero Readiness Assessment Tool</h3>
            <p className='top-paragraph intro-p'>
            This tool is a form of survey that allows you to measure your net zero readiness level across five categories including- 1. Buildings and Services, 2.Organisation and Culture, 3.Supply Chain and Logistics, 4.Manufacturing Processes, 5.Materials and Products

            </p>
            <Button value="Start the survey" onClick={onSurveyStart}/>
        </div>
    </div>

}

export default Intro;