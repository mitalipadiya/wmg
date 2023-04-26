import Input from '../UI/Input';
import "./SignIn.scss";
import './ProfileInfo.css'
import Button from '../UI/Button';
import Select from '../UI/Select';
import { useState } from 'react';
const ProfileInfo = (props) => {
    const managementLevels = ["Executive", "Senior Management", "Middle Management", "Junior Management", "Other"];
    const currentFunction = ["Accounting / Finance", "Human resources", "Logistics / Distribution", "Marketing / Sales", "Planning", "Production / Manufacturing", "Purchasing / Procurement", "Research & Development", "Supply Chain Management", "Legal", "Other"];

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [designation, setDesignation] = useState("");

    return <div className="profile-main">

        <div className="signin-container">
            <h3 className="personal-info">Personal information</h3>

            <div className="profile-infoform">
                <div>
                    <label className="profile-label" htmlFor="name">Your name </label>
                    <div className="name-div">
                        <Input placeholder="First name" onChange={(event)=>setFirstName(event.target.value)}/>
                        <Input placeholder="Last name" onChange={(event)=>setLastName(event.target.value)} />
                    </div>
                </div>
                <div className="designation-div">
                    <label className="profile-label" htmlFor="designation">Designation</label>
                    <Input placeholder="Your Designation" onChange={(event)=>setDesignation(event.target.value)} />
                </div>
                <div className="select-div">
                    <label className="profile-label" htmlFor="select">Please indicate the management level of your current position</label>
                    <Select values={managementLevels} />
                </div>

                <div className="select-div select-func">
                    <label className="profile-label" htmlFor="select">Please indicate your current function</label>
                    <Select values={currentFunction} />
                </div>
            </div>
            <Button value="Next" onClick={props.nextClick} />
        </div>

    </div>
}
export default ProfileInfo;