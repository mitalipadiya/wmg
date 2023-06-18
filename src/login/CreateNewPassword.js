import Button from "../UI/Button";
import Input from "../UI/Input";
import "./SignIn.scss";
import "./ResetPassword.scss";
import userService from "../services/user.service";
import { useState } from "react";
import { useParams } from 'react-router-dom';

const CreateNewPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { token } = useParams();
    
    const resetPassword = () => {
        userService.resetPassword({ "password": password }, token).then(data => {
        },
            (error) => {
                console.log("error ==>", error);
            });
    }
    return (
        <div className="reset-main">
            <div className="signin-container">
                <h3 className="top-heading">Create new password</h3>
                <p className="top-paragraph">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore inventore expedita ab sit.</p>
                <form className="signin-form reset-password-form">
                    <label className="signin-label">Enter password
                        <Input placeholder="" onChange={(event) => setPassword(event.target.value)} />
                    </label>
                    <label className="signin-label">Confirm password
                        <Input placeholder="" onChange={(event) => setConfirmPassword(event.target.value)} />
                    </label>
                </form>
                <Button value="Reset password" onClick={resetPassword}/>
            </div>
        </div>


    )

}
export default CreateNewPassword;