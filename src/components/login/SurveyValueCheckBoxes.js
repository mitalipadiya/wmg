import React, { useState } from 'react'
import './SurveyValueCheckBoxes.scss';
import Input from '../UI/Input';

const SurveyValueCheckBoxes = (props) => {
    const onChangeCheckbox = (index, value) => event => {
        props.accreditationsChange(index, value);
    }
    return <>
        <p className='check-box-para'>Please tick which industry recognised accreditations that your organisation has, if any</p>
        <div className='checkbox-grid'>
            {props.accreditations.map((data, index) => {
                return <div>
                    <input className='checkbox-style' type="checkbox" checked={data.selected} onChange={onChangeCheckbox(index, !data.selected)} />
                    <label className='checkbox-lable' for="vehicle1"> {data.name}</label>
                </div>
            })}
        </div>
    </>
}

export default SurveyValueCheckBoxes;