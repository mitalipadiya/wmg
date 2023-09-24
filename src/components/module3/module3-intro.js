import React from 'react'
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';

const Module3Intro = () => {
    const navigate = useNavigate();
    const onSurveyStart = () => {
        navigate("/module3")
    }
    return <div className='intro-main'>
        <div className='intro-container'>
            <h3 className='top-heading'>Supply Chain Assessment Tool</h3>
            <p className='top-paragraph intro-p'>
                This tool allows you to make supply chain decisions based on sectoral emission profiles from different countries across the world.
            </p>
            <Button value="Start" onClick={onSurveyStart} />
        </div>
    </div>

}

export default Module3Intro;