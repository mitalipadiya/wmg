import { useDispatch, useSelector } from 'react-redux';
import './SignIn.scss';
import SurveyValueCheckBoxes from './SurveyValueCheckBoxes';
import './Values.css';
import { useState } from 'react';
import Input from '../UI/Input';
import userService from '../services/user.service';
import { updateUser } from '../actions/auth';

const Values = (props) => {
    const headings = ["Extremely important", "Highly important", "Quite important", "Moderately important",
        "Relatively important", "Slightly important", "Not so important"];
    const { user } = useSelector(state => state.auth);
    const [drivers, setDrivers] = useState(user?.business_value_drivers && user?.business_value_drivers.length ? user?.business_value_drivers :  [
        { name: "Operational excellence", value: -1 },
        { name: "Product leadership", value: -1 },
        { name: "Customer intimacy", value: -1 },
        { name: "Environment saving", value: -1 }
    ]);
    const [accreditations, setAccreditations] = useState(user?.industry_recognised_accreditations && user?.industry_recognised_accreditations.length ? user?.industry_recognised_accreditations : [
        { "name": "ISO 90001 (Quality Management System)", "selected": false },
        { "name": "Plan Vivo - Carbon offset project verification", "selected": false },
        { "name": "ISO 14001 (Environmental Management System)", "selected": false },
        { "name": "OBP - Ocean Bound Plastic", "selected": false },
        { "name": "ISO 50001 (Energy Management)", "selected": false },
        { "name": "ISO 26000 (Socially Responsibility standard)", "selected": false },
        { "name": "UER - Upstream Emission Reduction", "selected": false },
        { "name": "PEF - Product Environmental Footprint", "selected": false },
        { "name": "Ford Q1", "selected": false },
        { "name": "MRV Program", "selected": false },
        { "name": "GRI - Global Reporting Initiative", "selected": false },
        { "name": "CEF - Corporate Environmental Footprint", "selected": false },
        { "name": "None of these", "selected": false },
        { "name": "Other", "selected": false },
    ]);
    const [otherAccreditations, setOtherAccreditations] = useState(user?.other_recognised_accreditations || "");

    const dispatch = useDispatch();

    const updateProfile = () => {
        let valuesData = {
            business_value_drivers: drivers,
            industry_recognised_accreditations: accreditations,
            other_recognised_accreditations: otherAccreditations,
        }
        userService.updateProfile(user._id, valuesData).then(data => {
            props.completeClick();
            let userData = localStorage.getItem('user');
            if (userData) {
                let parsedUserData = JSON.parse(userData);
                parsedUserData = { ...parsedUserData, ...valuesData };
                localStorage.setItem('user', JSON.stringify(parsedUserData));
                dispatch(updateUser(JSON.parse(localStorage.getItem('user'))));
            }
        },
            (error) => {
                console.log("error ==>", error);
            });
    }
    const onRadioSelected = (index, i) => event => {
        setDrivers(prev => {
            let driversData = prev;
            driversData[index].value = i;
            return [...driversData];
        })
    }
    const accreditationsChange = (index, value) => {
        setAccreditations(prev => {
            let data = prev;
            data[index].selected = value;
            return [...data];
        })

    }
    return <div className="company-main">

        <div className="signin-container value-container">
            <h3 className="company-info">Company information</h3>

            <div className="company-infoform">
                <p>Please indicate the importance of the following business value drivers to your business (Please ensure the importance level is unique to each criteria)</p>
            </div>
            <div className='value-radio-survey'>
                <p></p>
                {headings.length && headings.map(data => {
                    return <p>{data}</p>
                })}
            </div>
            <div className='radio-left-tags'>
                {drivers.length && drivers.map((data, index) => {
                    return <><p className='shadow-left-tag'>{data.name}</p>
                        {
                            headings.length && headings.map((ele, i) => {
                                return <input className='radio-btn' name={data.name} checked={i == data.value} onChange={onRadioSelected(index, i)} type="radio" />
                            })
                        }
                    </>
                })}

            </div>
            <SurveyValueCheckBoxes accreditations={accreditations} accreditationsChange={accreditationsChange} />
            <p className='check-box-para-2'>Please enter the other recognised accreditations that your organisation has separated by commas</p>
            <Input value={otherAccreditations} onChange={(event) => setOtherAccreditations(event.target.value)} />

            <div className='btn-nav-div comp-btn-div value-btn-div'>
                <button className='btn-nav comp-btn' onClick={props.prevClick}>Previous</button>
                <button className='btn-nav comp-btn' onClick={updateProfile}>Complete account</button>
            </div>
        </div>
    </div>
}
export default Values;