import React, { useState } from 'react'
import './SurveyValueCheckBoxes.css';
import Input from '../UI/Input';

const SurveyValueCheckBoxes = () => {
    const [otherAccreditations, setOtherAccreditations] = useState("")
    return <>
        <p className='check-box-para'>Please tick which industry recognised accreditations that your organisation has, if any</p>
        <div className='checkbox-grid'>
            <div>
                <input className='checkbox-style' type="checkbox" />
                <label className='checkbox-lable' for="vehicle1"> ISO 90001 (Quality Management System)</label>
            </div>
            <div>
                <input className='checkbox-style' type="checkbox" />
                <label className='checkbox-lable' for="vehicle1"> ISO 90001 (Quality Management System)</label>
            </div>
            <div>
                <input className='checkbox-style' type="checkbox" />
                <label className='checkbox-lable' for="vehicle1"> ISO 90001 (Quality Management System)</label>
            </div>
            <div>
                <input className='checkbox-style' type="checkbox" />
                <label className='checkbox-lable' for="vehicle1"> ISO 90001 (Quality Management System)</label>
            </div>
            <div>
                <input className='checkbox-style' type="checkbox" />
                <label className='checkbox-lable' for="vehicle1"> ISO 90001 (Quality Management System)</label>
            </div>
            <div>
                <input className='checkbox-style' type="checkbox" />
                <label className='checkbox-lable' for="vehicle1"> ISO 90001 (Quality Management System)</label>
            </div>
            <div>
                <input className='checkbox-style' type="checkbox" />
                <label className='checkbox-lable' for="vehicle1"> ISO 90001 (Quality Management System)</label>
            </div>
            <div>
                <input className='checkbox-style' type="checkbox" />
                <label className='checkbox-lable' for="vehicle1"> ISO 90001 (Quality Management System)</label>
            </div>
            <div>
                <input className='checkbox-style' type="checkbox" />
                <label className='checkbox-lable' for="vehicle1"> ISO 90001 (Quality Management System)</label>
            </div>
        </div>
        <p className='check-box-para-2'>Please enter the other recognised accreditations that your organisation has separated by commas</p>
        <Input onChange={(event)=>setOtherAccreditations(event.target.value)} />
    </>
}

export default SurveyValueCheckBoxes;