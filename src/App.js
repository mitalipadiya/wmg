import logo from './logo.svg';
import './App.css';
import Header from './components/UI/Header';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import SignIn from './components/login/SignIn';
import Intro from './components/survey/Intro';
import Register from './components/login/Register';
import CreateNewPassword from './components/login/CreateNewPassword';
import ResetPassword from './components/login/ResetPassword';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Module1 from './components/survey/Module1';
import UpdateProfile from './components/login/UpdateProfile';
import SurveyResults from './components/survey/SurveyResults';
import Snackbar from './components/UI/Snackbar';
import Module2 from './components/module2/Module2';
import EconomicParameters from './components/module2/EconomicParameters';
import Baseline from './components/module2/Baseline';
import SolarPV from './components/module2/SolarPV';

function App() {
  const { isLoggedIn } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.startsWith("/create-new")) {
      if (!isLoggedIn) {
        navigate("/");
      }
    }

  }, [isLoggedIn]);
  return (
    <div className="App">
      <Snackbar />
      <Header />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-new/:token" element={<CreateNewPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/module1" element={<Module1 />} />
        <Route path="/module2" element={<Module2 />} >
          <Route exact path="baseline" element={<Baseline/>} />
          <Route path="economic-parameters" element={<EconomicParameters/>} />
          <Route path="solar-pv" element={<SolarPV/>} />
        </Route>
        <Route path="/profile" element={<UpdateProfile />} />
        <Route path="/survey-results" element={<SurveyResults />} />
      </Routes>
    </div>
  );
}

export default App;
