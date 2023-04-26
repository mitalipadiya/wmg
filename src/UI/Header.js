import { Link } from 'react-router-dom';
import './Header.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Header = () => {
    const { isLoggedIn } = useSelector(state => state.auth);
    const { user } = useSelector(state => state.auth);
    const [selectedHeader, setSelectedHeader] = useState("module1");
    return (
        <header>
            {isLoggedIn ? <div className='header-div'>
                <div className='header-logo'>
                    <img className="header-img" />
                    <img className="catapult-img" />
                </div>

                <nav>
                    <Link className={selectedHeader == "module1" ? 'active' : ''} onClick={() => setSelectedHeader("module1")} to="/module1">Module 1</Link>
                    <Link className={selectedHeader == "module2" ? 'active' : ''} onClick={() => setSelectedHeader("module2")} to="/module2">Module 2</Link>
                    <Link className={selectedHeader == "module3" ? 'active' : ''} onClick={() => setSelectedHeader("module3")} to="/module3">Module 3</Link>
                </nav>
                <div className='user-div'>
                    <div className='user-circle'>
                        <img className="user-img" />
                    </div>
                    <span className='user-name'>{user && user.first_name && user.last_name ? user.first_name + " " + user.last_name : ""}</span>
                    <img className="user-arrow" />
                </div>
            </div> : <img className="header-img" />}

        </header>
    )
}

export default Header;