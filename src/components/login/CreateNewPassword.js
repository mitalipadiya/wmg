import Button from "../UI/Button";
import Input from "../UI/Input";
import "./SignIn.scss";
import "./ResetPassword.scss";
import userService from "../../services/user.service";
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setMessage } from "../../actions/message";

const CreateNewPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { token } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const resetPassword = () => {
        if(password == confirmPassword) {
            userService.resetPassword({ "password": password }, token).then(data => {
                dispatch(setMessage(data.message));
                navigate("/");
            },
                (error) => {
                    console.log("error ==>", error);
                });
        }else {
            dispatch(setMessage("New Password and confirm password did not match")); 
        }

    }
    return (
        <div className="reset-main">
            <div className="signin-container">
                <h3 className="top-heading">Create new password</h3>
                <p className="top-paragraph">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore inventore expedita ab sit.</p>
                <form className="signin-form reset-password-form">
                    <label className="signin-label"><span>Enter password<span className="compulsory">*</span></span>
                        <Input placeholder="" type="password" onChange={(event) => setPassword(event.target.value)} />
                    </label>
                    <label className="signin-label"><span>Confirm password<span className="compulsory">*</span></span>
                        <Input placeholder="" type="password" onChange={(event) => setConfirmPassword(event.target.value)} />
                    </label>
                </form>
                <Button value="Reset password" onClick={resetPassword}/>
            </div>
        </div>


    )

}
export default CreateNewPassword;