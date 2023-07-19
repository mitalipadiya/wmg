import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateBaseline, updateEconomicParameters } from "../../actions/module2";
import { useNavigate } from "react-router-dom";

const PassiveInfraredSensor = () => {
    const { solavPV, baseline, economicParameters, passiveInfraredSensor } = useSelector(state => state.module2);
    const [numberOfLamps, setNumberOfLamps] = useState(passiveInfraredSensor?.numberOfLamps);
    const [wattageOfLamp, setWattageOfLamp] = useState(passiveInfraredSensor?.wattageOfLamp);
    const [numberOfDaysInYear, setNumberOfDaysInYear] = useState(passiveInfraredSensor?.numberOfDaysInYear);
    const [estimatedHoursONPerDay, setEstimatedHoursONPerDay] = useState(passiveInfraredSensor?.estimatedHoursONPerDay);
    const [estimatedHoursOccupiedPerDay, setEstimatedHoursOccupiedPerDay] = useState(passiveInfraredSensor?.estimatedHoursOccupiedPerDay);
    const [areaOfIndustrialFacility, setAreaofIndustrialFacility] = useState(passiveInfraredSensor?.areaOfIndustrialFacility);
    const [detectionRangeOfPIRSensors, setDetectionRangeOfPIRSensors] = useState(passiveInfraredSensor?.detectionRangeOfPIRSensors);
    const [numberOfPIRSensors, setNumberOfPIRSensors] = useState(passiveInfraredSensor?.numberOfPIRSensors);
    const [annualElectricityConsumptionWithoutPirSensor, setAnnualElectricityConsumptionWithoutPirSensor] = useState(passiveInfraredSensor?.annualElectricityConsumptionWithoutPirSensor);
    const [annualElectricityConsumptionWithPirSensorInstalled, setAnnualElectricityConsumptionWithPirSensorInstalled] = useState(passiveInfraredSensor?.annualElectricityConsumptionWithPirSensorInstalled);
    const [annualElectricitySavingsWithPirSensors, setAnnualElectricitySavingsWithPirSensors] = useState(passiveInfraredSensor?.annualElectricitySavingsWithPirSensors);
    const [unitCostOfPirSensor, setUnitCostOfPirSensor] = useState(passiveInfraredSensor?.unitCostOfPirSensor);
    const [initialInvestmentForPir, setInitialInvestmentForPir] = useState(passiveInfraredSensor?.initialInvestmentForPir);
    const [annualOperationalCostSavings, setAnnualOperationalCostSavings] = useState(passiveInfraredSensor?.annualOperationalCostSavings);
    const [netPresentValueOfOperationalEnergyCostSaings, setNetPresentValueOfOperationalEnergyCostSaings] = useState(passiveInfraredSensor?.netPresentValueOfOperationalEnergyCostSaings);
    const [annualOperationalEmissionSavings, setAnnualOperationalEmissionSavings] = useState(passiveInfraredSensor?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriod, setTotalOperationalEmissionSavingsAcrossAbatementPeriod] = useState(passiveInfraredSensor?.totalOperationalEmissionSavingsAcrossAbatementPeriod);
    const [costEffectivenessConsideringOperationalEmissionSavingsOnly, setCostEffectivenessConsideringOperationalEmissionSavingsOnly] = useState(passiveInfraredSensor?.costEffectivenessConsideringOperationalEmissionSavingsOnly);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriodTon, setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon] = useState(passiveInfraredSensor?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon);

    useEffect(() => {
        setNumberOfPIRSensors(areaOfIndustrialFacility / detectionRangeOfPIRSensors)
    }, [areaOfIndustrialFacility, detectionRangeOfPIRSensors]);
    useEffect(() => {
        setAnnualElectricityConsumptionWithoutPirSensor(numberOfLamps * wattageOfLamp * numberOfDaysInYear * estimatedHoursONPerDay / 1000)
    }, [numberOfLamps, wattageOfLamp, numberOfDaysInYear, estimatedHoursONPerDay]);
    useEffect(() => {
        setAnnualElectricityConsumptionWithPirSensorInstalled(numberOfLamps * wattageOfLamp * numberOfDaysInYear * estimatedHoursOccupiedPerDay / 1000)
    }, [numberOfLamps, wattageOfLamp, numberOfDaysInYear, estimatedHoursOccupiedPerDay]);
    useEffect(() => {
        setAnnualElectricitySavingsWithPirSensors(annualElectricityConsumptionWithoutPirSensor - annualElectricityConsumptionWithPirSensorInstalled)
    }, [annualElectricityConsumptionWithPirSensorInstalled, annualElectricityConsumptionWithoutPirSensor]);
    useEffect(() => {
        setAnnualOperationalCostSavings(annualElectricitySavingsWithPirSensors * economicParameters.unitPriceOfElectricity)
    }, [annualElectricitySavingsWithPirSensors]);
    useEffect(() => {
        setInitialInvestmentForPir(unitCostOfPirSensor * numberOfPIRSensors)
    }, [unitCostOfPirSensor, numberOfPIRSensors]);
    useEffect(() => {
        setAnnualOperationalEmissionSavings(annualElectricitySavingsWithPirSensors * baseline.emissionFactorGridElectricity)
    }, [annualElectricitySavingsWithPirSensors]);
    useEffect(() => {
        setTotalOperationalEmissionSavingsAcrossAbatementPeriod(annualOperationalEmissionSavings * economicParameters.yearsOfAbatement)
    }, [annualOperationalEmissionSavings]);
    useEffect(() => {
        setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon(totalOperationalEmissionSavingsAcrossAbatementPeriod/1000)
    }, [totalOperationalEmissionSavingsAcrossAbatementPeriod]);

    return (
        <>
            <h2 className="form-heading">Passive infrared sensor</h2>
            <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
            <div className="main">
                <div>
                    <div>
                        <h2 className="group-heading">GENERAL</h2>
                        <div className="form-div">
                            <div className="form-input">
                                <InputWithSideText value={numberOfLamps}
                                    unit="N"
                                    type="number"
                                    placeholder="Enter value"
                                    heading="Number of lamps"
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                    onChange={(event) => { setNumberOfLamps(event.target.value) }} />
                                <InputWithSideText value={wattageOfLamp}
                                    unit="W"
                                    type="number"
                                    placeholder="Enter value"
                                    heading="Wattage of lamp"
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                    onChange={(event) => { setWattageOfLamp(event.target.value) }} />
                                <InputWithSideText value={numberOfDaysInYear}
                                    unit="D"
                                    type="number"
                                    placeholder="Enter value"
                                    heading="Number of days in year"
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                    onChange={(event) => { setNumberOfDaysInYear(event.target.value) }} />
                                <InputWithSideText value={estimatedHoursONPerDay}
                                    unit="h0"
                                    type="number"
                                    placeholder="Enter value"
                                    heading="Estimated hours ON per day"
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                    onChange={(event) => { setEstimatedHoursONPerDay(event.target.value) }} />
                                <InputWithSideText value={estimatedHoursOccupiedPerDay}
                                    unit="hoc"
                                    type="number"
                                    placeholder="Enter value"
                                    heading="Estimated hours occupied per day"
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                    onChange={(event) => { setEstimatedHoursOccupiedPerDay(event.target.value) }} />
                                <InputWithSideText value={areaOfIndustrialFacility}
                                    unit="m2"
                                    type="number"
                                    placeholder="Enter value"
                                    heading="Area of industrial facility"
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                    onChange={(event) => { setAreaofIndustrialFacility(event.target.value) }} />
                            </div>
                            <div className="calculated-main">

                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="group-heading">TECHNICAL ANALYSIS</h2>
                        <div className="form-div">
                            <div className="form-input">
                                <InputWithSideText value={detectionRangeOfPIRSensors}
                                    unit="m2"
                                    type="number"
                                    placeholder="Enter value"
                                    heading="Detection range of PIR sensors"
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                    onChange={(event) => { setDetectionRangeOfPIRSensors(event.target.value) }} />

                                <InputWithSideText value={numberOfPIRSensors}
                                    unit=""
                                    type="number"
                                    placeholder="Enter value"
                                    heading="Number of PIR sensors"
                                    disabled={true}
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                            </div>
                            <div className="calculated-main">
                                <div className="calculated-container">
                                    <CalculatedData heading="Annual electricity consumption without PIR sensor" unit="kWh" value={annualElectricityConsumptionWithoutPirSensor} />
                                </div>
                                <div className="calculated-container">
                                    <CalculatedData heading="Annual electricity consumption with PIR sensor installed" unit="kWh" value={annualElectricityConsumptionWithPirSensorInstalled} />
                                </div>
                                <div className="calculated-container">
                                    <CalculatedData heading="Annual Electricity savings with PIR sensors" unit="kWh" value={annualElectricitySavingsWithPirSensors} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="group-heading">ECONOMIC ANALYSIS</h2>
                        <div className="form-div">
                            <div className="form-input">
                                <InputWithSideText value={unitCostOfPirSensor}
                                    unit="£"
                                    type="number"
                                    placeholder="Enter value"
                                    heading="Unit cost of PIR sensor"
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                    onChange={(event) => { setUnitCostOfPirSensor(event.target.value) }} />
                                <InputWithSideText value={initialInvestmentForPir}
                                    unit="£"
                                    type="number"
                                    disabled={true}
                                    placeholder="Enter value"
                                    heading="Initial investment for PIR (CAPEX)"
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                />
                            </div>
                            <div className="calculated-main">
                                <div className="calculated-container">
                                    <CalculatedData heading="Annual operational cost savings" unit="£" value={annualOperationalCostSavings} />
                                    <CalculatedData heading="Net Present Value of operational energy cost savings (NPV)" unit="£" value={netPresentValueOfOperationalEnergyCostSaings} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="group-heading">OPERATIONAL EMISSIONS ANALYSIS</h2>
                        <div className="form-div">
                            <div className="form-input">
                                <InputWithSideText value={annualOperationalEmissionSavings}
                                    unit="kgCO2e"
                                    type="number"
                                    placeholder="Enter value"
                                    heading="Annual operational emission savings"
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                    onChange={(event) => { annualOperationalEmissionSavings(event.target.value) }} />

                                <InputWithSideText value={totalOperationalEmissionSavingsAcrossAbatementPeriod}
                                    unit="kgCO2e"
                                    type="number"
                                    placeholder="Enter value"
                                    heading="Total operational emission savings across abatement period"
                                    subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                />
                            </div>
                            <div className="calculated-main">
                                <div className="calculated-container">
                                    <CalculatedData heading="Total operational emission savings across abatement period" unit="tCO2e" value={totalOperationalEmissionSavingsAcrossAbatementPeriodTon} />
                                    <CalculatedData heading="Cost effectiveness considering operational emission savings only (i.e. without embodied emissions)" unit="tCO2e" value={costEffectivenessConsideringOperationalEmissionSavingsOnly} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="btn-div">
                        <Button value="Next" onClick={onSave} />
                    </div> */}
                </div >
            </div>
        </>

    );
};
export default PassiveInfraredSensor;
