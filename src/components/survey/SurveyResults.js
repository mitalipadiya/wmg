import { useSelector } from "react-redux";
import "./SurveyResults.scss";
import GenericPdfDownloader from "../../services/GenericPdfDownloader";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import userService from "../../services/user.service";
import RadarChartSurvey from "./RadarChartSurvey";

const SurveyResults = () => {
    const { surveyData } = useSelector(state => state.auth);
    const navigate = useNavigate();

    const updateLocalSurveyData = (currentData) => {
        let userData = localStorage.getItem('user');
        let timestamp = Date.now();
        if (userData) {
            let parsedUserData = JSON.parse(userData);
            userService.updateSurvey(parsedUserData._id, currentData, timestamp).then(data => {
                parsedUserData.survey_data = { ...currentData, ...{ lastUpdated: timestamp } };
                localStorage.setItem('user', JSON.stringify(parsedUserData));
            },
                (error) => {
                    console.log("error ==>", error);
                });
        }
    }

    const retakeSurvey = () => {
        let currentData = { ...surveyData };
        for (let i = 0; i < currentData.categories.length; i++) {
            for (let j = 0; j < currentData.categories[i].questions.length; j++) {
                currentData.categories[i].questions[j].selectedOption = null;
            }
        }
        updateLocalSurveyData(currentData);
        navigate("/intro");
    }
    return <div className="survey-results" id="radarChart">
        <div className="survey-heading-main">
            <div>
                <h2>Here's the results of your survey</h2>
                <p>Survey done on <span>
                    <Moment format="MMMM Do YYYY" withTitle>
                        {new Date(surveyData?.lastUpdated)}
                    </Moment>
                </span></p>
            </div>
            <div className="survey-actions">
                <GenericPdfDownloader
                    downloadFileName="SurveyPdf"
                    rootElementId="radar-chart-div"
                    surveyData={surveyData}
                />
                <button onClick={retakeSurvey}>Re-take the survey</button>
            </div>
        </div>
        {/* <SurveyRadarChart chartData={surveyData?.categories} isOverall={true}/> */}
        <div className="radar-main">
            <div className="radar-legends">
                <h2>Overall Summary</h2>
                <h3></h3>
                <ul className="radar-ul" id="radar-label-list">
                    <li className="radar-legend-name"><span style={{backgroundColor: "#27272A"}}></span>Company readiness level (CRL)</li>
                    <li className="radar-legend-name"><span style={{backgroundColor: "#79D4F1"}}></span>Industry average readiness level (IARL)</li>
                    <li className="radar-legend-name"><span style={{backgroundColor: "#B8BF29"}}></span>Maximum readiness level (MRL)</li>
                    <li className="radar-legend-name"><span style={{backgroundColor: "#F9B123"}}></span>Lowest readiness level (LRL)</li>
                </ul>
            </div>
            <div className="radar-chart radar-chart-div">
                <RadarChartSurvey data={surveyData?.categories} isOverall={true} />
            </div>
        </div>
        <h3>Here's the results breakdown of individual categories</h3>
        {surveyData?.categories.map((data) => {
            console.log("Data ==>", data);
            return <div className="radar-main">
            <div className="radar-legends">
                <h2>{data.category}</h2>
                <h3>{data.subHeading}</h3>
                <ul>
                    <li className="radar-legend-name"><span style={{backgroundColor: "#27272A"}}></span>Company readiness level (CRL)</li>
                    <li className="radar-legend-name"><span style={{backgroundColor: "#79D4F1"}}></span>Industry average readiness level (IARL)</li>
                    <li className="radar-legend-name"><span style={{backgroundColor: "#B8BF29"}}></span>Maximum readiness level (MRL)</li>
                    <li className="radar-legend-name"><span style={{backgroundColor: "#F9B123"}}></span>Lowest readiness level (LRL)</li>
                </ul>
            </div>
            <div className="radar-chart radar-chart-div">
                <RadarChartSurvey data={data} isOverall={false} />
            </div>
        </div>
            
            
            // <div>
            //     {/* <SurveyRadarChart chartData={data} isOverall={false}/> */}
            //     <RadarChartSurvey data={data} isOverall={false} />

            // </div>

        })}
    </div>
}
export default SurveyResults;