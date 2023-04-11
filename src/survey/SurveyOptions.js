import React from 'react'
import './SurveyOptions.css';

const SurveyOptions=(props)=> {
  return (
    <div className='option-div-1'>
        <p className='options-para-1'>
            {props.option}</p>
    </div>
  )
}

export default SurveyOptions;