import Button from "../UI/Button";
import Input from "../UI/Input";
import "./SignIn.scss";
import "./ResetPassword.scss";

const CreateNewPassword = () => {
    return (
        <div className="reset-main">
            <div className="signin-container">
                <h3 className="top-heading">Create new password</h3>
                <p className="top-paragraph">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore inventore expedita ab sit.</p>
                <form className="signin-form reset-password-form">
                    <label className="signin-label" htmlFor="email">Enter password
                        <Input placeholder="" />
                    </label>
                    <label className="signin-label" htmlFor="lname">Confirm password
                        <Input placeholder="" />
                    </label>
                </form>
                <Button value="Reset password" />
            </div>
        </div>


    )

}
export default CreateNewPassword;