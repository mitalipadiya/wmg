import logo from './logo.svg';
import './App.css';
import Header from './UI/Header';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import SignIn from './login/SignIn';
import Intro from './survey/Intro';
import Register from './login/Register';
import CreateNewPassword from './login/CreateNewPassword';
import ResetPassword from './login/ResetPassword';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Module1 from './survey/Module1';

function App() {
  const { isLoggedIn } = useSelector(state => state.auth);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!isLoggedIn) {
      navigate("/");
    }

  }, [isLoggedIn]);
  return (
    <div className="App">
      <Header />
      {/* <Outlet/> */}

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-new" element={<CreateNewPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/module1" element={<Module1 />} />
      </Routes>
    </div>
  );
}

export default App;
