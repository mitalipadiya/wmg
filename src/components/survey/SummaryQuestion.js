import { useState } from 'react';
import './SummaryQuestion.css';
import SurveyOptions from './SurveyOptions';

const SummaryQuestion = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <div className="summary-ques-div">
            <div className='summary-ques-1'>
                <h3 className='summary-ques-h3'><span className='number'>{`${props.quesNo}. `}</span>{props.question.heading}</h3>
                <span className='change-answer' onClick={() => { setIsOpen(prev => !prev) }}>{isOpen ? 'Save change' : 'Change answer'}</span>
            </div>

            <>
                {!isOpen ?
                    <p className="summary-ques-para">{props.question.options[props.question.selectedOption]}</p> : <div className='summary-options-div'>{
                        props.question?.options?.length ? props.question?.options.map((ele, index) => {
                            return <SurveyOptions option={ele} isSelected={props.question.selectedOption == index} onOptionSelected={props.onOptionChange(props.quesNo - 1, index)} optionIndex={index} />
                        }) : null}
                    </div>
                }</>
        </div>
    </>
}

export default SummaryQuestion;

