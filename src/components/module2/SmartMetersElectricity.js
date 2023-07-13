import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateBaseline } from "../../actions/module2";
import { useNavigate } from "react-router-dom";

const SmartMetersElectricity = () => {
    const { solavPV, baseline } = useSelector(state => state.module2);
    const [averageAnnualElectricityConsumption, setAverageAnnualElectricityConsumption] = useState(baseline?.averageAnnualElectricityConsumption);
    const [currentLightingPowerRating, setcurrentLightingPowerRating] = useState(solavPV?.currentLightingPowerRating);
    const [averageElectricitySavingsIncentivisedUsingSmartMeter, setAverageElectricitySavingsIncentivisedUsingSmartMeter] = useState(solavPV?.averageElectricitySavingsIncentivisedUsingSmartMeter);
    const [initialInvestmentForElectricitySmartMeter, setInitialInvestmentForElectricitySmartMeter] = useState(solavPV?.initialInvestmentForElectricitySmartMeter);
    const [annualOperationalCostSavings, setAnnualOperationalCostSavings] = useState(solavPV?.annualOperationalCostSavings);
    const [netPresentValueOfOperationalEnergyCostSavings, setNetPresentValueOfOperationalEnergyCostSavings] = useState(solavPV?.netPresentValueOfOperationalEnergyCostSavings);
    const [annualOperationalEmissionSavings, setAnnualOperationalEmissionSavings] = useState(solavPV?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriod, setTotalOperationalEmissionSavingsAcrossAbatementPeriod] = useState(solavPV?.totalOperationalEmissionSavingsAcrossAbatementPeriod);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriodTon, setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon] = useState(solavPV?.totalOperationalEmissionSavingsAcrossAbatementPeriod);
    const [costEffectivenessConsideringOperationalEmissionSavingsOnly, setCostEffectivenessConsideringOperationalEmissionSavingsOnly] = useState(solavPV?.costEffectivenessConsideringOperationalEmissionSavingsOnly);

    return (
        <>
            <h2 className="form-heading">Smart meters - electricity</h2>
            <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
            <div className="main">
                <div>
                    <h2 className="group-heading">GENERAL</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={averageAnnualElectricityConsumption}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Average annual electricity consumption"
                                disabled={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                            <InputWithSideText value={currentLightingPowerRating}
                                unit="W"
                                type="number"
                                placeholder="Enter value"
                                heading="Enter current lighting power rating"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={""} />
                        </div>
                        <div className="calculated-main">
                            
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">TECHNICAL ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={averageElectricitySavingsIncentivisedUsingSmartMeter}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="Average electricity savings incentivised using smart meter"
                                disabled={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Annual electricity savings with smart meters" unit="kWh" value={""} />
                                <CalculatedData heading="" unit="" value={""} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">ECONOMIC ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={initialInvestmentForElectricitySmartMeter}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Initial investment for electricity smart meter(CAPEX)"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setInitialInvestmentForElectricitySmartMeter(event.target.value) }} />
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
                    <Button value="Next" onClick={""} />
                </div>
            </div >
        </>

    );
};
export default SmartMetersElectricity;
