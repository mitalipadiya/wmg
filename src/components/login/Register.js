import Button from "../UI/Button";
import Input from "../UI/Input";
import "./SignIn.scss";
import './Register.scss';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../../actions/auth";
import { useDispatch } from "react-redux";

const Register = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [designation, setDesignation] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onRegister = () => {
        dispatch(register(firstName, lastName, email, company, designation, password))
            .then(() => {
                navigate("/");
            })
            .catch(() => {
            });
    }

    return (
        <div className="signin-main">
            <div className="signin-container">
                <h3 className="top-heading">Get started</h3>
                <p className="top-paragraph">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore inventore expedita ab sit.</p>
                <div className="signin-form register-form">
                    <div>
                        <label className="signin-label" htmlFor="name">Your name </label>
                        <div className="name-div">
                            <Input placeholder="First name" onChange={(event) => setFirstName(event.target.value)}/>
                            <Input placeholder="Last name" onChange={(event) => setLastName(event.target.value)}/>
                        </div>
                    </div>
                    <div className="email-div">
                        <label className="signin-label" htmlFor="email">Your email</label>
                        <Input placeholder="example@email.com" type="email" onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div className="company-desig-div">
                        <div className="company-div">
                            <label className="signin-label" htmlFor="company">Your company</label>
                            <Input placeholder="" onChange={(event) => setCompany(event.target.value)}/>
                        </div>
                        <div className="designation-div">
                            <label className="signin-label" htmlFor="designation">Designation</label>
                            <Input placeholder="" onChange={(event) => setDesignation(event.target.value)}/>
                        </div>
                    </div>
                    <div className="password-div">
                        <label className="signin-label" htmlFor="password">Create a password</label>
                        <Input placeholder="Password" type="password" onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                </div>
                <Button value="Register" onClick={onRegister} />
            </div>
            <p className="signin-footer signin-p">
                Already have an account?<Link to={'/'}><span>Sign in</span></Link>
            </p>
        </div>

    )
}
export default Register;