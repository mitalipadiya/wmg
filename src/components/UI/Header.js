import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { logout } from "../../actions/auth";
import Button from './Button';

const Header = () => {
    const { isLoggedIn } = useSelector(state => state.auth);
    const { user } = useSelector(state => state.auth);
    const [selectedHeader, setSelectedHeader] = useState("home");
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const onProfileClick = () => {
        navigate("/profile");
    }
    const onRegisterClick = () => {
        navigate("/register");
    }
    const onLoginClick = () => {
        navigate("/login");
    }

    useEffect(() => {
        if (location.pathname.startsWith("/module2")) {
            setSelectedHeader("module2")
        } else if (location.pathname.startsWith("/module3")) {
            setSelectedHeader("module3")
        }
    }, [location.pathname]);

    const onLogout = () => {
        localStorage.clear();
        setIsOpen(false);
        dispatch(logout());
    }
    return (
        <header>
            {isLoggedIn ? <div className='header-div'>
                <div className='header-logo'>
                    <a href="https://warwick.ac.uk/fac/sci/wmg/" target='_blank'><img className="header-img" /></a>
                    <a href="https://hvm.catapult.org.uk/" target='_blank'><img className="catapult-img" /></a>
                </div>

                <nav>
                    <Link className={selectedHeader == "home" ? 'active' : ''} onClick={() => setSelectedHeader("home")} to="/">Home</Link>
                    <Link className={selectedHeader == "module1" ? 'active' : ''} onClick={() => setSelectedHeader("module1")} to="/intro">Module 1</Link>
                    <Link className={selectedHeader == "module2" ? 'active' : ''} onClick={() => setSelectedHeader("module2")} to="/module2-intro">Module 2</Link>
                    <Link className={selectedHeader == "module3" ? 'active' : ''} onClick={() => setSelectedHeader("module3")} to="/module3-intro">Module 3</Link>
                </nav>
                <div className='user-div'>
                    <div className='user-circle' onClick={onProfileClick}>
                        <img className="user-img" />
                    </div>
                    <span className='user-name'>{user && user.first_name && user.last_name ? user.first_name + " " + user.last_name : ""}</span>
                    <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                        <li className={`nav-item dropdown ${isOpen ? 'show' : ''}`}>
                            <a onClick={() => setIsOpen(prev => !prev)}>
                                <img className="user-arrow" href="#" id="logout" data-toggle="dropdown" aria-haspopup="true" aria-expanded={isOpen ? true : false} />
                            </a>
                            <div className={`dropdown-menu dropdown-menu-right ${isOpen ? 'show' : ''}`} aria-labelledby="logout" onClick={onLogout}>
                                Logout
                            </div>
                        </li>
                    </ul>
                </div>
            </div> : <div className='header-div'>
                <div className={`header-logo ${!isLoggedIn ? 'logo-center' : ''}`}>
                    <a href="https://warwick.ac.uk/fac/sci/wmg/" target='_blank'><img className="header-img" /></a>
                    <a href="https://hvm.catapult.org.uk/" target='_blank'><img className="catapult-img" /></a>
                </div>
                {!isLoggedIn ? <div className='header-btn'>
                    <Button onClick={onRegisterClick} className="header-custom-btn" value="Register" />
                    <Button onClick={onLoginClick} className="header-custom-btn" value="Login" />
                </div> : null}
            </div>}

        </header>
    )
}

export default Header;