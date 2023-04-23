import { useNavigate } from "react-router-dom";
import SummaryQuestion from "./SummaryQuestion";

const Summary = (props) => {
    const navigate = useNavigate();
    const onOptionChange = (index, option) => event => {
        console.log("Index ==>", index, "option ==>", option);
        props.onSummaryOptionSelected(index, option);
    }
    const onSurveyResults = () => {
        navigate("/survey-results")
    }

    return <>
        {props.questions.map((ele, index) => {
            return <SummaryQuestion quesNo={index + 1} question={ele} onSummaryOptionSelected={props.onSummaryOptionSelected} onOptionChange={onOptionChange} />
        })}
        <div className='btn-nav-div'>
            <button disabled className='btn-nav' >Previous</button>
            {props.showSurveyResults ? 
            <button className='btn-nav' onClick={onSurveyResults}>See survey results</button> :
            <button className='btn-nav' onClick={props.onNextCategory}>Next category</button>
            }
        </div>
    </>
}
export default Summary;