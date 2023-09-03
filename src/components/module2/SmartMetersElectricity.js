import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateSmartMetersElectricity } from "../../actions/module2";
import { useNavigate } from "react-router-dom";

const SmartMetersElectricity = () => {
    const { baseline, economicParameters, smartMetersElectricity } = useSelector(state => state.module2);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [averageAnnualElectricityConsumption] = useState(baseline?.averageAnnualElectricityConsumption);
    const [averageElectricitySavingsIncentivisedUsingSmartMeter] = useState(smartMetersElectricity?.averageElectricitySavingsIncentivisedUsingSmartMeter);
    const [annualElectricitySavingsWithSmartMeters, setAnnualElectricitySavingsWithSmartMeters] = useState(smartMetersElectricity?.annualElectricitySavingsWithSmartMeters);
    const [initialInvestmentForElectricitySmartMeter] = useState(smartMetersElectricity?.initialInvestmentForElectricitySmartMeter);
    const [annualOperationalCostSavings, setAnnualOperationalCostSavings] = useState(smartMetersElectricity?.annualOperationalCostSavings);
    const [netPresentValueOfOperationalEnergyCostSavings, setNetPresentValueOfOperationalEnergyCostSavings] = useState(smartMetersElectricity?.netPresentValueOfOperationalEnergyCostSavings);
    const [annualOperationalEmissionSavings, setAnnualOperationalEmissionSavings] = useState(smartMetersElectricity?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriod, setTotalOperationalEmissionSavingsAcrossAbatementPeriod] = useState(smartMetersElectricity?.totalOperationalEmissionSavingsAcrossAbatementPeriod);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriodTon, setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon] = useState(smartMetersElectricity?.totalOperationalEmissionSavingsAcrossAbatementPeriod);
    const [costEffectivenessConsideringOperationalEmissionSavingsOnly, setCostEffectivenessConsideringOperationalEmissionSavingsOnly] = useState(smartMetersElectricity?.costEffectivenessConsideringOperationalEmissionSavingsOnly);
    useEffect(() => {
        setAnnualElectricitySavingsWithSmartMeters(averageAnnualElectricityConsumption * averageElectricitySavingsIncentivisedUsingSmartMeter / 100)
    }, [averageAnnualElectricityConsumption, averageElectricitySavingsIncentivisedUsingSmartMeter]);
    useEffect(() => {
        setAnnualOperationalCostSavings(annualElectricitySavingsWithSmartMeters * economicParameters.unitPriceOfElectricity)
    }, [annualElectricitySavingsWithSmartMeters]);
    useEffect(() => {
        setAnnualOperationalEmissionSavings(annualElectricitySavingsWithSmartMeters * baseline.emissionFactorGridElectricity)
    }, [annualElectricitySavingsWithSmartMeters]);
    useEffect(() => {
        setTotalOperationalEmissionSavingsAcrossAbatementPeriod(annualOperationalEmissionSavings * economicParameters.yearsOfAbatement)
    }, [annualOperationalEmissionSavings]);
    useEffect(() => {
        setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon(totalOperationalEmissionSavingsAcrossAbatementPeriod / 1000)
    }, [totalOperationalEmissionSavingsAcrossAbatementPeriod]);
    useEffect(() => {
        setNetPresentValueOfOperationalEnergyCostSavings(((1 - Math.pow(1 + (economicParameters?.discountRate / 100), -economicParameters?.yearsOfAbatement)) / (economicParameters?.discountRate / 100)) * annualOperationalCostSavings);
    }, [annualOperationalCostSavings]);
    useEffect(() => {
        setCostEffectivenessConsideringOperationalEmissionSavingsOnly((initialInvestmentForElectricitySmartMeter - netPresentValueOfOperationalEnergyCostSavings) / totalOperationalEmissionSavingsAcrossAbatementPeriodTon);
    }, [initialInvestmentForElectricitySmartMeter, netPresentValueOfOperationalEnergyCostSavings, totalOperationalEmissionSavingsAcrossAbatementPeriodTon])

    const onSave = () => {
        dispatch(updateSmartMetersElectricity({
            averageAnnualElectricityConsumption,
            averageElectricitySavingsIncentivisedUsingSmartMeter,
            annualElectricitySavingsWithSmartMeters,
            annualOperationalCostSavings,
            initialInvestmentForElectricitySmartMeter,
            netPresentValueOfOperationalEnergyCostSavings,
            annualOperationalEmissionSavings,
            totalOperationalEmissionSavingsAcrossAbatementPeriod,
            totalOperationalEmissionSavingsAcrossAbatementPeriodTon,
            costEffectivenessConsideringOperationalEmissionSavingsOnly,
            isComplete: true
        }));
        navigate("./../smart-meters-gas")
    }

    return (
        <>
            <h2 className="form-heading">Smart Meters - Electricity</h2>
            <h3 className="form-subheading">Non-domestic or industrial smart meters could be installed in your facility in consultation with your energy supplier.</h3>
            <div className="main">
                <div>
                    <h2 className="group-heading">GENERAL</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={averageAnnualElectricityConsumption}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                heading="Average annual electricity consumption"
                                subHeading="" />
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
                                subHeading="Smart meters provide visibility about energy usage and thus incentivise the savings. The % savings depends on existing measures of energy savings as well as the actions taken based on smart meter data. The default is based on empirical data."
                                disabled={true} />

                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Annual electricity savings with smart meters" unit="kWh" value={annualElectricitySavingsWithSmartMeters} />
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
                                subHeading=""
                                disabled={true}
                                toFixed={true} />
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
                                disabled={true}
                                toFixed={true}
                                placeholder="Enter value"
                                heading="Annual operational emission savings"
                                subHeading="" />
                            <InputWithSideText value={totalOperationalEmissionSavingsAcrossAbatementPeriod}
                                unit="kgCO2e"
                                type="number"
                                disabled={true}
                                toFixed={true}
                                placeholder="Enter value"
                                heading="Total operational emission savings across abatement period"
                                subHeading="" />
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
                        <CalculatedData heading="Cost effectiveness considering operational emission savings only (i.e. without embodied emissions)" unit="tCO2e" value={costEffectivenessConsideringOperationalEmissionSavingsOnly} />
                    </div>
                </div>
                <div className="btn-div">
                    <Button value="Next" onClick={onSave} />
                </div>
            </div >
        </>

    );
};
export default SmartMetersElectricity;
