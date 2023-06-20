import Button from "../UI/Button";
import Input from "../UI/Input";
import "./SignIn.scss";
import "./ResetPassword.scss";
import { Link, useNavigate } from "react-router-dom";
import userService from "../services/user.service";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMessage } from '../actions/message';

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const onReset = () => {
        userService.forgotPassword({ "email": email }).then(data => {
            dispatch(setMessage("Please reset your password on the link shared to your registered mail id"));
        },
            (error) => {
                dispatch(setMessage("Invalid Email id. User Not found"));
            });
    }
    return (
        <div className="reset-main">
            <div className="signin-container">
                <h3 className="top-heading">Reset password</h3>
                <p className="top-paragraph">Enter your email address and we'll send you an email with password reset instructions</p>
                <form className="signin-form reset-password-form">
                    <label className="signin-label" htmlFor="email">Email
                        <Input placeholder="example@email.com" onChange={(event) => setEmail(event.target.value)} />
                    </label>
                </form>
                <Button value="Send password reset instructions" onClick={onReset}/>
            </div>
            <p className="signin-p">
                <Link to={'/'}><span>Back to sign in</span></Link>
            </p>
        </div>


    )

}
export default ResetPassword;