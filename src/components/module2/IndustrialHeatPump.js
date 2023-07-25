import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateBaseline } from "../../actions/module2";
import { useNavigate } from "react-router-dom";

const IndustrialHeatPump = () => {
    const { solavPV, baseline, economicParameters, led } = useSelector(state => state.module2);

    const [averageAnnualGasRequirements, setAverageAnnualGasRequirements] = useState(baseline?.averageAnnualElectricityConsumption);
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
    const [annualCostSavingsForGridGas, setAnnualCostSavingsForGridGas] = useState(led?.annualCostSavingsForGridGas);
    const [annualCostOfElectricityForIHPs, setAnnualCostOfElectricityForIHPs] = useState(led?.annualCostOfElectricityForIHPs);
    const [annualOperationalCostSavings, setAnnualOperationalCostSavings] = useState(led?.annualOperationalCostSavings);
    const [netPresentValueOfOperationalEnergyCostSavings, setNetPresentValueOfOperationalEnergyCostSavings] = useState(led?.netPresentValueOfOperationalEnergyCostSavings);
    const [emissionFactorOfGridGas, setEmissionFactorOfGridGas] = useState(led?.emissionFactorOfGridGas);
    const [emissionFactorOfElectricityUsedForIHPs, setEmissionFactorOfElectricityUsedForIHPs] = useState(led?.emissionFactorOfElectricityUsedForIHPs);
    const [gHGEmissionsForHeatInAbsenceOfIHP, setGHGEmissionsForHeatInAbsenceOfIHP] = useState(led?.gHGEmissionsForHeatInAbsenceOfIHP);
    const [gHGEmissionsForHeatInPresenceOfIHP, setGHGEmissionsForHeatInPresenceOfIHP] = useState(led?.gHGEmissionsForHeatInPresenceOfIHP);
    const [annualOperationalEmissionSavings, setAnnualOperationalEmissionSavings] = useState(led?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriod, setTotalOperationalEmissionSavingsAcrossAbatementPeriod] = useState(led?.totalOperationalEmissionSavingsAcrossAbatementPeriod);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriodTon, setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon] = useState(led?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon);
    const [costEffectivenessConsideringOperationalEmissionSavingsOnly, setCostEffectivenessConsideringOperationalEmissionSavingsOnly] = useState(led?.costEffectivenessConsideringOperationalEmissionSavingsOnly);
    useEffect(() => {
        setAnnualHeatLoad(averageAnnualGasRequirements / hoursOfHeatDemand);
    }, [averageAnnualGasRequirements, hoursOfHeatDemand])
    useEffect(() => {
        setSizeOfIndustrialHeatPump1(annualHeatLoad * heatLoadIsAtTemperaturesBelow100C);
    }, [annualHeatLoad, heatLoadIsAtTemperaturesBelow100C])
    useEffect(() => {
        setAnnualGridGasSavingInPresenceOfIHP1(averageAnnualGasRequirements * heatLoadIsAtTemperaturesBelow100C);
    }, [averageAnnualGasRequirements, heatLoadIsAtTemperaturesBelow100C])
    useEffect(() => {
        setTemperatureLift(heatSinkTemperature - heatSourceTemperature);
    }, [heatSinkTemperature, heatSourceTemperature])
    useEffect(() => {
        setTemperatureLift(heatSinkTemperature - heatSourceTemperature);
    }, [heatSinkTemperature, heatSourceTemperature])
    useEffect(() => {
        setAnnualGridGasSavingInPresenceOfIHP2(averageAnnualGasRequirements * heatLoadIsAtTemperaturesBetween100C150C);
    }, [averageAnnualGasRequirements, heatLoadIsAtTemperaturesBetween100C150C])
    useEffect(() => {
        setSizeOfIndustrialHeatPump1(annualHeatLoad * heatLoadIsAtTemperaturesBelow100C);
    }, [annualHeatLoad, heatLoadIsAtTemperaturesBelow100C])
    useEffect(() => {
        setSizeOfIndustrialHeatPump2(sizeOfIndustrialHeatPump1 * heatLoadIsAtTemperaturesBetween100C150C);
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
        setAnnualCostOfElectricityForIHP2(unitPriceOfElectricity * annualElectricityInputToIHP1);
    }, [unitPriceOfElectricity, annualElectricityInputToIHP1])
    useEffect(() => {
        setAnnualCostSavingsForGridGas((averageAnnualGasRequirements * (heatLoadIsAtTemperaturesBelow100C + heatLoadIsAtTemperaturesBetween100C150C)) * unitPriceOfGridGas);
    }, [averageAnnualGasRequirements, heatLoadIsAtTemperaturesBelow100C, heatLoadIsAtTemperaturesBetween100C150C, unitPriceOfGridGas])
    useEffect(() => {
        setAnnualCostOfElectricityForIHPs(annualCostOfElectricityForIHP1 + annualCostOfElectricityForIHP2);
    }, [annualCostOfElectricityForIHP1, annualCostOfElectricityForIHP2])
    useEffect(() => {
        setAnnualOperationalCostSavings(annualCostSavingsForGridGas - annualCostOfElectricityForIHPs);
    }, [annualCostSavingsForGridGas, annualCostOfElectricityForIHPs])
    useEffect(() => {
        setGHGEmissionsForHeatInAbsenceOfIHP(averageAnnualGasRequirements*emissionFactorOfGridGas);
    }, [averageAnnualGasRequirements, emissionFactorOfElectricityUsedForIHPs])
    useEffect(() => {
        setGHGEmissionsForHeatInPresenceOfIHP((averageAnnualGasRequirements*(1-(heatLoadIsAtTemperaturesBelow100C+heatLoadIsAtTemperaturesBetween100C150C))*emissionFactorOfGridGas)+((annualElectricityInputToIHP1+annualElectricityInputToIHP2)*emissionFactorOfElectricityUsedForIHPs));
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
    return (
        <>
            <h2 className="form-heading">Industrial heat pump</h2>
            <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
            <div className="main">
                <div>
                    <h2 className="group-heading">GENERAL</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={baseline.averageAnnualGasConsumption}
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
                                onChange={(event) => { setHeatLoadIsAtTemperaturesBelow100C(event.target.value) }} />
                            <InputWithSideText value={heatLoadIsAtTemperaturesBetween100C150C}
                                unit=""
                                type="text"
                                placeholder="Enter value"
                                heading="What % of heat load is at temperatures between 100°C-150°C (get from Industrial Heat Pump)?"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                onChange={(event) => { setHeatLoadIsAtTemperaturesBetween100C150C(event.target.value) }} />

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
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                            />
                            <InputWithSideText value={annualGridGasSavingInPresenceOfIHP1}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                heading="Annual grid gas saving in presence of IHP1"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
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
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                            />
                            <InputWithSideText value={refrigerant}
                                unit=""
                                type="number"
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

                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setElectricityInput(event.target.value) }} />
                            {/* pending */}
                            <InputWithSideText value={annualGridGasSavingInPresenceOfIHP2}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual grid gas saving in presence of IHP2"
                                disabled={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                            />
                            <InputWithSideText value={coefficientOfPerformanceOfIHP2}
                                unit="kW"
                                type="number"
                                placeholder="Enter value"
                                heading="Coefficient of performance (COP) of IHP2"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setCoefficientOfPerformanceOfIHP2(event.target.value) }} />
                            <InputWithSideText value={electricityInputForIHP2}
                                // pending
                                unit="kW"
                                type="number"
                                placeholder="Enter value"
                                heading="Electricity input for IHP2"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                disabled={true}
                                onChange={(event) => { setElectricityInputForIHP2(event.target.value) }} />

                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Size of Industrial Heat Pump1" unit="kW" value={sizeOfIndustrialHeatPump1} />
                                {/* pending */}
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
                                // k10*f26
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
                            />
                            <InputWithSideText value={initialInvestmentForIHP2}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Initial investment for IHP2 (CAPEX)"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                            />
                            <InputWithSideText value={economicParameters.unitPriceOfElectricity}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Unit Price of electricity"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                disabled={true} />
                            <InputWithSideText value={annualCostOfElectricityForIHP1}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual cost of electricity for IHP1"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                disabled={true} />
                            <InputWithSideText value={annualCostOfElectricityForIHP2}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual cost of electricity for IHP2"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                disabled={true} />
                            <InputWithSideText value={economicParameters.unitPriceOfGas}
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
                                heading="Annual cost of electricity for IHPs"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                            />
                            {/* <InputWithSideText value={costOfElectricityWithLEDs}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Cost of electricity with LEDs"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                            /> */}
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
                            <InputWithSideText value={baseline.emissionFactorForGridGas}
                                unit="kgCO2e/kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Emission factor of grid gas"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                disabled={true}
                            />
                            <InputWithSideText value={baseline.emissionFactorGridElectricity}
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
                                heading="GHG Emissions for heat in absence of IHP"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                            <InputWithSideText value={gHGEmissionsForHeatInPresenceOfIHP}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
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
                                <CalculatedData heading="Total operational emission savings across abatement period" unit="tCO2e" value={totalOperationalEmissionSavingsAcrossAbatementPeriodTon} />
                                {/* <CalculatedData heading="Cost effectiveness considering operational emission savings only (i.e. without embodied emissions)" unit="tCO2e" value={costEffectivenessConsideringOperationalEmissionSavingsOnly} /> */}
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
                    <Button value="Next" />
                </div>
            </div >
        </>

    );
};
export default IndustrialHeatPump;
