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
    const { isComplete: isWindComplete } = useSelector(state => state?.module2?.wind);
    const { isComplete: isSolarPvBESSComplete} = useSelector(state => state?.module2?.solarPvBess);
    const { isComplete: isBiomassComplete } = useSelector(state => state?.module2?.biomass);
    const { isComplete: isCHPComplete } = useSelector(state => state?.module2?.chp);
    const { isComplete: isLEDComplete } = useSelector(state => state?.module2?.led);
    const { isComplete: isPassiveInfraredSensorComplete } = useSelector(state => state?.module2?.passiveInfraredSensor);
    const { isComplete: isSmartMetersElectricityComplete } = useSelector(state => state?.module2?.smartMetersElectricity);
    const { isComplete: isSmartMetersGasComplete } = useSelector(state => state?.module2?.smartMetersGas);
    const { isComplete: isVoltageOptimisationComplete } = useSelector(state => state?.module2?.voltageOptimisation);
    const { isComplete: isEnergyManagementSystemComplete } = useSelector(state => state?.module2?.energyManagementSystem);
    const { isComplete: isSolarThermalComplete } = useSelector(state => state?.module2?.solarThermal);
    const { isComplete: isIndustrialHeatPumpComplete } = useSelector(state => state?.module2?.industrialHeatPump);
    const [selectedHeading, setSelectedHeading] = useState("general");
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        setCurrentSelection("baseline");
        navigate("baseline");
    }, [])

    useEffect(() => {
        if (location.pathname.startsWith("/module2/")) {
            let routes = location.pathname.split("/");
            if (routes.length == 3) {
                setCurrentSelection(routes[2]);
                onNavigationChange(routes[2]);
            }
        }
    }, [location.pathname]);

    const onItemSelect = param => event => {
        setCurrentSelection(param);
        onNavigationChange(param);
        navigate(`./${param}`);
    }
    const onNavigationChange = (param) => {
        if (param == "baseline" || param == "technologies" || param == "economic-parameters") {
            setSelectedHeading("general");
        } else if (param == "emission-savings") {
            setSelectedHeading("emission-savings");
        } else if (param == "macc") {
            setSelectedHeading("macc");
        } else if (param == "pareto-optimisation") {
            setSelectedHeading("pareto-optimisation");
        } else {
            setSelectedHeading("system-size-cost");
        }
    }
    return <div className="c-nav">
        <div className="inner-box">
            <div>
                <div className={selectedHeading == "general" ? 'c-nav-item current-item' : 'c-nav-item'}
                    onClick={onItemSelect("baseline")}><span>GENERAL</span>
                    <span className={selectedHeading == "general" ? 'heading-arrow selected' : 'heading-arrow'}></span>
                </div>
                <div className={selectedHeading != "general" ? "hide" : "show"}>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "baseline" ? 'current-subitem' : ''} ${isBaselineComplete ? 'is-completed' : ''}`}
                        onClick={onItemSelect("baseline")}><span></span>Baseline</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "technologies" ? 'current-subitem' : ''} ${isTechnologiesComplete ? 'is-completed' : ''}`}
                        onClick={onItemSelect("technologies")}><span></span>Technologies</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "economic-parameters" ? 'current-subitem' : ''} ${isEconomicParametersComplete ? 'is-completed' : ''}`}
                        onClick={onItemSelect("economic-parameters")}><span></span>Economic parameters</div>
                </div>

            </div>
            <hr />
            <div>
                <div className={selectedHeading == "system-size-cost" ? 'c-nav-item current-item' : 'c-nav-item'}
                    onClick={onItemSelect("solar-pv")}>
                    <span>SYSTEM SIZE & CAPITAL COST</span>
                    <span className={selectedHeading == "system-size-cost" ? 'heading-arrow selected' : 'heading-arrow'}></span></div>
                <div className={selectedHeading != "system-size-cost" ? "hide" : "show"}>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "solar-pv" ? 'current-subitem' : ''} ${isSolarPVComplete ? 'is-completed' : ''}`}
                        onClick={onItemSelect("solar-pv")}><span></span>Solar PV</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "wind" ? 'current-subitem' : ''} ${isWindComplete ? 'is-completed' : ''}`}
                        onClick={onItemSelect("wind")}><span></span>Wind</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "solar-pv-bess" ? 'current-subitem' : ''} ${isSolarPvBESSComplete ? 'is-completed' : ''}`}
                        onClick={onItemSelect("solar-pv-bess")}><span></span>Solar PV+BESS</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "biomass" ? 'current-subitem' : ''} ${isBiomassComplete ? 'is-completed' : ''}`}
                        onClick={onItemSelect("biomass")}><span></span>Biomass</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "chp" ? 'current-subitem' : ''} ${isCHPComplete ? 'is-completed' : ''}`}
                        onClick={onItemSelect("chp")}><span></span>CHP</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "led" ? 'current-subitem' : ''} ${isLEDComplete ? 'is-completed' : ''}`}
                        onClick={onItemSelect("led")}><span></span>LED</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "passive-infrared-sensor" ? 'current-subitem' : ''} ${isPassiveInfraredSensorComplete ? 'is-completed' : ''}`}
                        onClick={onItemSelect("passive-infrared-sensor")}><span></span>Passive infrared sensor</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "smart-meters-electricity" ? 'current-subitem' : ''} ${isSmartMetersElectricityComplete ? 'is-completed' : ''}`}
                        onClick={onItemSelect("smart-meters-electricity")}><span></span>Smart meters - electricity</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "smart-meters-gas" ? 'current-subitem' : ''} ${isSmartMetersGasComplete ? 'is-completed' : ''}`}
                        onClick={onItemSelect("smart-meters-gas")}><span></span>Smart meters - gas</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "voltage-optimisation" ? 'current-subitem' : ''} ${isVoltageOptimisationComplete ? 'is-completed' : ''}`}
                        onClick={onItemSelect("voltage-optimisation")}><span></span>Voltage optimisation</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "energy-management-system" ? 'current-subitem' : ''} ${isEnergyManagementSystemComplete ? 'is-completed' : ''}`}
                        onClick={onItemSelect("energy-management-system")}><span></span>Energy management system</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "solar-thermal" ? 'current-subitem' : ''} ${isSolarThermalComplete ? 'is-completed' : ''}`}
                        onClick={onItemSelect("solar-thermal")}><span></span>Solar thermal</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "industrial-heat-pump" ? 'current-subitem' : ''} ${isIndustrialHeatPumpComplete ? 'is-completed' : ''}`}
                        onClick={onItemSelect("industrial-heat-pump")}><span></span>Industrial heat pump</div>
                </div>

            </div>
            <hr />
            <div className={selectedHeading == "emission-savings" ? 'c-nav-item current-item' : 'c-nav-item'} onClick={onItemSelect("emission-savings")}><span>% EMISSION SAVINGS</span>
                <span className={selectedHeading == "emission-savings" ? 'heading-arrow selected' : 'heading-arrow'}></span>
            </div>
            <hr />
            <div className={selectedHeading == "macc" ? 'c-nav-item current-item' : 'c-nav-item'} onClick={onItemSelect("macc")}>
                <span>MARGINAL ABATEMENT COST CURVE (MACC)</span>
                <span className={selectedHeading == "macc" ? 'heading-arrow selected' : 'heading-arrow'}></span>
            </div>
            <hr />
            <div className={selectedHeading == "pareto-optimisation" ? 'c-nav-item current-item' : 'c-nav-item'} onClick={onItemSelect("pareto-optimisation")}>
                <span>PARETO OPTIMISATION</span>
                <span className={selectedHeading == "pareto-optimisation" ? 'heading-arrow selected' : 'heading-arrow'}></span>
            </div>
            <hr />
        </div>

    </div>
}
export default Navigation;