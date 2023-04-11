import React, { useEffect, useState } from 'react'
import './Module1.css';
import SurveyOptions from './SurveyOptions';

const Module1 = () => {
    const [surveyData, setSurveyData] = useState();
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState();

    useEffect(() => {
        let data = {
            "categories": [
                {
                    "category": "Building and facilities",
                    "questions": [
                        {
                            "heading": "Energy systems optimisation",
                            "subHeading": "Choose what applies best for your company",
                            "options": [
                                "All energy systems for heating, cooling, lighting and ventilating are controlled manually",
                                "Energy systems are automatically controlled through basic timers to reduce consumption",
                                "Energy systems are automatically controlled through advanced sensors to limit consumption to be when needed only",
                                "Energy systems are controlled and monitored through advanced technologies for real time energy management and analysis",
                                "Don't know",
                                "Not applicable"
                            ]
                        },
                        {
                            "heading": "Energy systems optimisation",
                            "subHeading": "Choose what applies best for your company",
                            "options": [
                                "All energy systems for heating, cooling, lighting and ventilating are controlled manually",
                                "Energy systems are automatically controlled through basic timers to reduce consumption",
                                "Energy systems are automatically controlled through advanced sensors to limit consumption to be when needed only",
                                "Energy systems are controlled and monitored through advanced technologies for real time energy management and analysis",
                                "Don't know",
                                "Not applicable"
                            ]
                        }

                    ]
                },
                {
                    "category": "Building and facilities",
                    "questions": [
                        {
                            "heading": "Energy systems optimisation",
                            "subHeading": "Choose what applies best for your company",
                            "options": [
                                "All energy systems for heating, cooling, lighting and ventilating are controlled manually",
                                "Energy systems are automatically controlled through basic timers to reduce consumption",
                                "Energy systems are automatically controlled through advanced sensors to limit consumption to be when needed only",
                                "Energy systems are controlled and monitored through advanced technologies for real time energy management and analysis",
                                "Don't know",
                                "Not applicable"
                            ]
                        },
                        {
                            "heading": "Energy systems optimisation",
                            "subHeading": "Choose what applies best for your company",
                            "options": [
                                "All energy systems for heating, cooling, lighting and ventilating are controlled manually",
                                "Energy systems are automatically controlled through basic timers to reduce consumption",
                                "Energy systems are automatically controlled through advanced sensors to limit consumption to be when needed only",
                                "Energy systems are controlled and monitored through advanced technologies for real time energy management and analysis",
                                "Don't know",
                                "Not applicable"
                            ]
                        }

                    ]
                }
            ]
        }
        setSurveyData(data);
        setSelectedCategoryIndex(0);
        setSelectedCategory(data.categories[0].category);
        setQuestions(prev => {
            let ques = data?.categories[selectedCategoryIndex]?.questions;
            setCurrentQuestion(ques[0]);
            return prev;
        });
        setCurrentQuestionIndex(0);
    }, [])

    const onNextClick = () => {
        if (currentQuestionIndex == questions.length - 1) {
            setSelectedCategoryIndex(prev => {
                setSelectedCategory(surveyData?.categories[prev + 1]?.category);
                setQuestions(prev => {
                    let ques = surveyData?.categories[prev + 1]?.questions;
                    setCurrentQuestionIndex(0);
                    setCurrentQuestion(ques[0]);
                    return ques;
                });
                return prev + 1;
            })
        }
    }

    return <div className='survey-parent-div'>
        <h6 className='survey-heading-1'>CATEGORY {selectedCategoryIndex + 1}/{surveyData?.categories?.length}</h6>
        <div className='survey-div-Class-1'>
            <h2 className='survey-heading-2'>{selectedCategory}</h2>
            <p className='survey-para-1'>{currentQuestionIndex + 1}/{questions?.length}</p>
        </div>
        <div className='survey-hr-div'>
            {surveyData?.categories?.length ? surveyData?.categories.map((ele, index) => {
                return <hr className='survey-hr'></hr>
            }) : null}
        </div>
        <h3 className='survey-heading-3'>{currentQuestion?.heading}</h3>
        <p className='survey-para-2'>{currentQuestion?.subHeading}</p>
        <div className='survey-questions-options'>
            {currentQuestion?.options?.length ? currentQuestion?.options.map((ele, index) => {
                return <SurveyOptions option={ele} />
            }) : null}
        </div>
    </div>

}

export default Module1;