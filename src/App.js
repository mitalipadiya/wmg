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
import Wind from './components/module2/Wind';
import Technologies from './components/module2/Technologies';
import SolarPVBESS from './components/module2/SolarPVBESS';
import Biomass from './components/module2/Biomass';
import PassiveInfraredSensor from './components/module2/PassiveInfraredSensor';
import SmartMetersElectricity from './components/module2/SmartMetersElectricity';
import SmartMetersGas from './components/module2/SmartMetersGas';
import VoltageOptimisation from './components/module2/VoltageOptimisation';
import EnergyManagementSystem from './components/module2/EnergyManagementSystem';
import CHP from './components/module2/Chp';
import LED from './components/module2/Led';
import SolarThermal from './components/module2/SolarThermal';
import IndustrialHeatPump from './components/module2/IndustrialHeatPump';
import EmissionSavings from './components/module2/EmissionSavings';
import Macc from './components/module2/Macc';
import ParetoOptimisation from './components/module2/ParetoOptimisation';

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
          <Route path='technologies' element={<Technologies/>}/>
          <Route path="solar-pv" element={<SolarPV/>} />
          <Route path="wind" element={<Wind/>} />
          <Route path="solar-pv-bess" element={<SolarPVBESS/>} />
          <Route path="biomass" element={<Biomass/>} />
          <Route path="chp" element={<CHP/>} />
          <Route path="led" element={<LED/>} />
          <Route path="passive-infrared-sensor" element={<PassiveInfraredSensor/>} />
          <Route path="smart-meters-electricity" element={<SmartMetersElectricity/>} />
          <Route path="smart-meters-gas" element={<SmartMetersGas/>} />
          <Route path="voltage-optimisation" element={<VoltageOptimisation/>} />
          <Route path="energy-management-system" element={<EnergyManagementSystem/>} />
          <Route path="solar-thermal" element={<SolarThermal/>}/>
          <Route path="industrial-heat-pump" element={<IndustrialHeatPump/>}/>
          <Route path="emission-savings" element={<EmissionSavings/>}/>
          <Route path="macc" element={<Macc/>}/>
          <Route path='pareto-optimisation' element={<ParetoOptimisation/>}/>
        </Route>
        <Route path="/profile" element={<UpdateProfile />} />
        <Route path="/survey-results" element={<SurveyResults />} />
      </Routes>
    </div>
  );
}

export default App;
