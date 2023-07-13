import { useLocation, useNavigate } from "react-router-dom";
import "./Navigation.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Navigation = () => {
    const [currentSelection, setCurrentSelection] = useState("baseline");
    const { isComplete: isBaselineComplete } = useSelector(state => state?.module2?.baseline);
    const [isTechnologiesComplete, setIsTechnologiesComplete] = useState(false);
    const { isComplete: isEconomicParametersComplete } = useSelector(state => state?.module2?.economicParameters);
    const { isComplete: isSolarPVComplete } = useSelector(state => state?.module2?.solarPV);
    const [isWindComplete, setIsWindComplete] = useState(false);
    const [isSolarPvBESSComplete, setIsSolarPvBESSComplete] = useState(false);
    const [isBiomassComplete, setIsBiomassComplete] = useState(false);
    const [isCHPComplete, setIsCHPComplete] = useState(false);
    const [isLEDComplete, setIsLEDComplete] = useState(false);
    const [isPassiveInfraredSensorComplete, setIsPassiveInfraredSensorComplete] = useState(false);
    const [isSmartMetersElectricityComplete, setIsSmartMetersElectricityComplete] = useState(false);
    const [isSmartMetersGasComplete, setIsSmartMetersGasComplete] = useState(false);
    const [isVoltageOptimisationComplete, setIsVoltageOptimisationComplete] = useState(false);
    const [isEnergyManagementSystemComplete, setIsEnergyManagementSystemComplete] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log('route has been changed ==> ', location.pathname);
        if(location.pathname.startsWith("/module2/")) {
            let routes = location.pathname.split("/");
            setCurrentSelection(routes[2]);
        }
    },[location.pathname]);

    const onItemSelect = param => event => {
        setCurrentSelection(param);
        navigate(`./${param}`);
    }
    return <div className="c-nav">
        <div className="inner-box">
            <div>
                <div className="c-nav-item current-item"><span>GENERAL</span><span></span></div>
                <div className={`c-nav-item c-nav-subitem ${currentSelection == "baseline" ? 'current-subitem' : ''} ${isBaselineComplete ? 'is-completed' : ''}`}
                    onClick={onItemSelect("baseline")}>Baseline</div>
                <div className={`c-nav-item c-nav-subitem ${currentSelection == "technologies" ? 'current-subitem' : ''} ${isTechnologiesComplete ? 'is-completed' : ''}`}
                    onClick={onItemSelect("technologies")}>Technologies</div>
                <div className={`c-nav-item c-nav-subitem ${currentSelection == "economic-parameters" ? 'current-subitem' : ''} ${isEconomicParametersComplete ? 'is-completed' : ''}`}
                    onClick={onItemSelect("economic-parameters")}>Economic parameters</div>
            </div>
            <hr />
            <div>
                <div className="c-nav-item">SYSTEM SIZE & CAPITAL COST</div>
                <div className={`c-nav-item c-nav-subitem ${currentSelection == "solar-pv" ? 'current-subitem' : ''} ${isSolarPVComplete ? 'is-completed' : ''}`}
                    onClick={onItemSelect("solar-pv")}>Solar PV</div>
                <div className={`c-nav-item c-nav-subitem ${currentSelection == "wind" ? 'current-subitem' : ''} ${isWindComplete ? 'is-completed' : ''}`}
                    onClick={onItemSelect("wind")}>Wind</div>
                <div className={`c-nav-item c-nav-subitem ${currentSelection == "solar-pv-bess" ? 'current-subitem' : ''} ${isSolarPvBESSComplete ? 'is-completed' : ''}`}
                    onClick={onItemSelect("solar-pv-bess")}>Solar PV+BESS</div>
                <div className={`c-nav-item c-nav-subitem ${currentSelection == "biomass" ? 'current-subitem' : ''} ${isBiomassComplete ? 'is-completed' : ''}`}
                    onClick={onItemSelect("biomass")}>Biomass</div>
                <div className={`c-nav-item c-nav-subitem ${currentSelection == "chp" ? 'current-subitem' : ''} ${isCHPComplete ? 'is-completed' : ''}`}
                    onClick={onItemSelect("chp")}>CHP</div>
                <div className={`c-nav-item c-nav-subitem ${currentSelection == "led" ? 'current-subitem' : ''} ${isLEDComplete ? 'is-completed' : ''}`}
                    onClick={onItemSelect("led")}>LED</div>
                <div className={`c-nav-item c-nav-subitem ${currentSelection == "passive-infrared-sensor" ? 'current-subitem' : ''} ${isPassiveInfraredSensorComplete ? 'is-completed' : ''}`}
                    onClick={onItemSelect("passive-infrared-sensor")}>Passive infrared sensor</div>
                <div className={`c-nav-item c-nav-subitem ${currentSelection == "smart-meters-electricity" ? 'current-subitem' : ''} ${isSmartMetersElectricityComplete ? 'is-completed' : ''}`}
                    onClick={onItemSelect("smart-meters-electricity")}>Smart meters - electricity</div>
                <div className={`c-nav-item c-nav-subitem ${currentSelection == "smart-meters-gas" ? 'current-subitem' : ''} ${isSmartMetersGasComplete ? 'is-completed' : ''}`}
                    onClick={onItemSelect("smart-meters-gas")}>Smart meters - gas</div>
                <div className={`c-nav-item c-nav-subitem ${currentSelection == "voltage-optimisation" ? 'current-subitem' : ''} ${isVoltageOptimisationComplete ? 'is-completed' : ''}`}
                    onClick={onItemSelect("voltage-optimisation")}>Voltage optimisation</div>
                <div className={`c-nav-item c-nav-subitem ${currentSelection == "energy-management-system" ? 'current-subitem' : ''} ${isEnergyManagementSystemComplete ? 'is-completed' : ''}`}
                    onClick={onItemSelect("energy-management-system")}>Energy management system</div>
            </div>
            <hr />
            <div className="c-nav-item">BASELINE CONSUMPTION</div>
            <hr />
            <div className="c-nav-item">EMISSION SAVINGS</div>
            <hr />
            <div className="c-nav-item">MARGINAL ABATEMENT COST CURVE (MACC)</div>
            <hr />
        </div>

    </div>
}
export default Navigation;