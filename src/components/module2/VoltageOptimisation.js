import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateVoltageOptimisation } from "../../actions/module2";
import { useNavigate } from "react-router-dom";

const Wind = () => {
    const { baseline, economicParameters, voltageOptimisation } = useSelector(state => state.module2);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [averageAnnualElectricityConsumption, setAverageAnnualElectricityConsumption] = useState(baseline?.averageAnnualElectricityConsumption);
    const [averageElectricitySavingsUsingVoltageOptimisation, setAverageElectricitySavingsUsingVoltageOptimisation] = useState(voltageOptimisation?.averageElectricitySavingsUsingVoltageOptimisation);
    const [annualElectricitySavingsWithVoltageOptimisation, setAnnualElectricitySavingsWithVoltageOptimisation] = useState(voltageOptimisation?.annualElectricitySavingsWithVoltageOptimisation);
    const [annualOperationalCostSavings, setAnnualOperationalCostSavings] = useState(voltageOptimisation?.annualOperationalCostSavings);
    const [initialInvestmentForVoltageOptimisation, setInitialInvestmentForVoltageOptimisation] = useState(voltageOptimisation?.initialInvestmentForVoltageOptimisation);
    const [netPresentValueOfOperationalEnergyCostSavings, setNetPresentValueOfOperationalEnergyCostSavings] = useState(voltageOptimisation?.netPresentValueOfOperationalEnergyCostSavings);
    const [annualOperationalEmissionSavings, setAnualOperationalEmissionSavings] = useState(voltageOptimisation?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriod, setTotalOperationalEmissionSavingsAcrossAbatementPeriod] = useState(voltageOptimisation?.totalOperationalEmissionSavingsAcrossAbatementPeriod);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriodTon, setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon] = useState(voltageOptimisation?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon);
    const [costEffectivenessConsideringOperationalEmissionSavingsOnly, setCostEffectivenessConsideringOperationalEmissionSavingsOnly] = useState(voltageOptimisation?.costEffectivenessConsideringOperationalEmissionSavingsOnly);
    useEffect(() => {
        setAnnualElectricitySavingsWithVoltageOptimisation(averageAnnualElectricityConsumption * averageElectricitySavingsUsingVoltageOptimisation / 100)
    }, [averageAnnualElectricityConsumption, averageElectricitySavingsUsingVoltageOptimisation]);
    useEffect(() => {
        setAnnualOperationalCostSavings(annualElectricitySavingsWithVoltageOptimisation * economicParameters.unitPriceOfElectricity)
    }, [annualElectricitySavingsWithVoltageOptimisation]);
    useEffect(() => {
        setAnualOperationalEmissionSavings(annualElectricitySavingsWithVoltageOptimisation * baseline.emissionFactorGridElectricity)
    }, [annualElectricitySavingsWithVoltageOptimisation]);
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
        setCostEffectivenessConsideringOperationalEmissionSavingsOnly((initialInvestmentForVoltageOptimisation - netPresentValueOfOperationalEnergyCostSavings) / totalOperationalEmissionSavingsAcrossAbatementPeriodTon);
    }, [initialInvestmentForVoltageOptimisation, netPresentValueOfOperationalEnergyCostSavings, totalOperationalEmissionSavingsAcrossAbatementPeriodTon]);

    const onSave = () => {
        dispatch(updateVoltageOptimisation({
            averageAnnualElectricityConsumption,
            averageElectricitySavingsUsingVoltageOptimisation,
            annualElectricitySavingsWithVoltageOptimisation,
            annualOperationalCostSavings,
            initialInvestmentForVoltageOptimisation,
            netPresentValueOfOperationalEnergyCostSavings,
            annualOperationalEmissionSavings,
            totalOperationalEmissionSavingsAcrossAbatementPeriod,
            totalOperationalEmissionSavingsAcrossAbatementPeriodTon,
            costEffectivenessConsideringOperationalEmissionSavingsOnly,
            isComplete: true
        }));
        navigate("./../energy-management-system")
    }

    return (
        <>
            <h2 className="form-heading">Voltage optimisation</h2>
            <h3 className="form-subheading">The principle of selecting the most appropriate operating voltage for the equipment is known as voltage optimisation (VO).</h3>
            <div className="main">
                <h2 className="group-heading">GENERAL</h2>
                <div className="form-div">
                    <div className="form-input">
                        <InputWithSideText value={averageAnnualElectricityConsumption}
                            unit="kWh"
                            type="number"
                            placeholder="Enter value"
                            heading="Average annual electricity consumption"
                            subHeading=""
                            onChange={(event) => { setAverageAnnualElectricityConsumption(event.target.value) }} />
                    </div>
                    <div className="calculated-main">

                    </div>
                </div>
                <div>
                    <h2 className="group-heading">TECHNICAL ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={averageElectricitySavingsUsingVoltageOptimisation}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="Average electricity savings using voltage optimisation"
                                subHeading=""
                                onChange={(event) => { setAverageElectricitySavingsUsingVoltageOptimisation(event.target.value) }} />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Annual electricity savings with voltage optimisation" unit="kWh" value={annualElectricitySavingsWithVoltageOptimisation} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">ECONOMIC ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={initialInvestmentForVoltageOptimisation}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Initial investment for voltage optimisation (CAPEX)"
                                subHeading=""
                                onChange={(event) => { setInitialInvestmentForVoltageOptimisation(event.target.value) }} />
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
                                subHeading=""
                                onChange={(event) => { setAnualOperationalEmissionSavings(event.target.value) }} />
                            <InputWithSideText value={totalOperationalEmissionSavingsAcrossAbatementPeriod}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="Total operational emission savings across abatement period"
                                subHeading=""
                                onChange={(event) => { setTotalOperationalEmissionSavingsAcrossAbatementPeriod(event.target.value) }} />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Total operational emission savings across abatement period" unit="tCO2e" value={totalOperationalEmissionSavingsAcrossAbatementPeriodTon} decimalCount={1}/>

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
export default Wind;
