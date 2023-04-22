import Input from '../UI/Input';
import "./SignIn.scss";
import './CompanyInfo.css'
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import Select from '../UI/Select';
const CompanyInfo = (props) => {
    return <div className="company-main">

        <div className="signin-container">
            <h3 className="company-info">Company information</h3>

            <div className="company-infoform">
                <div>
                    <label className="company-label" htmlFor="name">Company name </label>
                    <div className="name-div">
                        <Input />
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
                    <Select />
                </div>

                <div className="select-div">
                    <label className="company-label" htmlFor="select">The total turnover of your company/organisation or subsidiary in the last financial year (£)</label>
                    <Select />
                </div>
                <div className="select-div">
                    <label className="company-label" htmlFor="select">Please describe the nature of your 'customers'</label>
                    <Select />
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