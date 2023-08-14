import Input from '../UI/Input';
import "./SignIn.scss";
import './CompanyInfo.css'
import Select from '../UI/Select';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userService from '../../services/user.service';
import axios from 'axios';
import { updateUser } from '../../actions/auth';

const CompanyInfo = (props) => {
    const totalTurnovers = ["Less than 10 million", "10 million to 50 million", "50 million to 100 million", "100 million to 500 million", "500 million to 2 billion", "2 billion to 10 billion", "Over 10 billion"]
    const natureOfYourCustomers = ["B2B", "B2C", "Governments", "Individual consumers (e.g. the general public)", "Other organisations and businesses", "Other organisations and businesses & Individual consumers (e.g. the general public)", "Other organisations and businesses & Governments", "Individual consumers (e.g. the general public) & Governments", "Other organisations and businesses & Individual consumers (e.g. the general public) & Governments", "Other"]

    const primaryIndustries = ["Accounting / Finance", "Human resources", "Logistics / Distribution", "Marketing / Sales", "Planning", "Production / Manufacturing", "Purchasing / Procurement", "Research & Development", "Supply Chain Management", "Legal", "Other"]

    const { user } = useSelector(state => state.auth);
    const [companyName, setCompanyName] = useState(user?.company || "");
    const [companyCountry, setCompanyCountry] = useState(user?.company_country || "");
    const [companyCity, setCompanyCity] = useState(user?.company_city || "");
    const [primaryIndustry, setPrimaryIndustry] = useState(user?.industry_company_operates || "");
    const [totalTurnover, setTotalTurnover] = useState(user?.company_turnover || "");
    const [natureOfCustomer, setNatureOfCustomer] = useState(user?.customer_nature || "");
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);

    const dispatch = useDispatch();

    useEffect(()=>{
        axios.get("https://countriesnow.space/api/v0.1/countries").then(data =>{
            if(data && data.data && data.data.data) {
                setCountries(prev => {
                    if(companyCountry) {
                        data.data.data.forEach(data => {
                            if(data.country == companyCountry) {
                                setCities(prev => [...data.cities]);
                                return;
                            }
                        })
                    }
                    return [...data.data.data];
                })
            }
        });
    }, []);
    // console.log(data)
    const onCountryChange = (country) => {
        countries.forEach(data => {
            if(data.country == country) {
                setCities(prev => [...data.cities]);
                return;
            }
        })
        setCompanyCountry(prev => country);
        
    }
    const updateProfile = () => {
        let companyProfile = {
            company: companyName,
            company_country: companyCountry,
            company_city: companyCity,
            industry_company_operates: primaryIndustry,
            company_turnover: totalTurnover,
            customer_nature: natureOfCustomer
        }
        userService.updateProfile(user._id).then(data => {
            props.nextClick();
            let userData = localStorage.getItem('user');
            if(userData) {
                let parsedUserData = JSON.parse(userData);
                parsedUserData = {...parsedUserData, ...companyProfile};
                localStorage.setItem('user', JSON.stringify(parsedUserData));
                dispatch(updateUser(JSON.parse(localStorage.getItem('user'))));
            }
        }, 
        (error)=> {
            console.log("error ==>", error);
        });
    }


    return <div className="company-main">

        <div className="signin-container">
            <h3 className="company-info">Company information</h3>

            <div className="company-infoform">
                <div>
                    <label className="company-label">Company name </label>
                    <div className="name-div">
                        <Input placeholder="Company Name" value={companyName}
                            onChange={(event) => setCompanyName(event.target.value)} />
                    </div>
                </div>
                <div className="places-div">
                    <div className="country-div">
                        <label className="company-label">Country</label>
                        <select className="select" onChange={event => onCountryChange(event.target.value)} value={companyCountry}>
                            <option value="" disabled selected>Select</option>
                            {countries.length ? countries.map((data) => {
                                return <option value={data.country}>{data.country}</option>
                            }) : null}
                        </select>
                    </div>
                    <div className="city-div">
                        <label className="company-label">City</label>
                        <select className="select" onChange={event => setCompanyCity(event.target.value)} value={companyCity}>
                            <option value="" disabled selected>Select</option>
                            {cities.length ? cities.map((data) => {
                                return <option value={data}>{data}</option>
                            }) : null}
                        </select>
                    </div>
                </div>
                <div className="select-div">
                    <label className="company-label">Primary industry in which your company operates</label>
                    <Select values={primaryIndustries} value={primaryIndustry} onChange={event => setPrimaryIndustry(event.target.value)} />
                </div>

                <div className="select-div">
                    <label className="company-label">The total turnover of your company/organisation or subsidiary in the last financial year (£)</label>
                    <Select values={totalTurnovers} value={totalTurnover} onChange={event => setTotalTurnover(event.target.value)} />
                </div>
                <div className="select-div">
                    <label className="company-label">Please describe the nature of your 'customers'</label>
                    <Select values={natureOfYourCustomers} value={natureOfCustomer} onChange={event => setNatureOfCustomer(event.target.value)} />
                </div>
            </div>
            <div className='btn-nav-div comp-btn-div'>
                <button className='btn-nav comp-btn' onClick={props.prevClick}>Previous</button>
                <button className='btn-nav comp-btn' onClick={updateProfile}>Next</button>
            </div>
        </div>

    </div>
}
export default CompanyInfo;