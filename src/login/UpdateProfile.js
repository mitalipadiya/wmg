import { useState } from 'react';
import './UpdateProfile.scss';
import ProfileInfo from './ProfileInfo';
import CompanyInfo from './CompanyInfo';
import { useNavigate } from 'react-router-dom';
import Values from './Values';
const UpdateProfile = () => {
    const headings = ["PERSONAL INFORMATION", "COMPANY INFORMATION", "VALUES & ACCREDITATIONS"];
    const [currentTab, setCurrentTab] = useState(0);
    const navigate = useNavigate();

    const completeClick = () => {
        navigate("/intro");
    }
    return <div>
        <h2 className="profile-h2">Complete your account</h2>
        <div className="profile-headings">
            {
                headings.map((ele, index) => {
                    return <div className={`profile-nav ${index == currentTab ? 'current-tab' : index < currentTab ? 'prev-tab' : 'next-tab'}`} >
                        <div className='profile-nav-heading'>
                            <span className='profile-nav-span'>{index + 1}</span>
                            <p className='profile-nav-p'>{ele}</p>
                        </div>
                        <hr className='profile-nav-hr' />
                    </div>
                })
            }
        </div>
        <div className='profile-forms'>
            {(() => {
                switch (currentTab) {
                    case 0:
                        return <ProfileInfo nextClick={()=>{setCurrentTab(1)}}/>;
                    case 1:
                        return <CompanyInfo nextClick={()=>{setCurrentTab(2)}} prevClick={()=>{setCurrentTab(0)}}/>;
                    case 2:
                        return <Values prevClick={()=>{setCurrentTab(1)}} completeClick={completeClick}/>;
                    default:
                        return null;
                }
            })()}
        </div>
    </div>
}
export default UpdateProfile;