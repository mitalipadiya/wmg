import { useSelector } from "react-redux";
import SurveyRadarChart from "./SurveyRadarChart";
import "./SurveyResults.scss";
import Button from '../UI/Button';

const SurveyResults = () => {
    const { surveyData } = useSelector(state => state.auth);
    return <div className="survey-results">
        <div className="survey-heading-main">
            <div>
                <h2>Here's the results of your survey</h2>
                <p>Survey done on <span>date</span></p>
            </div>
            <button>Re-take the survey</button>
        </div>
        <h3>Here's a summary of what you chose for materials and products (category 5/5)</h3>
        {surveyData?.categories.map((data)=> {
            return<SurveyRadarChart chartData = {data}/>

        })}
    </div>
}
export default SurveyResults;