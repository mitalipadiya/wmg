import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateIndustrialHeatPump } from "../../actions/module2";
import { useNavigate } from "react-router-dom";
import InputWithSelect from "../UI/InputWithSelect";

const IndustrialHeatPump = () => {
    const { baseline, economicParameters, industrialHeatPump } = useSelector(state => state.module2);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [averageAnnualGasRequirements] = useState(baseline?.averageAnnualGasConsumption);
    const [heatLoadIsAtTemperaturesBelow100C, setHeatLoadIsAtTemperaturesBelow100C] = useState(industrialHeatPump?.heatLoadIsAtTemperaturesBelow100C);
    const [heatLoadIsAtTemperaturesBetween100C150C, setHeatLoadIsAtTemperaturesBetween100C150C] = useState(industrialHeatPump?.heatLoadIsAtTemperaturesBetween100C150C);
    const [existingBoilerEfficiency, setExistingBoilerEfficiency] = useState(industrialHeatPump?.existingBoilerEfficiency);
    const [hoursOfHeatDemand, setHoursOfHeatDemand] = useState(industrialHeatPump?.hoursOfHeatDemand);
    const [annualHeatLoad, setAnnualHeatLoad] = useState(industrialHeatPump?.annualHeatLoad);
    const [annualGridGasSavingInPresenceOfIHP1, setAnnualGridGasSavingInPresenceOfIHP1] = useState(industrialHeatPump?.annualGridGasSavingInPresenceOfIHP1);
    const [ihpTypeIhp1, setIhpTypeIhp1] = useState(industrialHeatPump?.ihpTypeIhp1);
    const [copForIhp1, setCopForIhp1] = useState(industrialHeatPump?.copForIhp1);
    const [heatSourceTemperature, setHeatSourceTemperature] = useState(industrialHeatPump?.heatSourceTemperature);
    const [heatSinkTemperature, setHeatSinkTemperature] = useState(industrialHeatPump?.heatSinkTemperature);
    const [temperatureLift, setTemperatureLift] = useState(industrialHeatPump?.temperatureLift);
    const [refrigerant, setRefrigerant] = useState(industrialHeatPump?.refrigerant);
    const [coefficientOfPerformanceOfIHP1, setCoefficientOfPerformanceOfIHP1] = useState(industrialHeatPump?.coefficientOfPerformanceOfIHP1);
    const [electricityInput, setElectricityInput] = useState(industrialHeatPump?.electricityInput);
    const [annualGridGasSavingInPresenceOfIHP2, setAnnualGridGasSavingInPresenceOfIHP2] = useState(industrialHeatPump?.annualGridGasSavingInPresenceOfIHP2);
    const [coefficientOfPerformanceOfIHP2, setCoefficientOfPerformanceOfIHP2] = useState(industrialHeatPump?.coefficientOfPerformanceOfIHP2);
    const [electricityInputForIHP2, setElectricityInputForIHP2] = useState(industrialHeatPump?.electricityInputForIHP2);
    const [sizeOfIndustrialHeatPump1, setSizeOfIndustrialHeatPump1] = useState(industrialHeatPump?.sizeOfIndustrialHeatPump1);
    const [annualElectricityInputToIHP1, setAnnualElectricityInputToIHP1] = useState(industrialHeatPump?.annualElectricityInputToIHP1);
    const [sizeOfIndustrialHeatPump2, setSizeOfIndustrialHeatPump2] = useState(industrialHeatPump?.sizeOfIndustrialHeatPump2);
    const [annualElectricityInputToIHP2, setAnnualElectricityInputToIHP2] = useState(industrialHeatPump?.annualElectricityInputToIHP2);
    const [unitInstallationCostOfIHP, setUnitInstallationCostOfIHP] = useState(industrialHeatPump?.unitInstallationCostOfIHP);
    const [initialInvestmentForIHP1, setInitialInvestmentForIHP1] = useState(industrialHeatPump?.initialInvestmentForIHP1);
    const [initialInvestmentForIHP2, setInitialInvestmentForIHP2] = useState(industrialHeatPump?.initialInvestmentForIHP2);
    const [unitPriceOfElectricity, setUnitPriceOfElectricity] = useState(economicParameters?.unitPriceOfElectricity);
    const [annualCostOfElectricityForIHP1, setAnnualCostOfElectricityForIHP1] = useState(industrialHeatPump?.annualCostOfElectricityForIHP1);
    const [annualCostOfElectricityForIHP2, setAnnualCostOfElectricityForIHP2] = useState(industrialHeatPump?.annualCostOfElectricityForIHP2);
    const [unitPriceOfGridGas] = useState(economicParameters?.unitPriceOfGas);
    const [annualCostSavingsForGridGas, setAnnualCostSavingsForGridGas] = useState(industrialHeatPump?.annualCostSavingsForGridGas);
    const [annualCostOfElectricityForIHPs, setAnnualCostOfElectricityForIHPs] = useState(industrialHeatPump?.annualCostOfElectricityForIHPs);
    const [annualOperationalCostSavings, setAnnualOperationalCostSavings] = useState(industrialHeatPump?.annualOperationalCostSavings);
    const [netPresentValueOfOperationalEnergyCostSavings, setNetPresentValueOfOperationalEnergyCostSavings] = useState(industrialHeatPump?.netPresentValueOfOperationalEnergyCostSavings);
    const [emissionFactorOfGridGas] = useState(baseline?.emissionFactorForGridGas);
    const [emissionFactorOfElectricityUsedForIHPs] = useState(baseline?.emissionFactorGridElectricity);
    const [gHGEmissionsForHeatInAbsenceOfIHP, setGHGEmissionsForHeatInAbsenceOfIHP] = useState(industrialHeatPump?.gHGEmissionsForHeatInAbsenceOfIHP);
    const [gHGEmissionsForHeatInPresenceOfIHP, setGHGEmissionsForHeatInPresenceOfIHP] = useState(industrialHeatPump?.gHGEmissionsForHeatInPresenceOfIHP);
    const [annualOperationalEmissionSavings, setAnnualOperationalEmissionSavings] = useState(industrialHeatPump?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriod, setTotalOperationalEmissionSavingsAcrossAbatementPeriod] = useState(industrialHeatPump?.totalOperationalEmissionSavingsAcrossAbatementPeriod);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriodTon, setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon] = useState(industrialHeatPump?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon);
    const [costEffectivenessConsideringOperationalEmissionSavingsOnly, setCostEffectivenessConsideringOperationalEmissionSavingsOnly] = useState(industrialHeatPump?.costEffectivenessConsideringOperationalEmissionSavingsOnly);
    const copValues = [3.9, 4.2, 5.2];

    useEffect(() => {
        setAnnualHeatLoad(averageAnnualGasRequirements / hoursOfHeatDemand);
    }, [averageAnnualGasRequirements, hoursOfHeatDemand])
    useEffect(() => {
        setSizeOfIndustrialHeatPump1(annualHeatLoad * (heatLoadIsAtTemperaturesBelow100C/100));
    }, [annualHeatLoad, heatLoadIsAtTemperaturesBelow100C])
    useEffect(() => {
        setAnnualGridGasSavingInPresenceOfIHP1(averageAnnualGasRequirements * (heatLoadIsAtTemperaturesBelow100C/100));
    }, [averageAnnualGasRequirements, heatLoadIsAtTemperaturesBelow100C])
    useEffect(() => {
        setTemperatureLift(heatSinkTemperature - heatSourceTemperature);
    }, [heatSinkTemperature, heatSourceTemperature])
    useEffect(() => {
        setAnnualGridGasSavingInPresenceOfIHP2(averageAnnualGasRequirements * (heatLoadIsAtTemperaturesBetween100C150C/100));
    }, [averageAnnualGasRequirements, heatLoadIsAtTemperaturesBetween100C150C])
    useEffect(() => {
        setSizeOfIndustrialHeatPump2(sizeOfIndustrialHeatPump1 * (heatLoadIsAtTemperaturesBetween100C150C/100));
    }, [sizeOfIndustrialHeatPump1, heatLoadIsAtTemperaturesBetween100C150C])
    useEffect(() => {
        setUnitInstallationCostOfIHP(1950 * 0.11);
    }, [heatSinkTemperature, heatSourceTemperature])
    useEffect(() => {
        setInitialInvestmentForIHP1(unitInstallationCostOfIHP * sizeOfIndustrialHeatPump1);
    }, [unitInstallationCostOfIHP, sizeOfIndustrialHeatPump1])
    useEffect(() => {
        setInitialInvestmentForIHP2(unitInstallationCostOfIHP * sizeOfIndustrialHeatPump2);
    }, [unitInstallationCostOfIHP, sizeOfIndustrialHeatPump2])
    useEffect(() => {
        setAnnualCostOfElectricityForIHP1(unitPriceOfElectricity * annualElectricityInputToIHP1);
    }, [unitPriceOfElectricity, annualElectricityInputToIHP1])
    useEffect(() => {
        setAnnualCostOfElectricityForIHP2(unitPriceOfElectricity * annualElectricityInputToIHP2);
    }, [unitPriceOfElectricity, annualElectricityInputToIHP2])
    useEffect(() => {
        setAnnualCostSavingsForGridGas((averageAnnualGasRequirements * ((heatLoadIsAtTemperaturesBelow100C/100) + (heatLoadIsAtTemperaturesBetween100C150C/100))) * unitPriceOfGridGas);
    }, [averageAnnualGasRequirements, heatLoadIsAtTemperaturesBelow100C, heatLoadIsAtTemperaturesBetween100C150C, unitPriceOfGridGas])
    useEffect(() => {
        setAnnualCostOfElectricityForIHPs(annualCostOfElectricityForIHP1 + annualCostOfElectricityForIHP2);
    }, [annualCostOfElectricityForIHP1, annualCostOfElectricityForIHP2])
    useEffect(() => {
        setAnnualOperationalCostSavings(annualCostSavingsForGridGas - annualCostOfElectricityForIHPs);
    }, [annualCostSavingsForGridGas, annualCostOfElectricityForIHPs])
    useEffect(() => {
        setGHGEmissionsForHeatInAbsenceOfIHP(averageAnnualGasRequirements*emissionFactorOfGridGas);
    }, [averageAnnualGasRequirements, emissionFactorOfGridGas])
    useEffect(() => {
        setGHGEmissionsForHeatInPresenceOfIHP((averageAnnualGasRequirements*(1-((heatLoadIsAtTemperaturesBelow100C/100)+(heatLoadIsAtTemperaturesBetween100C150C/100)))*emissionFactorOfGridGas)+((annualElectricityInputToIHP1+annualElectricityInputToIHP2)*emissionFactorOfElectricityUsedForIHPs));
    }, [averageAnnualGasRequirements,heatLoadIsAtTemperaturesBelow100C,heatLoadIsAtTemperaturesBetween100C150C,emissionFactorOfGridGas,annualElectricityInputToIHP1,annualElectricityInputToIHP2,emissionFactorOfElectricityUsedForIHPs])
    useEffect(() => {
        setAnnualOperationalEmissionSavings(gHGEmissionsForHeatInAbsenceOfIHP - gHGEmissionsForHeatInPresenceOfIHP);
    }, [gHGEmissionsForHeatInAbsenceOfIHP, gHGEmissionsForHeatInPresenceOfIHP])
    useEffect(() => {
        setTotalOperationalEmissionSavingsAcrossAbatementPeriod(annualOperationalEmissionSavings*economicParameters.yearsOfAbatement);
    }, [annualOperationalEmissionSavings])
    useEffect(() => {
        setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon(totalOperationalEmissionSavingsAcrossAbatementPeriod/1000);
    }, [totalOperationalEmissionSavingsAcrossAbatementPeriod])
    useEffect(()=>{
        setElectricityInput(sizeOfIndustrialHeatPump1/coefficientOfPerformanceOfIHP1);
    },[sizeOfIndustrialHeatPump1, coefficientOfPerformanceOfIHP1]);
    useEffect(()=>{
        setAnnualElectricityInputToIHP1(electricityInput * hoursOfHeatDemand);
    }, [electricityInput, hoursOfHeatDemand]);
    useEffect(()=>{
        setCoefficientOfPerformanceOfIHP2((heatSinkTemperature/temperatureLift)*0.45);
    },[heatSinkTemperature, temperatureLift]);
    useEffect(()=>{
        setElectricityInputForIHP2(sizeOfIndustrialHeatPump2/coefficientOfPerformanceOfIHP2);
    },[sizeOfIndustrialHeatPump2, coefficientOfPerformanceOfIHP2]);
    useEffect(()=>{
        setAnnualElectricityInputToIHP2(electricityInputForIHP2 * hoursOfHeatDemand);
    },[electricityInputForIHP2, hoursOfHeatDemand]);
    useEffect(() => {
        setNetPresentValueOfOperationalEnergyCostSavings(((1 - Math.pow(1 + (economicParameters?.discountRate / 100), -economicParameters?.yearsOfAbatement)) / (economicParameters?.discountRate / 100)) * annualOperationalCostSavings);
    }, [annualOperationalCostSavings]);
    useEffect(()=>{
        setCostEffectivenessConsideringOperationalEmissionSavingsOnly(((initialInvestmentForIHP1 + initialInvestmentForIHP2)-netPresentValueOfOperationalEnergyCostSavings)/totalOperationalEmissionSavingsAcrossAbatementPeriodTon);
    },[initialInvestmentForIHP1,initialInvestmentForIHP2 ,netPresentValueOfOperationalEnergyCostSavings,totalOperationalEmissionSavingsAcrossAbatementPeriodTon])
    
    const onSave = () => {
        dispatch(updateIndustrialHeatPump({
            averageAnnualGasRequirements,
            heatLoadIsAtTemperaturesBelow100C,
            heatLoadIsAtTemperaturesBetween100C150C,
            existingBoilerEfficiency,
            hoursOfHeatDemand,
            annualHeatLoad,
            sizeOfIndustrialHeatPump1,
            annualGridGasSavingInPresenceOfIHP1,
            ihpTypeIhp1,
            copForIhp1,
            heatSourceTemperature,
            heatSinkTemperature,
            temperatureLift,
            refrigerant,
            coefficientOfPerformanceOfIHP1,
            electricityInput,
            annualElectricityInputToIHP1,
            sizeOfIndustrialHeatPump2,
            annualGridGasSavingInPresenceOfIHP2,
            coefficientOfPerformanceOfIHP2,
            electricityInputForIHP2,
            annualElectricityInputToIHP2,
            unitInstallationCostOfIHP,
            initialInvestmentForIHP1,
            initialInvestmentForIHP2,
            unitPriceOfElectricity,
            annualCostOfElectricityForIHP1,
            annualCostOfElectricityForIHP2,
            unitPriceOfGridGas,
            annualCostSavingsForGridGas,
            annualCostOfElectricityForIHPs,
            annualOperationalCostSavings,
            netPresentValueOfOperationalEnergyCostSavings,
            emissionFactorOfGridGas,
            emissionFactorOfElectricityUsedForIHPs,
            gHGEmissionsForHeatInAbsenceOfIHP,
            gHGEmissionsForHeatInPresenceOfIHP,
            annualOperationalEmissionSavings,
            totalOperationalEmissionSavingsAcrossAbatementPeriod,
            totalOperationalEmissionSavingsAcrossAbatementPeriodTon,
            costEffectivenessConsideringOperationalEmissionSavingsOnly,
            isComplete: true
        }));
        navigate("./../emission-savings")
    }
    return (
        <>
            <h2 className="form-heading">Industrial heat pump</h2>
            <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
            <div className="main">
                <div>
                    <h2 className="group-heading">GENERAL</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={averageAnnualGasRequirements}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Average annual gas requirements"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                            <InputWithSideText value={heatLoadIsAtTemperaturesBelow100C}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="What % of heat load is at temperatures below 100°C (get from Industrial Heat Pump)?"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event)=>{setHeatLoadIsAtTemperaturesBelow100C(event.target.value)}}/>
                            <InputWithSideText value={heatLoadIsAtTemperaturesBetween100C150C}
                                unit=""
                                type="text"
                                placeholder="Enter value"
                                heading="What % of heat load is at temperatures between 100°C-150°C (get from Industrial Heat Pump)?"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                onChange={(event)=>{setHeatLoadIsAtTemperaturesBetween100C150C(event.target.value)}}/>
                        </div>
                        <div className="calculated-main">

                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">TECHNICAL ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={existingBoilerEfficiency}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="Existing boiler efficiency"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setExistingBoilerEfficiency(event.target.value) }} />
                            <InputWithSideText value={hoursOfHeatDemand}
                                unit="h"
                                type="number"
                                placeholder="Enter value"
                                heading="Hours of heat demand"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setHoursOfHeatDemand(event.target.value) }} />
                            <InputWithSideText value={annualHeatLoad}
                                unit="kW"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual heat load"
                                disabled={true}
                                toFixed={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                            />
                            <InputWithSideText value={annualGridGasSavingInPresenceOfIHP1}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                toFixed={true}
                                heading="Annual grid gas saving in presence of IHP1"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                            />
                            <InputWithSideText value={ihpTypeIhp1}
                                unit=""
                                type="text"
                                placeholder="Enter value"
                                disabled={true}
                                heading="IHP type for IHP1"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                            />
                            <InputWithSelect value={copForIhp1}
                                values={copValues}
                                unit=""
                                type="text"
                                placeholder="Enter value"
                                heading="COP for IHP1"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={event => setCopForIhp1(event.target.value)}
                            />
                            <InputWithSideText value={heatSourceTemperature}
                                unit="°C"
                                type="number"
                                placeholder="Enter value"
                                heading="Heat source temperature"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setHeatSourceTemperature(event.target.value) }} />
                            <InputWithSideText value={heatSinkTemperature}
                                unit="°C"
                                type="number"
                                placeholder="Enter value"
                                heading="Heat sink temperature/Process temperature"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setHeatSinkTemperature(event.target.value) }} />
                            <InputWithSideText value={temperatureLift}
                                unit="°C"
                                type="number"
                                placeholder="Enter value"
                                heading="Temperature lift"
                                disabled={true}
                                toFixed={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                            />
                            <InputWithSideText value={refrigerant}
                                unit=""
                                type="text"
                                placeholder="Enter value"
                                heading="Refrigerant"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setRefrigerant(event.target.value) }} />
                            <InputWithSideText value={coefficientOfPerformanceOfIHP1}
                                unit="K"
                                type="number"
                                placeholder="Enter value"
                                heading="Coefficient of performance (COP) of IHP1"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setCoefficientOfPerformanceOfIHP1(event.target.value) }} />

                            <InputWithSideText value={electricityInput}
                                unit="kW"
                                type="number"
                                placeholder="Enter value"
                                heading="Electricity input"
                                disabled={true}
                                toFixed={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"/>
                            <InputWithSideText value={annualGridGasSavingInPresenceOfIHP2}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual grid gas saving in presence of IHP2"
                                disabled={true}
                                toFixed={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                            />
                            <InputWithSideText value={coefficientOfPerformanceOfIHP2}
                                unit="kW"
                                type="number"
                                placeholder="Enter value"
                                heading="Coefficient of performance (COP) of IHP2"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"/>
                            <InputWithSideText value={electricityInputForIHP2}
                                unit="kW"
                                type="number"
                                placeholder="Enter value"
                                heading="Electricity input for IHP2"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                disabled={true}
                                toFixed={true}/>
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Size of Industrial Heat Pump1" unit="kW" value={sizeOfIndustrialHeatPump1} />
                                <CalculatedData heading="Annual electricity input to IHP1" unit="kWh" value={annualElectricityInputToIHP1} />
                                <CalculatedData heading="Size of Industrial Heat Pump2" unit="kW" value={sizeOfIndustrialHeatPump2} />
                                <CalculatedData heading="Annual electricity input to IHP2" unit="kWh" value={annualElectricityInputToIHP2} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">ECONOMIC ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={unitInstallationCostOfIHP}
                                unit="£/kW"
                                type="number"
                                disabled={true}
                                placeholder="Enter value"
                                heading="Unit installation cost of IHP"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                            />
                            <InputWithSideText value={initialInvestmentForIHP1}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Initial investment for IHP1 (CAPEX)"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                disabled={true}
                                toFixed={true}
                            />
                            <InputWithSideText value={initialInvestmentForIHP2}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Initial investment for IHP2 (CAPEX)"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                disabled={true}
                                toFixed={true}
                            />
                            <InputWithSideText value={economicParameters.unitPriceOfElectricity}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Unit Price of electricity"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                disabled={true}/>
                            <InputWithSideText value={annualCostOfElectricityForIHP1}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual cost of electricity for IHP1"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                disabled={true}
                                toFixed={true}/>
                            <InputWithSideText value={annualCostOfElectricityForIHP2}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual cost of electricity for IHP2"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                disabled={true}
                                toFixed={true} />
                            <InputWithSideText value={unitPriceOfGridGas}
                                unit="£/kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Unit price of grid gas"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                disabled={true} />
                            <InputWithSideText value={annualCostSavingsForGridGas}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                heading="Annual cost savings for grid gas"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                            />
                            <InputWithSideText value={annualCostOfElectricityForIHPs}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                toFixed={true}
                                heading="Annual cost of electricity for IHPs"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                            />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Annual operational cost savings" unit="£" value={annualOperationalCostSavings} />
                                <CalculatedData heading="Net Present Value of operational energy cost savings (NPV)" unit="£" value={netPresentValueOfOperationalEnergyCostSavings} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">OPERATIONAL EMISSIONS ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={emissionFactorOfGridGas}
                                unit="kgCO2e/kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Emission factor of grid gas"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                disabled={true}
                            />
                            <InputWithSideText value={emissionFactorOfElectricityUsedForIHPs}
                                unit="kgCO2e/kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Emission factor of electricity used for IHPs"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                disabled={true}
                            />
                            <InputWithSideText value={gHGEmissionsForHeatInAbsenceOfIHP}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                toFixed={true}
                                heading="GHG Emissions for heat in absence of IHP"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                            <InputWithSideText value={gHGEmissionsForHeatInPresenceOfIHP}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                toFixed={true}
                                heading="GHG Emissions for heat in presence of IHP"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                            <InputWithSideText value={annualOperationalEmissionSavings}
                                unit="kgCO2e"
                                type="number"
                                disabled={true}
                                placeholder="Enter value"
                                heading="Annual operational emission savings"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                            <InputWithSideText value={totalOperationalEmissionSavingsAcrossAbatementPeriod}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                heading="Total operational emission savings across abatement period"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Total operational emission savings across abatement period" unit="tCO2e" value={totalOperationalEmissionSavingsAcrossAbatementPeriodTon} decimalCount={4}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="calculated-main calculated-last">
                    <div className="calculated-container">
                        <CalculatedData heading="Cost effectiveness considering operational emission savings only (i.e. without embodied emissions)" unit="£/tCO2e" value={costEffectivenessConsideringOperationalEmissionSavingsOnly} />
                    </div>
                </div>
                <div className="btn-div">
                    <Button value="Next" onClick={onSave}/>
                </div>
            </div >
        </>

    );
};
export default IndustrialHeatPump;
