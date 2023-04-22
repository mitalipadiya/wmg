import Input from '../UI/Input';
import "./SignIn.scss";
import './ProfileInfo.css'
import Button from '../UI/Button';
import Select from '../UI/Select';
const ProfileInfo = (props) => {
    return <div className="profile-main">
        
            <div className="signin-container">
            <h3 className="personal-info">Personal information</h3>

            <div className="profile-infoform">
                <div>
                    <label className="profile-label" htmlFor="name">Your name </label>
                    <div className="name-div">
                        <Input placeholder="First name" />
                        <Input placeholder="Last name" />
                    </div>
                </div>
                <div className="designation-div">
                    <label className="profile-label" htmlFor="designation">Designation</label>
                    <Input />
                </div>
                <div className="select-div">
                    <label className="profile-label" htmlFor="select">Please indicate the management level of your current position</label>
                    <Select />
                </div>

                <div className="select-div select-func">
                    <label className="profile-label" htmlFor="select">Please indicate your current function</label>
                    <Select/>
                </div>
            </div>
            <Button value="Next" onClick={props.nextClick}/>
        </div>

    </div>
}
export default ProfileInfo;