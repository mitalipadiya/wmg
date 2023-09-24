import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSmartMetersGas } from "../../actions/module2";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";

const SmartMetersGas = () => {
    const { baseline, economicParameters, smartMetersGas } = useSelector(state => state.module2);
    const [averageAnnualGasConsumption] = useState(baseline?.averageAnnualGasConsumption);
    const [averageGasSavingsIncentivisedUsingSmartMeter] = useState(smartMetersGas?.averageGasSavingsIncentivisedUsingSmartMeter);
    const [annualGasConsumptionWithSmartMeters, setAnnualGasConsumptionWithSmartMeters] = useState(smartMetersGas?.annualGasConsumptionWithSmartMeters);
    const [initialInvestmentForGasSmartMeter] = useState(smartMetersGas?.initialInvestmentForGasSmartMeter);
    const [annualOperationalCostSavings, setAnnualOperationalCostSavings] = useState(smartMetersGas?.annualOperationalCostSavings);
    const [netPresentValueOfOperationalEnergyCostSavings, setNetPresentValueOfOperationalEnergyCostSavings] = useState(smartMetersGas?.netPresentValueOfOperationalEnergyCostSavings);
    const [annualOperationalEmissionSavings, setAnnualOperationalEmissionSavings] = useState(smartMetersGas?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriod, setTotalOperationalEmissionSavingsAcrossAbatementPeriod] = useState(smartMetersGas?.totalOperationalEmissionSavingsAcrossAbatementPeriod);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriodTon, setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon] = useState(smartMetersGas?.totalOperationalEmissionSavingsAcrossAbatementPeriod);
    const [costEffectivenessConsideringOperationalEmissionSavingsOnly, setCostEffectivenessConsideringOperationalEmissionSavingsOnly] = useState(smartMetersGas?.costEffectivenessConsideringOperationalEmissionSavingsOnly);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        setAnnualGasConsumptionWithSmartMeters(averageAnnualGasConsumption * (100 - averageGasSavingsIncentivisedUsingSmartMeter) / 100)
    }, [averageAnnualGasConsumption, averageGasSavingsIncentivisedUsingSmartMeter]);
    useEffect(() => {
        setAnnualOperationalCostSavings((averageAnnualGasConsumption - annualGasConsumptionWithSmartMeters) * economicParameters.unitPriceOfGas)
    }, [averageAnnualGasConsumption, annualGasConsumptionWithSmartMeters]);
    useEffect(() => {
        setAnnualOperationalEmissionSavings((averageAnnualGasConsumption - annualGasConsumptionWithSmartMeters) * baseline.emissionFactorForGridGas)
    }, [averageAnnualGasConsumption, annualGasConsumptionWithSmartMeters]);
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
        setCostEffectivenessConsideringOperationalEmissionSavingsOnly((initialInvestmentForGasSmartMeter - netPresentValueOfOperationalEnergyCostSavings) / totalOperationalEmissionSavingsAcrossAbatementPeriodTon);
    }, [initialInvestmentForGasSmartMeter, netPresentValueOfOperationalEnergyCostSavings, totalOperationalEmissionSavingsAcrossAbatementPeriodTon])

    const onSave = () => {
        dispatch(updateSmartMetersGas({
            averageAnnualGasConsumption,
            averageGasSavingsIncentivisedUsingSmartMeter,
            annualGasConsumptionWithSmartMeters,
            initialInvestmentForGasSmartMeter,
            annualOperationalCostSavings,
            netPresentValueOfOperationalEnergyCostSavings,
            annualOperationalEmissionSavings,
            totalOperationalEmissionSavingsAcrossAbatementPeriod,
            totalOperationalEmissionSavingsAcrossAbatementPeriodTon,
            costEffectivenessConsideringOperationalEmissionSavingsOnly,
            isComplete: true
        }));
        navigate("./../voltage-optimisation")
    }

    return (
        <>
            <div className="tooltip-heading">
                <h2 className="form-heading">Smart Meters - Gas</h2>
                <OverlayTrigger placement="right" overlay={<Tooltip className="mytooltip">Non-domestic or industrial smart meters could be installed in your facility in consultation with your energy supplier.</Tooltip>}>
                    <div className="heading-info">i</div>
                </OverlayTrigger>
            </div>
            {/* <h2 className="form-heading">Smart Meters - Gas</h2>
            <h3 className="form-subheading">Non-domestic or industrial smart meters could be installed in your facility in consultation with your energy supplier.</h3> */}
            <div className="main">

                <h2 className="group-heading">GENERAL</h2>
                <div className="form-div">
                    <div className="form-input">
                        <InputWithSideText value={averageAnnualGasConsumption}
                            unit="kWh"
                            type="number"
                            placeholder="Enter value"
                            heading="Average annual gas consumption"
                            disabled={true}
                            subHeading="" />
                    </div>
                    <div className="calculated-main">

                    </div>
                </div>
                <div>
                    <h2 className="group-heading">TECHNICAL ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={averageGasSavingsIncentivisedUsingSmartMeter}
                                unit="%"
                                type="number"
                                disabled={true}
                                placeholder="Enter value"
                                heading="Average gas savings incentivised using smart meter"
                                subHeading="" />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Annual gas consumption with smart meters" unit="kWh" value={annualGasConsumptionWithSmartMeters} />
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
                                subHeading=""
                                disabled={true} />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Annual operational cost savings" isStart={true} unit="£" value={annualOperationalCostSavings} />
                                <CalculatedData heading="Net Present Value of operational energy cost savings (NPV)" isStart={true} unit="£" value={netPresentValueOfOperationalEnergyCostSavings} />
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
                                toFixed={true}
                                heading="Annual operational emission savings"
                                subHeading="" />
                            <InputWithSideText value={totalOperationalEmissionSavingsAcrossAbatementPeriod}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                toFixed={true}
                                heading="Total operational emission savings across abatement period"
                                subHeading="" />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Total operational emission savings across abatement period" unit="tCO2e" value={totalOperationalEmissionSavingsAcrossAbatementPeriodTon} decimalCount={1} />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="calculated-main calculated-last">
                    <div className="calculated-container">
                        <CalculatedData heading="Cost effectiveness considering operational emission savings only (i.e. without embodied emissions)" unit="tCO2e" value={costEffectivenessConsideringOperationalEmissionSavingsOnly} decimalCount={1} />
                    </div>
                </div>
                <div className="btn-div">
                    <Button value="Next" onClick={onSave} />
                </div>

            </div>
        </>

    );
};
export default SmartMetersGas;
