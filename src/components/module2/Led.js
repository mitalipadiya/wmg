import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateBaseline } from "../../actions/module2";
import { useNavigate } from "react-router-dom";

const LED = () => {
    const { solavPV, baseline } = useSelector(state => state.module2);

    const [currentTypeOfLighting, setCurrentTypeOfLighting] = useState(baseline?.currentTypeOfLighting);
    const [currentLightingPowerRating, setCurrentLightingPowerRating] = useState(solavPV?.currentLightingPowerRating);
    const [numberOfUnits, setNumberOfUnits] = useState(solavPV?.numberOfUnits);
    const [dailyUsage, setDailyUsage] = useState(solavPV?.dailyUsage);
    const [numberOfOperationalDaysInaYear, setNumberOfOperationalDaysInaYear] = useState(solavPV?.numberOfOperationalDaysInaYear);
    const [annualUsage, setAnnualUsage] = useState(solavPV?.annualUsage);
    const [lEDPowerRating, setLEDPowerRating] = useState(solavPV?.lEDPowerRating);
    const [unitCostForLED, setUnitCostForLED] = useState(solavPV?.unitCostForLED);
    const [initialInvestmentForLEDs, setInitialInvestmentForLEDs] = useState(solavPV?.initialInvestmentForLEDs);
    const [costOfElectricityWithLEDs, setCostOfElectricityWithLEDs] = useState(solavPV?.costOfElectricityWithLEDs);
    const [annualOperationalEmissionSavings, setAnnualOperationalEmissionSavings] = useState(solavPV?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriod, setTotalOperationalEmissionSavingsAcrossAbatementPeriod] = useState(solavPV?.totalOperationalEmissionSavingsAcrossAbatementPeriod);
    const [annualElectricityConsumptionWithCurrentLighting, setAnnualElectricityConsumptionWithCurrentLighting] = useState(solavPV?.annualElectricityConsumptionWithCurrentLighting);
    const [annualElectricityConsumptionWithLEDs, setAnnualElectricityConsumptionWithLEDs] = useState(solavPV?.annualElectricityConsumptionWithLEDs);
    const [annualElectricitySavingsWithLEDs, setAnnualElectricitySavingsWithLEDs] = useState(solavPV?.annualElectricitySavingsWithLEDs);
    const [annualOperationalCostSavings, setAnnualOperationalCostSavings] = useState(solavPV?.annualOperationalCostSavings);
    const [netPresentValueOfOperationalEnergyCostSavings, setNetPresentValueOfOperationalEnergyCostSavings] = useState(solavPV?.netPresentValueOfOperationalEnergyCostSavings);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriodTon, setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon] = useState(solavPV?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon);
    const [costEffectivenessConsideringOperationalEmissionSavingsOnly, setCostEffectivenessConsideringOperationalEmissionSavingsOnly] = useState(solavPV?.costEffectivenessConsideringOperationalEmissionSavingsOnly);

    const [areaOfPVSystem, setAreaOfPVSystem] = useState(solavPV?.areaOfPVSystem);



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
                                disabled={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                            <InputWithSideText value={currentLightingPowerRating}
                                unit="W"
                                type="number"
                                placeholder="Enter value"
                                heading="Enter current lighting power rating"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum" />
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
                                disabled={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
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
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                onChange={(event) => {setAnnualUsage(event.target.value) }} />
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
                            <InputWithSideText value={costOfElectricityWithLEDs}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Cost of electricity with LEDs"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setCostOfElectricityWithLEDs(event.target.value) }} />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Annual operational cost savings" unit="£" value={annualOperationalCostSavings} />
                                <CalculatedData heading="Net Present Value of operational energy cost savings (NPV)" unit="£" value={ netPresentValueOfOperationalEnergyCostSavings} />
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
                                onChange={(event) => { setAnnualOperationalEmissionSavings(event.target.value) }} />
                            <InputWithSideText value={totalOperationalEmissionSavingsAcrossAbatementPeriod}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="Total operational emission savings across abatement period"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setTotalOperationalEmissionSavingsAcrossAbatementPeriod(event.target.value) }} />
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
export default LED;
