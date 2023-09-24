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
            <h3 className='top-heading'>Decision Support System (DSS) Tool</h3>
            <p className='top-paragraph intro-p'>
            DSS is based on a techno-economic-environmental analysis for low carbon technology options for generation of electricity and heat as well as energy efficiency. It integrates economic (cost) and operational emissions cost or benefit parameters within optimisation scheme.
            </p>
            <Button value="Start" onClick={onSurveyStart}/>
        </div>
    </div>

}

export default Module2Intro;