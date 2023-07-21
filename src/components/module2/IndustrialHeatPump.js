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
                                onChange={(event) => { setAverageAnnualGasRequirements(event.target.value) }}
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
                                onChange={(event) => { heatLoadIsAtTemperaturesBetween100C150C(event.target.value) }} />

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
                                onChange={(event) => { setAnnualHeatLoad(event.target.value) }}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                            />
                            <InputWithSideText value={annualGridGasSavingInPresenceOfIHP1}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual grid gas saving in presence of IHP1"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setAnnualGridGasSavingInPresenceOfIHP1(event.target.value) }} />
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
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setTemperatureLift(event.target.value) }} />
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
                            {/* collector temperature difference in excel */}
                            <InputWithSideText value={annualGridGasSavingInPresenceOfIHP2}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual grid gas saving in presence of IHP2"
                                disabled={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setAnnualGridGasSavingInPresenceOfIHP2(event.target.value) }} />
                            <InputWithSideText value={coefficientOfPerformanceOfIHP2}
                                unit="kW"
                                type="number"
                                placeholder="Enter value"
                                heading="Coefficient of performance (COP) of IHP2"
                                disabled={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setCoefficientOfPerformanceOfIHP2(event.target.value) }} />
                            <InputWithSideText value={electricityInputForIHP2}
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
                                placeholder="Enter value"
                                heading="Unit installation cost of IHP"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setUnitInstallationCostOfIHP(event.target.value) }} />
                            <InputWithSideText value={initialInvestmentForIHP1}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Initial investment for IHP1 (CAPEX)"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                disabled={true}
                                onChange={(event) => { setInitialInvestmentForIHP1(event.target.value) }} />
                            <InputWithSideText value={initialInvestmentForIHP2}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Initial investment for IHP2 (CAPEX)"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setInitialInvestmentForIHP2(event.target.value) }} />
                            <InputWithSideText value={unitPriceOfElectricity}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Unit Price of electricity"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setUnitPriceOfElectricity(event.target.value) }} />
                            <InputWithSideText value={annualCostOfElectricityForIHP1}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual cost of electricity for IHP1"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setAnnualCostOfElectricityForIHP1(event.target.value) }} />
                            <InputWithSideText value={annualCostOfElectricityForIHP2}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual cost of electricity for IHP2"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setAnnualCostOfElectricityForIHP2(event.target.value) }} />
                            <InputWithSideText value={unitPriceOfGridGas}
                                unit="£/kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Unit price of grid gas"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setUnitPriceOfGridGas(event.target.value) }} />
                            <InputWithSideText value={economicParameters.unitPriceOfGas}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual cost savings for grid gas"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setUnitPriceOfGridGas(event.target.value) }} />
                            <InputWithSideText value={economicParameters.unitPriceOfGas}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual cost of electricity for IHPs"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setUnitPriceOfGridGas(event.target.value) }} />
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
                            <InputWithSideText value={emissionFactorOfGridGas}
                                unit="kgCO2e/kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Emission factor of grid gas"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setEmissionFactorOfGridGas(event.target.value) }} />
                            <InputWithSideText value={annualOperationalEmissionSavings}
                                unit="kgCO2e/kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Emission factor of electricity used for IHPs"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setAnnualOperationalEmissionSavings(event.target.value) }} />
                            <InputWithSideText value={totalOperationalEmissionSavingsAcrossAbatementPeriod}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="GHG Emissions for heat in absence of IHP"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                             <InputWithSideText value={totalOperationalEmissionSavingsAcrossAbatementPeriod}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="GHG Emissions for heat in presence of IHP"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                             <InputWithSideText value={totalOperationalEmissionSavingsAcrossAbatementPeriod}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual operational emission savings"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                             <InputWithSideText value={totalOperationalEmissionSavingsAcrossAbatementPeriod}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
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
                        <CalculatedData heading="Cost effectiveness considering operational emission savings only (i.e. without embodied emissions)" unit="£/tCO2e" value={""} />
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
