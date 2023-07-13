import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateBaseline } from "../../actions/module2";
import { useNavigate } from "react-router-dom";

const SmartMetersGas = () => {
    const { solavPV, baseline } = useSelector(state => state.module2);
    const [averageAnnualGasConsumption, setAverageAnnualGasConsumption] = useState(baseline?.averageAnnualGasConsumption);
    const [averageGasSavingsIncentivisedUsingSmartMeter, setAverageGasSavingsIncentivisedUsingSmartMeter] = useState(solavPV?.averageGasSavingsIncentivisedUsingSmartMeter);
    const [initialInvestmentForGasSmartMeter, setInitialInvestmentForGasSmartMeter] = useState(solavPV?.initialInvestmentForGasSmartMeter);
    const [annualOperationalCostSavings, setAnnualOperationalCostSavings] = useState(solavPV?.annualOperationalCostSavings);
    const [netPresentValueOfOperationalEnergyCostSavings, setNetPresentValueOfOperationalEnergyCostSavings] = useState(solavPV?.netPresentValueOfOperationalEnergyCostSavings);
    const [annualOperationalEmissionSavings, setAnnualOperationalEmissionSavings] = useState(solavPV?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriod, setTotalOperationalEmissionSavingsAcrossAbatementPeriod] = useState(solavPV?.totalOperationalEmissionSavingsAcrossAbatementPeriod);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriodTon, setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon] = useState(solavPV?.totalOperationalEmissionSavingsAcrossAbatementPeriod);
    const [costEffectivenessConsideringOperationalEmissionSavingsOnly, setCostEffectivenessConsideringOperationalEmissionSavingsOnly] = useState(solavPV?.costEffectivenessConsideringOperationalEmissionSavingsOnly);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>
            <h2 className="form-heading">Smart meters - gas</h2>
            <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
            <div className="main">
                <div>
                    <h2 className="group-heading">GENERAL</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={averageAnnualGasConsumption}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Average annual gas consumption"
                                disabled={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                            <div className="calculated-main">
                                <div className="calculated-container">
                                    <CalculatedData heading="" unit="" value={""} />
                                    <CalculatedData heading="" unit="" value={""} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="group-heading">TECHNICAL ANALYSIS</h2>
                        <div className="form-div">
                            <div className="form-input">
                                <InputWithSideText value={averageGasSavingsIncentivisedUsingSmartMeter}
                                    unit="%"
                                    type="number"
                                    placeholder="Enter value"
                                    heading="Average gas savings incentivised using smart meter"
                                    disabled={true}
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                            </div>
                            <div className="calculated-main">
                                <div className="calculated-container">
                                    <CalculatedData heading="Annual gas consumption with smart meters" unit="kWh" value={""} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="group-heading">ECONOMIC ANALYSIS</h2>
                        <div className="form-div">
                            <div className="form-input">
                                <InputWithSideText value={initialInvestmentForGasSmartMeter}
                                    unit="£"
                                    type="number"
                                    placeholder="Enter value"
                                    heading="Initial investment for gas smart meter(CAPEX)"
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                    onChange={(event) => { setInitialInvestmentForGasSmartMeter(event.target.value) }} />
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
            </div>
        </>

    );
};
export default SmartMetersGas;
