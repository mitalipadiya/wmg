import SummaryQuestion from "./SummaryQuestion";

const Summary = (props) => {
    const onOptionChange = (index, option) => event => {
        props.onSummaryOptionSelected(index, option);
    }

    return <>
        {props.questions.map((ele, index) => {
            return <SummaryQuestion quesNo={index + 1} question={ele} onSummaryOptionSelected={props.onSummaryOptionSelected} onOptionChange={onOptionChange} />
        })}
        <div className='btn-nav-div prev-summary'>
            <button disabled className='btn-nav' >Previous</button>
            {props.showSurveyResults ?
                <button className='btn-nav' onClick={props.onSurveyResults}>See survey results</button> : <button className='btn-nav' onClick={props.onNextCategory}>Next category</button>
            }
        </div>
    </>
}
export default Summary;