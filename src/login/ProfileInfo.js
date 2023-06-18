import Input from '../UI/Input';
import "./SignIn.scss";
import './ProfileInfo.css'
import Button from '../UI/Button';
import Select from '../UI/Select';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userService from '../services/user.service';
import { updateUser } from '../actions/auth';
const ProfileInfo = (props) => {
    const managementLevels = ["Executive", "Senior Management", "Middle Management", "Junior Management", "Other"];
    const currentFunctions = ["Accounting / Finance", "Human resources", "Logistics / Distribution", "Marketing / Sales", "Planning", "Production / Manufacturing", "Purchasing / Procurement", "Research & Development", "Supply Chain Management", "Legal", "Other"];

    const { user } = useSelector(state => state.auth);

    const [firstName, setFirstName] = useState(user?.first_name || "" );
    const [lastName, setLastName] = useState(user?.last_name || "");
    const [designation, setDesignation] = useState(user?.designation || "");
    const [managementLevel, setManagementLevel] = useState(user?.management_level_Current_position || "");
    const [currentFunction, setCurrentFunction] = useState(user?.current_function || "");

    const dispatch = useDispatch();

    const updateProfile = () => {
        let profileData = {
            first_name: firstName,
            last_name: lastName,
            designation: designation,
            management_level_Current_position: managementLevel,
            current_function: currentFunction
        }
        userService.updateProfile(user._id, profileData).then(data => {
            props.nextClick();
            let userData = localStorage.getItem('user');
            if(userData) {
                let parsedUserData = JSON.parse(userData);
                parsedUserData = {...parsedUserData, ...profileData};
                localStorage.setItem('user', JSON.stringify(parsedUserData));
                dispatch(updateUser(JSON.parse(localStorage.getItem('user'))));
            }
        }, 
        (error)=> {
            console.log("error ==>", error);
        });
    }

    return <div className="profile-main">

        <div className="signin-container">
            <h3 className="personal-info">Personal information</h3>

            <div className="profile-infoform">
                <div>
                    <label className="profile-label" htmlFor="name">Your name </label>
                    <div className="name-div">
                        <Input placeholder="First name" value={firstName} onChange={(event)=>setFirstName(event.target.value)}/>
                        <Input placeholder="Last name" value={lastName}  onChange={(event)=>setLastName(event.target.value)} />
                    </div>
                </div>
                <div className="designation-div">
                    <label className="profile-label" htmlFor="designation">Designation</label>
                    <Input placeholder="Your Designation" value={designation} onChange={(event)=>setDesignation(event.target.value)} />
                </div>
                <div className="select-div">
                    <label className="profile-label" htmlFor="select">Please indicate the management level of your current position</label>
                    <Select values={managementLevels} value={managementLevel} onChange={event => setManagementLevel(event.target.value)}/>
                </div>

                <div className="select-div select-func">
                    <label className="profile-label" htmlFor="select">Please indicate your current function</label>
                    <Select values={currentFunctions} value={currentFunction} onChange={event => setCurrentFunction(event.target.value)}/>
                </div>
            </div>
            <Button value="Next" onClick={updateProfile}/>
        </div>

    </div>
}
export default ProfileInfo;