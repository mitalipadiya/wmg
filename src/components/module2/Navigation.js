import { useLocation, useNavigate } from "react-router-dom";
import "./Navigation.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Navigation = () => {
    const [currentSelection, setCurrentSelection] = useState("baseline");
    const { isComplete: isBaselineComplete } = useSelector(state => state?.module2?.baseline);
    const { isComplete: isTechnologiesComplete } = useSelector(state => state?.module2?.technologies);
    const { isComplete: isEconomicParametersComplete } = useSelector(state => state?.module2?.economicParameters);
    const { isComplete: isSolarPVComplete } = useSelector(state => state?.module2?.solarPV);
    const { isComplete: isWindComplete } = useSelector(state => state?.module2?.wind);
    const { isComplete: isSolarPvBESSComplete } = useSelector(state => state?.module2?.solarPvBess);
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
    const [isGeneralComplete, setIsGeneralComplete] = useState(false);
    const [isSystemSizeCostComplete, setIsSystemSizeCostComplete] = useState(false);
    const { isComplete: isEmissionSavingsComplete } = useSelector(state => state?.module2?.emissionSavings);
    const { isComplete: isMaccComplete } = useSelector(state => state?.module2?.macc);
    const { isComplete: isParetoOptimisationComplete } = useSelector(state => state?.module2?.paretoOptimisation);

    const [selectedHeading, setSelectedHeading] = useState("general");
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        setCurrentSelection("baseline");
        navigate("baseline");
    }, [])
    useEffect(() => {
        if (isBaselineComplete && isTechnologiesComplete && isEconomicParametersComplete) {
            setIsGeneralComplete(true);
        }
    }, [isBaselineComplete, isTechnologiesComplete, isEconomicParametersComplete]);

    useEffect(() => {
        if (isSolarPVComplete && isWindComplete && isSolarPvBESSComplete && isBiomassComplete && isCHPComplete && isLEDComplete, isPassiveInfraredSensorComplete && isSmartMetersElectricityComplete && isSmartMetersGasComplete && isVoltageOptimisationComplete, isEnergyManagementSystemComplete && isSolarThermalComplete && isIndustrialHeatPumpComplete) {
            setIsSystemSizeCostComplete(true);
        }
    }, [isSolarPVComplete, isWindComplete, isSolarPvBESSComplete, isBiomassComplete, isCHPComplete, isLEDComplete, isPassiveInfraredSensorComplete, isSmartMetersElectricityComplete, isSmartMetersGasComplete, isVoltageOptimisationComplete, isEnergyManagementSystemComplete, isSolarThermalComplete, isIndustrialHeatPumpComplete])

    useEffect(() => {
        if (location.pathname.startsWith("/module2/")) {
            let routes = location.pathname.split("/");
            if (routes.length == 3) {
                setCurrentSelection(routes[2]);
                onNavigationChange(routes[2]);
            }
            window.scrollTo(0, 0);
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
                <div className={selectedHeading == "general" ? 'c-nav-item current-item' : `${isGeneralComplete ? 'c-nav-item is-complete' : 'c-nav-item'}`}
                    onClick={onItemSelect("baseline")}><span className="heading-span">GENERAL
                        {isGeneralComplete ? <span className="item-done"></span> : null}</span>
                    <span className={selectedHeading == "general" ? 'heading-arrow selected' : 'heading-arrow'}></span>
                </div>
                <div className={selectedHeading != "general" ? "hide" : "show"}>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "baseline" ? 'current-subitem' : ''} ${isBaselineComplete ? 'is-completed' : ''}`}><span></span>Baseline</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "technologies" ? 'current-subitem' : ''} ${isTechnologiesComplete ? 'is-completed' : ''}`}><span></span>Technologies</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "economic-parameters" ? 'current-subitem' : ''} ${isEconomicParametersComplete ? 'is-completed' : ''}`}><span></span>Economic parameters</div>
                </div>

            </div>
            <hr />
            <div>
                <div className={selectedHeading == "system-size-cost" ? 'c-nav-item current-item' : `${isSystemSizeCostComplete ? 'c-nav-item is-complete' : 'c-nav-item'}`}>
                    <span className="heading-span">SYSTEM SIZE & CAPITAL COST
                        {isSystemSizeCostComplete ? <span className="item-done"></span> : null}</span>
                    <span className={selectedHeading == "system-size-cost" ? 'heading-arrow selected' : 'heading-arrow'}></span></div>
                <div className={selectedHeading != "system-size-cost" ? "hide" : "show"}>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "solar-pv" ? 'current-subitem' : ''} ${isSolarPVComplete ? 'is-completed' : ''}`}><span></span>Solar PV</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "wind" ? 'current-subitem' : ''} ${isWindComplete ? 'is-completed' : ''}`}><span></span>Wind</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "solar-pv-bess" ? 'current-subitem' : ''} ${isSolarPvBESSComplete ? 'is-completed' : ''}`}><span></span>Solar PV+BESS</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "biomass" ? 'current-subitem' : ''} ${isBiomassComplete ? 'is-completed' : ''}`}><span></span>Biomass</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "chp" ? 'current-subitem' : ''} ${isCHPComplete ? 'is-completed' : ''}`}><span></span>CHP</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "led" ? 'current-subitem' : ''} ${isLEDComplete ? 'is-completed' : ''}`}><span></span>LED</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "passive-infrared-sensor" ? 'current-subitem' : ''} ${isPassiveInfraredSensorComplete ? 'is-completed' : ''}`}><span></span>Passive infrared sensor</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "smart-meters-electricity" ? 'current-subitem' : ''} ${isSmartMetersElectricityComplete ? 'is-completed' : ''}`}><span></span>Smart meters - electricity</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "smart-meters-gas" ? 'current-subitem' : ''} ${isSmartMetersGasComplete ? 'is-completed' : ''}`}><span></span>Smart meters - gas</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "voltage-optimisation" ? 'current-subitem' : ''} ${isVoltageOptimisationComplete ? 'is-completed' : ''}`}><span></span>Voltage optimisation</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "energy-management-system" ? 'current-subitem' : ''} ${isEnergyManagementSystemComplete ? 'is-completed' : ''}`}><span></span>Energy management system</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "solar-thermal" ? 'current-subitem' : ''} ${isSolarThermalComplete ? 'is-completed' : ''}`}><span></span>Solar thermal</div>
                    <div className={`c-nav-item c-nav-subitem ${currentSelection == "industrial-heat-pump" ? 'current-subitem' : ''} ${isIndustrialHeatPumpComplete ? 'is-completed' : ''}`}><span></span>Industrial heat pump</div>
                </div>

            </div>
            <hr />
            <div className={selectedHeading == "emission-savings" ? 'c-nav-item current-item' : `${isEmissionSavingsComplete ? 'c-nav-item is-complete' : 'c-nav-item'}`} onClick={onItemSelect("emission-savings")}>
                <span className="heading-span">% EMISSION SAVINGS
                    {isEmissionSavingsComplete ? <span className="item-done"></span> : null}</span>
                <span className={selectedHeading == "emission-savings" ? 'heading-arrow selected' : 'heading-arrow'}></span>
            </div>
            <hr />
            <div className={selectedHeading == "macc" ? 'c-nav-item current-item' : `${isMaccComplete ? 'c-nav-item is-complete' : 'c-nav-item'}`} onClick={onItemSelect("macc")}>
                <span className="heading-span">MARGINAL ABATEMENT COST CURVE (MACC)
                    {isMaccComplete ? <span className="item-done"></span> : null}</span>
                <span className={selectedHeading == "macc" ? 'heading-arrow selected' : 'heading-arrow'}></span>
            </div>
            <hr />
            <div className={selectedHeading == "pareto-optimisation" ? 'c-nav-item current-item' : `${isParetoOptimisationComplete ? 'c-nav-item is-complete' : 'c-nav-item'}`} onClick={onItemSelect("pareto-optimisation")}>
                <span className="heading-span">PARETO OPTIMISATION
                    {isParetoOptimisationComplete ? <span className="item-done"></span> : null}</span>
                <span className={selectedHeading == "pareto-optimisation" ? 'heading-arrow selected' : 'heading-arrow'}></span>
            </div>
            <hr />
        </div>

    </div>
}
export default Navigation;