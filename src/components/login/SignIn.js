import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Input from "../UI/Input";
import "./SignIn.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { isLoggedIn } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    useEffect(()=> {
        if(isLoggedIn) {
            navigate("/intro");
        }
    }, [isLoggedIn])

    const onSignIn = () => {

        dispatch(login(email, password))
            .then(() => {
                navigate("/intro");
            })
            .catch(() => {
            });
    }
    return (
        <div className="signin-main">
            <div className="signin-container">
                <h3 className="top-heading">Welcome back</h3>
                <p className="top-paragraph">This is an integrated Decision Support Platform to aid your Net-Zero Decarbonization Strategy</p>
                <form className="signin-form">
                    <label className="signin-label"><span>Email<span className="compulsory">*</span></span>
                        <Input type="email" placeholder="example@email.com" onChange={event => setEmail(event.target.value)} />
                    </label>
                    <label className="signin-label"><span>Password<span className="compulsory">*</span></span>
                        <Input type="password" placeholder="" onChange={event => setPassword(event.target.value)} />
                    </label>
                </form>
                <p className="forgot-password signin-p">Forgot your password?<Link to={'/reset'}><span>Reset</span></Link></p>
                <Button value="Sign in" onClick={onSignIn} />
            </div>
            <p className="signin-footer signin-p">
                New to WMG?<Link to={'/register'}><span>Register here</span></Link>
            </p>
        </div>


    )

}
export default SignIn;