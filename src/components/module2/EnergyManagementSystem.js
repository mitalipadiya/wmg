import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateEnergyManagementSystem } from "../../actions/module2";
import { useNavigate } from "react-router-dom";

const EnergyManagementSystem = () => {
    const { baseline, economicParameters, energyManagementSystem } = useSelector(state => state.module2);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [averageAnnualElectricityConsumption, setAverageAnnualElectricityConsumption] = useState(baseline?.averageAnnualElectricityConsumption);
    const [averageAnnualGasConsumption, setAverageAnnualGasConsumption] = useState(baseline?.averageAnnualGasConsumption);
    const [averageElectricitySavingsIncentivisedUsingBEMS, setAverageElectricitySavingsIncentivisedUsingBEMS] = useState(energyManagementSystem?.averageElectricitySavingsIncentivisedUsingBEMS);
    const [averageGasSavingsIncentivisedUsingBEMS, setAverageGasSavingsIncentivisedUsingBEMS] = useState(energyManagementSystem?.averageGasSavingsIncentivisedUsingBEMS);
    const [annualElectricitySavingsWithBEMS, setAnnualElectricitySavingsWithBEMS] = useState(energyManagementSystem?.annualElectricitySavingsWithBEMS);
    const [annualGasSavingsWithBEMS, setAnnualGasSavingsWithBEMS] = useState(energyManagementSystem?.annualGasSavingsWithBEMS);
    const [initialInvestmentForBEMS, setInitialInvestmentForBEMS] = useState(energyManagementSystem?.initialInvestmentForBEMS);
    const [annualOperationalElectricityCostSavings, setAnnualOperationalElectricityCostSavings] = useState(economicParameters?.annualOperationalElectricityCostSavings);
    const [annualOperationalGasCostSavings, setAnnualOperationalGasCostSavings] = useState(energyManagementSystem?.annualOperationalGasCostSavings);
    const [totalAnnualOperationalCostSavings, setTotalAnnualOperationalCostSavings] = useState(energyManagementSystem?.totalAnnualOperationalCostSavings);
    const [totalOperationalEmissionSavingsAbatementPeriod, setTotalOperationalEmissionSavingsAbatementPeriod] = useState(energyManagementSystem?.totalOperationalEmissionSavingsAbatementPeriod);
    const [netPresentValueOfOperationalEnergyCostSavings, setNetPresentValueOfOperationalEnergyCostSavings] = useState(energyManagementSystem?.netPresentValueOfOperationalEnergyCostSavings);
    const [gHGEmissionsSavingsForElectricityWithBEMS, setGHGEmissionsSavingsForElectricityWithBEMS] = useState(energyManagementSystem?.gHGEmissionsSavingsForElectricityWithBEMS);
    const [gHGEmissionsSavingsForGasWithBEMS, setGHGEmissionsSavingsForGasWithBEMS] = useState(energyManagementSystem?.gHGEmissionsSavingsForGasWithBEMS);
    const [annualOperationalEmissionSavings, setAnnualOperationalEmissionSavings] = useState(energyManagementSystem?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriodTon, setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon] = useState(energyManagementSystem?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon);
    const [costEffectivenessConsideringOperationalEmissionSavingsOnly, setCostEffectivenessConsideringOperationalEmissionSavingsOnly] = useState(energyManagementSystem?.costEffectivenessConsideringOperationalEmissionSavingsOnly);
    useEffect(() => {
        setAnnualElectricitySavingsWithBEMS(averageAnnualElectricityConsumption * averageElectricitySavingsIncentivisedUsingBEMS / 100);
    }, [averageAnnualElectricityConsumption, averageElectricitySavingsIncentivisedUsingBEMS])
    useEffect(() => {
        setAnnualGasSavingsWithBEMS(averageAnnualGasConsumption * averageGasSavingsIncentivisedUsingBEMS / 100);
    }, [averageAnnualGasConsumption, averageGasSavingsIncentivisedUsingBEMS])
    useEffect(() => {
        setAnnualOperationalElectricityCostSavings(annualElectricitySavingsWithBEMS * economicParameters.unitPriceOfElectricity);
    }, [annualElectricitySavingsWithBEMS])
    useEffect(() => {
        setAnnualOperationalGasCostSavings(annualGasSavingsWithBEMS * economicParameters.unitPriceOfGas);
        setGHGEmissionsSavingsForGasWithBEMS(annualGasSavingsWithBEMS * baseline.emissionFactorForGridGas);
    }, [annualGasSavingsWithBEMS])
    useEffect(() => {
        setTotalAnnualOperationalCostSavings(annualOperationalElectricityCostSavings + annualOperationalGasCostSavings);
    }, [annualOperationalElectricityCostSavings, annualOperationalGasCostSavings])
    useEffect(() => {
        setGHGEmissionsSavingsForElectricityWithBEMS(annualElectricitySavingsWithBEMS * baseline.emissionFactorGridElectricity);
    }, [annualElectricitySavingsWithBEMS])
    useEffect(() => {
        setAnnualOperationalEmissionSavings(gHGEmissionsSavingsForElectricityWithBEMS + gHGEmissionsSavingsForGasWithBEMS);
    }, [gHGEmissionsSavingsForElectricityWithBEMS, gHGEmissionsSavingsForGasWithBEMS])
    useEffect(() => {
        setTotalOperationalEmissionSavingsAbatementPeriod(annualOperationalEmissionSavings * economicParameters.yearsOfAbatement);
    }, [annualOperationalEmissionSavings])
    useEffect(() => {
        setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon(totalOperationalEmissionSavingsAbatementPeriod / 1000);
    }, [totalOperationalEmissionSavingsAbatementPeriod])
    useEffect(() => {
        setNetPresentValueOfOperationalEnergyCostSavings(((1 - Math.pow(1 + (economicParameters?.discountRate / 100), -economicParameters?.yearsOfAbatement)) / (economicParameters?.discountRate / 100)) * totalAnnualOperationalCostSavings);
    }, [totalAnnualOperationalCostSavings]);
    useEffect(() => {
        setCostEffectivenessConsideringOperationalEmissionSavingsOnly((initialInvestmentForBEMS - netPresentValueOfOperationalEnergyCostSavings) / totalOperationalEmissionSavingsAcrossAbatementPeriodTon);
    }, [initialInvestmentForBEMS, netPresentValueOfOperationalEnergyCostSavings, totalOperationalEmissionSavingsAcrossAbatementPeriodTon])

    const onSave = () => {
        dispatch(updateEnergyManagementSystem({
            averageAnnualElectricityConsumption,
            averageAnnualGasConsumption,
            averageElectricitySavingsIncentivisedUsingBEMS,
            averageGasSavingsIncentivisedUsingBEMS,
            annualElectricitySavingsWithBEMS,
            annualGasSavingsWithBEMS,
            initialInvestmentForBEMS,
            annualOperationalElectricityCostSavings,
            annualOperationalGasCostSavings,
            totalAnnualOperationalCostSavings,
            totalOperationalEmissionSavingsAbatementPeriod,
            netPresentValueOfOperationalEnergyCostSavings,
            gHGEmissionsSavingsForElectricityWithBEMS,
            gHGEmissionsSavingsForGasWithBEMS,
            annualOperationalEmissionSavings,
            totalOperationalEmissionSavingsAcrossAbatementPeriodTon,
            costEffectivenessConsideringOperationalEmissionSavingsOnly,
            isComplete: true
        }));
        navigate("./../solar-thermal")
    }

    return (
        <>
            <h2 className="form-heading">Energy management system</h2>
            <h3 className="form-subheading"></h3>
            <div className="main">
                <h2 className="group-heading">GENERAL</h2>
                <div className="form-div">
                    <div className="form-input">
                        <InputWithSideText value={baseline.averageAnnualElectricityConsumption}
                            unit="kWh"
                            type="number"
                            placeholder="Enter value"
                            heading="Average annual electricity consumption"
                            disabled={true}
                            subHeading="" />
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
                            <InputWithSideText value={averageElectricitySavingsIncentivisedUsingBEMS}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                heading="Average electricity savings incentivised using building energy management system (BEMS)"
                                subHeading="" />
                            <InputWithSideText value={averageGasSavingsIncentivisedUsingBEMS}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                heading="Average gas savings incentivised using building energy management system (BEMS)"
                                subHeading="" />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Annual electricity savings with BEMS" unit="kWh" value={annualElectricitySavingsWithBEMS} />
                            </div>
                            <div className="calculated-container">
                                <CalculatedData heading="Annual gas savings with BEMS" unit="kWh" value={annualGasSavingsWithBEMS} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">ECONOMIC ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={5000}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Initial investment for BEMS(CAPEX)"
                                subHeading=""
                                disabled={true} />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Annual operational electricity cost savings" unit="£" value={annualOperationalElectricityCostSavings} />
                                <CalculatedData heading="Annual operational gas cost savings" unit="£" value={annualOperationalGasCostSavings} />
                                <CalculatedData heading="Total annual operational cost savings" unit="£" value={totalAnnualOperationalCostSavings} />
                                <CalculatedData heading="Net Present Value of operational energy cost savings (NPV)" unit="£" value={netPresentValueOfOperationalEnergyCostSavings} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">OPERATIONAL EMISSIONS ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={gHGEmissionsSavingsForElectricityWithBEMS}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="GHG Emissions savings for electricity with BEMS"
                                disabled={true}
                                toFixed={true}
                                subHeading="" />
                            <InputWithSideText value={gHGEmissionsSavingsForGasWithBEMS}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="GHG Emissions savings for gas with BEMS"
                                subHeading=""
                                toFixed={true}
                                disabled={true} />
                            <InputWithSideText value={annualOperationalEmissionSavings}
                                unit="kgCO2e"
                                disabled={true}
                                toFixed={true}
                                type="number"
                                placeholder="Enter value"
                                heading="Annual operational emission savings"
                                subHeading="" />
                            <InputWithSideText value={totalOperationalEmissionSavingsAbatementPeriod}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="Total operational emission savings across abatement period"
                                subHeading=""
                                toFixed={true}
                                disabled={true} />
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
            </div>
        </>

    );
};
export default EnergyManagementSystem;
