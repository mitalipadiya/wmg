import Input from '../UI/Input';
import "./SignIn.scss";
import './CompanyInfo.css'
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import Select from '../UI/Select';
import { useState } from 'react';

const CompanyInfo = (props) => {
    const totalTurnover = ["Less than 10 million","10 million to 50 million","50 million to 100 million","100 million to 500 million","500 million to 2 billion","2 billion to 10 billion","Over 10 billion"]
    const natureOfYourCustomers = ["B2B","B2C","Governments","Individual consumers (e.g. the general public)","Other organisations and businesses","Other organisations and businesses & Individual consumers (e.g. the general public)","Other organisations and businesses & Governments","Individual consumers (e.g. the general public) & Governments","Other organisations and businesses & Individual consumers (e.g. the general public) & Governments","Other"]

    const PrimaryIndustry = ["Accounting / Finance","Human resources","Logistics / Distribution","Marketing / Sales","Planning","Production / Manufacturing","Purchasing / Procurement","Research & Development","Supply Chain Management","Legal","Other"]

    const [companyName, setCompanyName] = useState("")

    return <div className="company-main">

        <div className="signin-container">
            <h3 className="company-info">Company information</h3>

            <div className="company-infoform">
                <div>
                    <label className="company-label" htmlFor="name">Company name </label>
                    <div className="name-div">
                        <Input placeholder="Company Name" 
                        onChange={(event)=>setCompanyName(event.target.value)} />
                    </div>
                </div>
                <div className="places-div">
                    <div className="country-div">
                        <label className="company-label" htmlFor="country">Country</label>
                        <Select />
                    </div>
                    <div className="city-div">
                        <label className="company-label" htmlFor="country">City</label>
                        <Select />
                    </div>
                </div>
                <div className="select-div">
                    <label className="company-label" htmlFor="select">Primary industry in which your company operates</label>
                    <Select values = {PrimaryIndustry}/>
                </div>

                <div className="select-div">
                    <label className="company-label" htmlFor="select">The total turnover of your company/organisation or subsidiary in the last financial year (£)</label>
                    <Select values = {totalTurnover}/>
                </div>
                <div className="select-div">
                    <label className="company-label" htmlFor="select">Please describe the nature of your 'customers'</label>
                    <Select values = {natureOfYourCustomers}/>
                </div>
            </div>
                <div className='btn-nav-div comp-btn-div'>
                    <button className='btn-nav comp-btn' onClick={props.prevClick}>Previous</button>
                    <button className='btn-nav comp-btn' onClick={props.nextClick}>Next</button>
                </div>
        </div>

    </div>
}
export default CompanyInfo;