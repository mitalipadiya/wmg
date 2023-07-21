import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateBaseline } from "../../actions/module2";
import { useNavigate } from "react-router-dom";

const Led = () => {
    const { solavPV, baseline, economicParameters, led } = useSelector(state => state.module2);

    const [currentTypeOfLighting, setCurrentTypeOfLighting] = useState(led?.currentTypeOfLighting);
    const [currentLightingPowerRating, setCurrentLightingPowerRating] = useState(led?.currentLightingPowerRating);
    const [numberOfUnits, setNumberOfUnits] = useState(led?.numberOfUnits);
    const [dailyUsage, setDailyUsage] = useState(led?.dailyUsage);
    const [numberOfOperationalDaysInaYear, setNumberOfOperationalDaysInaYear] = useState(led?.numberOfOperationalDaysInaYear);
    const [annualUsage, setAnnualUsage] = useState(led?.annualUsage);
    const [lEDPowerRating, setLEDPowerRating] = useState(led?.lEDPowerRating);
    const [unitCostForLED, setUnitCostForLED] = useState(led?.unitCostForLED);
    const [initialInvestmentForLEDs, setInitialInvestmentForLEDs] = useState(led?.initialInvestmentForLEDs);
    const [costofElectricityWithCurrentLighting, setCostofElectricityWithCurrentLighting]=useState(led?.costofElectricityWithCurrentLighting);
    const [costOfElectricityWithLEDs, setCostOfElectricityWithLEDs] = useState(led?.costOfElectricityWithLEDs);
    const [annualOperationalEmissionSavings, setAnnualOperationalEmissionSavings] = useState(led?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriod, setTotalOperationalEmissionSavingsAcrossAbatementPeriod] = useState(led?.totalOperationalEmissionSavingsAcrossAbatementPeriod);
    const [annualElectricityConsumptionWithCurrentLighting, setAnnualElectricityConsumptionWithCurrentLighting] = useState(led?.annualElectricityConsumptionWithCurrentLighting);
    const [annualElectricityConsumptionWithLEDs, setAnnualElectricityConsumptionWithLEDs] = useState(led?.annualElectricityConsumptionWithLEDs);
    const [annualElectricitySavingsWithLEDs, setAnnualElectricitySavingsWithLEDs] = useState(led?.annualElectricitySavingsWithLEDs);
    const [annualOperationalCostSavings, setAnnualOperationalCostSavings] = useState(led?.annualOperationalCostSavings);
    const [netPresentValueOfOperationalEnergyCostSavings, setNetPresentValueOfOperationalEnergyCostSavings] = useState(led?.netPresentValueOfOperationalEnergyCostSavings);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriodTon, setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon] = useState(led?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon);
    const [costEffectivenessConsideringOperationalEmissionSavingsOnly, setCostEffectivenessConsideringOperationalEmissionSavingsOnly] = useState(led?.costEffectivenessConsideringOperationalEmissionSavingsOnly);


    useEffect(() => {
        setAnnualUsage(dailyUsage * numberOfOperationalDaysInaYear);
    }, [dailyUsage, numberOfOperationalDaysInaYear])
    useEffect(() => {
        setAnnualElectricityConsumptionWithCurrentLighting(numberOfUnits * currentLightingPowerRating * annualUsage / 1000);
    }, [numberOfUnits, currentLightingPowerRating, annualUsage])
    useEffect(() => {
        setAnnualElectricityConsumptionWithLEDs(lEDPowerRating * numberOfUnits * annualUsage / 1000);
    }, [lEDPowerRating, numberOfUnits, annualUsage])
    useEffect(() => {
        setAnnualElectricitySavingsWithLEDs(annualElectricityConsumptionWithCurrentLighting - annualElectricityConsumptionWithLEDs);
    }, [annualElectricityConsumptionWithCurrentLighting, annualElectricityConsumptionWithLEDs])
    useEffect(() => {
        setInitialInvestmentForLEDs(unitCostForLED*numberOfUnits);
    }, [unitCostForLED,numberOfUnits])
    useEffect(() => {
        setCostofElectricityWithCurrentLighting(annualElectricityConsumptionWithCurrentLighting*economicParameters.unitPriceOfElectricity);
    }, [annualElectricityConsumptionWithCurrentLighting])
    useEffect(() => {
        setCostOfElectricityWithLEDs(annualElectricityConsumptionWithLEDs*economicParameters.unitPriceOfElectricity);
    }, [annualElectricityConsumptionWithLEDs])
    useEffect(() => {
        setAnnualOperationalCostSavings(annualElectricitySavingsWithLEDs*economicParameters.unitPriceOfElectricity);
    }, [annualElectricitySavingsWithLEDs])
    useEffect(() => {
        setAnnualOperationalEmissionSavings(annualElectricitySavingsWithLEDs*baseline.emissionFactorGridElectricity);
    }, [annualElectricitySavingsWithLEDs])
        useEffect(() => {
            setTotalOperationalEmissionSavingsAcrossAbatementPeriod(annualOperationalEmissionSavings*economicParameters.yearsOfAbatement);
        }, [annualOperationalEmissionSavings])
        useEffect(() => {
            setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon(totalOperationalEmissionSavingsAcrossAbatementPeriod/1000);
        }, [totalOperationalEmissionSavingsAcrossAbatementPeriodTon])
        // useEffect(() => {
        //     setCostEffectivenessConsideringOperationalEmissionSavingsOnly(());
        // }, [totalOperationalEmissionSavingsAcrossAbatementPeriodTon])
    

    return (
        <>
            <h2 className="form-heading">LED</h2>
            <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
            <div className="main">
                <div>
                    <h2 className="group-heading">GENERAL</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={currentTypeOfLighting}
                                unit=""
                                type="number"
                                placeholder="Enter value"
                                heading="Enter current type of lighting"
                                onChange={(event)=>{setCurrentTypeOfLighting(event.target.value)}}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                            <InputWithSideText value={currentLightingPowerRating}
                                unit="W"
                                type="number"
                                placeholder="Enter value"
                                heading="Enter current lighting power rating"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setCurrentLightingPowerRating(event.target.value) }} />
                            <InputWithSideText value={numberOfUnits}
                                unit=""
                                type="text"
                                placeholder="Select"
                                heading="Number of units"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                onChange={(event) => { setNumberOfUnits(event.target.value) }} />
                        </div>
                        <div className="calculated-main">

                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">TECHNICAL ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={dailyUsage}
                                unit="h"
                                type="number"
                                placeholder="Enter value"
                                heading="Daily usage"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setDailyUsage(event.target.value) }} />
                            <InputWithSideText value={numberOfOperationalDaysInaYear}
                                unit=""
                                type="number"
                                placeholder="Enter value"
                                heading="Number of operational days in a year"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setNumberOfOperationalDaysInaYear(event.target.value) }} />
                            <InputWithSideText value={annualUsage}
                                unit="h"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual usage"
                                disabled={true}
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                            />
                            <InputWithSideText value={lEDPowerRating}
                                unit="W"
                                type="number"
                                placeholder="Enter value"
                                heading="LED power rating"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                onChange={(event) => { setLEDPowerRating(event.target.value) }} />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Annual electricity consumption with current lighting" unit="kWh" value={annualElectricityConsumptionWithCurrentLighting} />
                                <CalculatedData heading="Annual electricity consumption with LEDs" unit="kWh" value={annualElectricityConsumptionWithLEDs} />
                                <CalculatedData heading="Annual electricity savings with LEDs" unit="kWh" value={annualElectricitySavingsWithLEDs} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">ECONOMIC ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={unitCostForLED}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Unit cost for LED"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setUnitCostForLED(event.target.value) }} />
                            <InputWithSideText value={initialInvestmentForLEDs}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Initial investment for LEDs (CAPEX)"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setInitialInvestmentForLEDs(event.target.value) }} />
                            <InputWithSideText value={costofElectricityWithCurrentLighting}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Cost of electricity with current lighting"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"/>

                            <InputWithSideText value={costOfElectricityWithLEDs}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Cost of electricity with LEDs"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
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
                            <InputWithSideText value={annualOperationalEmissionSavings}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                heading="Annual operational emission savings"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"/>
                            <InputWithSideText value={totalOperationalEmissionSavingsAcrossAbatementPeriod}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="Total operational emission savings across abatement period"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"/>
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Total operational emission savings across abatement period" unit="tCO2e" value={totalOperationalEmissionSavingsAcrossAbatementPeriodTon} />
                                <CalculatedData heading="Cost effectiveness considering operational emission savings only (i.e. without embodied emissions)" unit="tCO2e" value={costEffectivenessConsideringOperationalEmissionSavingsOnly} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-div">
                    <Button value="Next" />
                </div>
            </div >
        </>

    );
};
export default Led;
