import React, { useEffect, useState } from 'react'
import './Module1.css';
import SurveyOptions from './SurveyOptions';
import Summary from './Summary';
import { useSelector } from 'react-redux';
import userService from '../services/user.service';

const Module1 = () => {
    const {surveyData, user} = useSelector(state => state.auth);
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState();
    const [showSummary, setShowSummary] = useState(false);
    const [showSurveyResults, setShowSurveyResults] = useState(false);

    useEffect(() => {
        setSelectedCategoryIndex(0);
        setSelectedCategory(surveyData?.categories[0].category);
        setQuestions(prev => {
            let ques = surveyData?.categories[selectedCategoryIndex]?.questions;
            setCurrentQuestion(ques[0]);
            return ques;
        });
        setCurrentQuestionIndex(0);
    }, []);

    const onPrevClick = () => {
        if (currentQuestionIndex == 0 && selectedCategoryIndex != 0) {
            setSelectedCategoryIndex(prev => {
                let categoryIndex = prev - 1;
                setSelectedCategory(surveyData?.categories[categoryIndex]?.category);
                setQuestions(prev1 => {
                    let ques = surveyData?.categories[categoryIndex]?.questions;
                    setCurrentQuestionIndex(ques.length - 1);
                    setCurrentQuestion(ques[ques.length - 1]);
                    return ques;
                })
                return categoryIndex;
            })
        } else {
            setCurrentQuestionIndex(prev => {
                let index = prev - 1;
                setCurrentQuestion(prev => questions[index]);
                return index;
            })
        }
    }

    const onNextCategory = () => {
        setShowSummary(false);
        if (selectedCategoryIndex != surveyData.categories.length - 1) {
            setSelectedCategoryIndex(prev => {
                let categoryIndex = prev + 1;
                setSelectedCategory(surveyData?.categories[prev + 1]?.category);
                setQuestions(prev1 => {
                    let ques = surveyData?.categories[categoryIndex]?.questions;
                    setCurrentQuestionIndex(0);
                    setCurrentQuestion(ques[0]);
                    return ques;
                })
                return categoryIndex;
            })
        }
    }
    const onNextClick = () => {
        if (currentQuestionIndex == questions.length - 1) {
            if (selectedCategoryIndex == surveyData.categories.length - 1) {
                setShowSurveyResults(true);
            }
            setShowSummary(true);
        } else {
            setCurrentQuestionIndex(prev => {
                let index = prev + 1;
                setCurrentQuestion(prev => questions[index]);
                return index;
            })
        }
    }
    const onOptionSelected = (param) => (event) => {
        setCurrentQuestion(prev => {
            let prevData = prev;
            prevData['selectedOption'] = param;
            return { ...prevData };
        })
        
        let timestamp = Date.now();
        userService.updateSurvey(user._id, surveyData, timestamp).then(data => {
            updateLocalSurveyData(timestamp);
            onNextClick();
        }, 
        (error)=> {
            console.log("error ==>", error);
        });
    }
    const onSummaryOptionSelected = (index, option) => {
        setQuestions(prev => {
            let ques = prev;
            ques[index].selectedOption = option;
            return [...ques];
        })
        let timestamp = Date.now();
        userService.updateSurvey(user._id, surveyData, timestamp).then(data => {
            updateLocalSurveyData(timestamp);
        }, 
        (error)=> {
            console.log("error ==>", error);
        });
    }
    const updateLocalSurveyData = (timestamp) => {
        let userData = localStorage.getItem('user');
        if(userData) {
            let parsedUserData = JSON.parse(userData);
            parsedUserData.survey_data = {...surveyData, ...{lastUpdated: timestamp}};
            localStorage.setItem('user', JSON.stringify(parsedUserData));
        }
    }

    return <div className='survey-parent-div'>
        <div> <h6 className='survey-heading-1'>CATEGORY {selectedCategoryIndex + 1}/{surveyData?.categories?.length}</h6>
            <div className='survey-div-Class-1'>
                <h2 className='survey-heading-2'>{selectedCategory}</h2>
                <p className='survey-para-1'>{showSummary ? 'Summary' : `${currentQuestionIndex + 1}/${questions?.length}`}</p>
            </div>
            <div className='survey-hr-div'>
                {surveyData?.categories?.length ? surveyData?.categories.map((ele, index) => {
                    return <hr className={`survey-hr ${selectedCategoryIndex == index ? 'selected-cat' : ''}`}></hr>
                }) : null}
            </div>
            <>
                <h3 className='survey-heading-3'>{showSummary ? `Here's a summary of what you chose for ${selectedCategory} (category ${selectedCategoryIndex + 1}/${surveyData?.categories?.length})` : currentQuestion?.heading}</h3>
                <p className='survey-para-2'>{showSummary ? 'Click on the button "Change" if you want to change what you chose' : currentQuestion?.subHeading}</p>
            </>
        </div>
        <>
            {showSummary ? <Summary onSummaryOptionSelected={onSummaryOptionSelected} questions={questions} onNextCategory={onNextCategory} showSurveyResults={showSurveyResults}/> : <div className='survey-ques-div'>
                <div>
                    <div className='survey-questions-options'>
                        {currentQuestion?.options?.length ? currentQuestion?.options.map((ele, index) => {
                            return <SurveyOptions option={ele} isSelected={currentQuestion.selectedOption == index} onOptionSelected={onOptionSelected(index)} optionIndex={index} />
                        }) : null}
                    </div>
                </div>
                <div className='btn-nav-div'>
                    <button disabled={currentQuestionIndex == 0 && selectedCategoryIndex == 0} className='btn-nav' onClick={onPrevClick}>Previous</button>
                    {/* <button disabled={currentQuestionIndex == questions.length - 1 && selectedCategoryIndex == surveyData.categories.length -1} className={`btn-nav`} onClick={onNextClick}>Next</button> */}
                </div>
            </div>
            }
        </>

    </div>

}

export default Module1;