import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateBaseline } from "../../actions/module2";
import { useNavigate } from "react-router-dom";

const IndustrialHeatPump = () => {
    const { solavPV, baseline, economicParameters, led } = useSelector(state => state.module2);

    const [averageAnnualGasRequirements, setAverageAnnualGasRequirements] = useState(led?.averageAnnualGasRequirements);
    const [heatLoadIsAtTemperaturesBelow100C, setHeatLoadIsAtTemperaturesBelow100C] = useState(led?.heatLoadIsAtTemperaturesBelow100C);
    const [heatLoadIsAtTemperaturesBetween100C150C, setHeatLoadIsAtTemperaturesBetween100C150C] = useState(led?.heatLoadIsAtTemperaturesBetween100C150C);
    const [lattitudeLongitude, setlattitudeLongitude] = useState(led?.lattitudeLongitude);
    const [existingBoilerEfficiency, setExistingBoilerEfficiency] = useState(led?.existingBoilerEfficiency);
    const [hoursOfHeatDemand, setHoursOfHeatDemand] = useState(led?.hoursOfHeatDemand);
    const [annualHeatLoad, setAnnualHeatLoad] = useState(led?.annualHeatLoad);
    const [annualGridGasSavingInPresenceOfIHP1, setAnnualGridGasSavingInPresenceOfIHP1] = useState(led?.annualGridGasSavingInPresenceOfIHP1);
    const [heatSourceTemperature, setHeatSourceTemperature] = useState(led?.heatSourceTemperature);
    const [heatSinkTemperature, setHeatSinkTemperature] = useState(led?.heatSinkTemperature);
    const [temperatureLift, setTemperatureLift] = useState(led?.temperatureLift);
    const [refrigerant, setRefrigerant] = useState(led?.refrigerant);
    const [coefficientOfPerformanceOfIHP1, setCoefficientOfPerformanceOfIHP1] = useState(led?.coefficientOfPerformanceOfIHP1);
    const [electricityInput, setElectricityInput] = useState(led?.electricityInput);
    const [annualGridGasSavingInPresenceOfIHP2, setAnnualGridGasSavingInPresenceOfIHP2] = useState(led?.annualGridGasSavingInPresenceOfIHP2);
    const [coefficientOfPerformanceOfIHP2, setCoefficientOfPerformanceOfIHP2] = useState(led?.coefficientOfPerformanceOfIHP2);
    const [electricityInputForIHP2, setElectricityInputForIHP2] = useState(led?.electricityInputForIHP2);
    const [sizeOfIndustrialHeatPump1, setSizeOfIndustrialHeatPump1] = useState(led?.sizeOfIndustrialHeatPump1);
    const [annualElectricityInputToIHP1, setAnnualElectricityInputToIHP1] = useState(led?.annualElectricityInputToIHP1);
    const [sizeOfIndustrialHeatPump2, setSizeOfIndustrialHeatPump2] = useState(led?.sizeOfIndustrialHeatPump2);
    const [annualElectricityInputToIHP2, setAnnualElectricityInputToIHP2] = useState(led?.annualElectricityInputToIHP2);
    const [unitInstallationCostOfIHP, setUnitInstallationCostOfIHP] = useState(led?.unitInstallationCostOfIHP);
    const [initialInvestmentForIHP1, setInitialInvestmentForIHP1] = useState(led?.initialInvestmentForIHP1);
    const [initialInvestmentForIHP2, setInitialInvestmentForIHP2] = useState(led?.initialInvestmentForIHP2);
    const [unitPriceOfElectricity, setUnitPriceOfElectricity] = useState(led?.unitPriceOfElectricity);
    const [annualCostOfElectricityForIHP1, setAnnualCostOfElectricityForIHP1] = useState(led?.annualCostOfElectricityForIHP1);
    const [annualCostOfElectricityForIHP2, setAnnualCostOfElectricityForIHP2] = useState(led?.annualCostOfElectricityForIHP2);
    const [unitPriceOfGridGas, setUnitPriceOfGridGas] = useState(led?.unitPriceOfGridGas);
    // const [annualCostOfElectricityForIHP2, setAnnualCostOfElectricityForIHP2] = useState(led?.annualCostOfElectricityForIHP2);

 
    return 
};
export default IndustrialHeatPump;
