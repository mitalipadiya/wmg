import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateBaseline, updateEconomicParameters } from "../../actions/module2";
import { useNavigate } from "react-router-dom";

const EnergyManagementSystem = () => {
    const { solavPV, baseline ,economicParameters} = useSelector(state => state.module2);

    const [averageAnnualElectricityConsumption,setAverageAnnualElectricityConsumption] = useState(baseline?.averageAnnualElectricityConsumption);
    const [averageAnnualGasConsumption, setAverageAnnualGasConsumption] = useState(baseline?.averageAnnualGasConsumption);
    const [averageElectricitySavingsIncentivisedUsingBEMS, setAverageElectricitySavingsIncentivisedUsingBEMS] = useState(solavPV?.averageElectricitySavingsIncentivisedUsingBEMS);
    const [averageGasSavingsIncentivisedUsingBEMS, setAverageGasSavingsIncentivisedUsingBEMS] = useState(solavPV?.averageGasSavingsIncentivisedUsingBEMS);
    const [annualElectricitySavingsWithBEMS, setAnnualElectricitySavingsWithBEMS] = useState(solavPV?.annualElectricitySavingsWithBEMS);
    const [annualGasSavingsWithBEMS, setAnnualGasSavingsWithBEMS] = useState(solavPV?.annualGasSavingsWithBEMS);
    const [initialInvestmentForBEMS, setInitialInvestmentForBEMS] = useState(solavPV?.initialInvestmentForBEMS);
    const [annualOperationalElectricityCostSavings, setAnnualOperationalElectricityCostSavings] = useState(economicParameters?.annualOperationalElectricityCostSavings);
    const [annualOperationalGasCostSavings, setAnnualOperationalGasCostSavings] = useState(solavPV?.annualOperationalGasCostSavings);
    const [totalAnnualOperationalCostSavings, setTotalAnnualOperationalCostSavings] = useState(solavPV?.totalAnnualOperationalCostSavings);
    const [totalOperationalEmissionSavingsAbatementPeriod, setTotalOperationalEmissionSavingsAbatementPeriod] = useState(solavPV?.totalOperationalEmissionSavingsAbatementPeriod);
    const [netPresentValueOfOperationalEnergyCostSavings, setNetPresentValueOfOperationalEnergyCostSavings] = useState(solavPV?.netPresentValueOfOperationalEnergyCostSavings);
    const [gHGEmissionsSavingsForElectricityWithBEMS, setGHGEmissionsSavingsForElectricityWithBEMS] = useState(solavPV?.gHGEmissionsSavingsForElectricityWithBEMS);
    const [gHGEmissionsSavingsForGasWithBEMS, setGHGEmissionsSavingsForGasWithBEMS] = useState(baseline?.gHGEmissionsSavingsForGasWithBEMS);
    const [annualOperationalEmissionSavings, setAnnualOperationalEmissionSavings] = useState(solavPV?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriodTon, setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon] = useState(solavPV?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon);
    const [costEffectivenessConsideringOperationalEmissionSavingsOnly, setCostEffectivenessConsideringOperationalEmissionSavingsOnly] = useState(solavPV?.costEffectivenessConsideringOperationalEmissionSavingsOnly);
    useEffect(() => {
        setAnnualElectricitySavingsWithBEMS(averageAnnualElectricityConsumption*averageElectricitySavingsIncentivisedUsingBEMS);
    }, [averageAnnualElectricityConsumption, averageElectricitySavingsIncentivisedUsingBEMS])
    useEffect(() => {
        setAnnualGasSavingsWithBEMS(averageAnnualGasConsumption*averageGasSavingsIncentivisedUsingBEMS);
    }, [averageAnnualGasConsumption, averageGasSavingsIncentivisedUsingBEMS])
    useEffect(() => {
        setAnnualOperationalElectricityCostSavings(annualElectricitySavingsWithBEMS*economicParameters.unitPriceOfElectricity);
    }, [annualElectricitySavingsWithBEMS])
    useEffect(() => {
        setAnnualOperationalGasCostSavings(annualGasSavingsWithBEMS*economicParameters.unitPriceOfGas);
        setGHGEmissionsSavingsForGasWithBEMS(annualGasSavingsWithBEMS*baseline.emissionFactorForGridGas);
    }, [annualGasSavingsWithBEMS])
    useEffect(() => {
        setTotalAnnualOperationalCostSavings(annualOperationalElectricityCostSavings+annualOperationalGasCostSavings);
    }, [annualOperationalElectricityCostSavings,annualOperationalGasCostSavings])
    useEffect(() => {
        setGHGEmissionsSavingsForElectricityWithBEMS(annualElectricitySavingsWithBEMS*baseline.emissionFactorGridElectricity);
    }, [annualElectricitySavingsWithBEMS])
    useEffect(() => {
        setAnnualOperationalEmissionSavings(gHGEmissionsSavingsForElectricityWithBEMS+gHGEmissionsSavingsForGasWithBEMS);
    }, [gHGEmissionsSavingsForElectricityWithBEMS,gHGEmissionsSavingsForGasWithBEMS])
    useEffect(() => {
        setTotalOperationalEmissionSavingsAbatementPeriod(annualOperationalEmissionSavings*economicParameters.yearsOfAbatement);
    }, [annualOperationalEmissionSavings])    
    useEffect(() => {
        setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon(totalOperationalEmissionSavingsAbatementPeriod/1000);
    }, [totalOperationalEmissionSavingsAbatementPeriod])    
    
    useEffect(() => {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${location}`).then(response => {
            return response.json()
        }).then(data => {
            if (data && data.length) {
                setLatitudeLongitude(data[0].lat + "," + data[0].lon);
            }
        })
    }, [location]);

    return (
        <>
            <h2 className="form-heading">Energy management system</h2>
            <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
            <div className="main">
                <div>
                    <h2 className="group-heading">GENERAL</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={baseline.averageAnnualElectricityConsumption}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Average annual electricity consumption"
                                disabled={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                            <InputWithSideText value={averageAnnualGasConsumption
                            }
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Average annual gas consumption"
                                disabled={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
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
                                    heading="Average electricity savings incentivised using building energy management system (BEMS)"
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                    onChange={(event) => { setAverageElectricitySavingsIncentivisedUsingBEMS(event.target.value) }} />
                                <InputWithSideText value={averageGasSavingsIncentivisedUsingBEMS}
                                    unit="%"
                                    type="number"
                                    placeholder="Enter value"
                                    heading="Average gas savings incentivised using building energy management system (BEMS)"
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                    onChange={(event) => { setAverageGasSavingsIncentivisedUsingBEMS(event.target.value) }} />
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
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
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
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"/>
                                <InputWithSideText value={gHGEmissionsSavingsForGasWithBEMS}
                                    unit="kgCO2e"
                                    type="number"
                                    placeholder="Enter value"
                                    heading="GHG Emissions savings for gas with BEMS"
                                    subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                    disabled={true} />
                                <InputWithSideText value={annualOperationalEmissionSavings}
                                    unit="kgCO2e"
                                    disabled={true}
                                    type="number"
                                    placeholder="Enter value"
                                    heading="Annual operational emission savings"
                                    subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                    // onChange={(event) => { setan(event.target.value) }}
                                     />
                                <InputWithSideText value={totalOperationalEmissionSavingsAbatementPeriod}
                                    unit="kgCO2e"
                                    type="number"
                                    placeholder="Enter value"
                                    heading="Total operational emission savings across abatement period"
                                    subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                    disabled={true} />
                            </div>
                            <div className="calculated-main">
                                <div className="calculated-container">
                                    <CalculatedData heading="Total operational emission savings across abatement period" unit="tCO2e" value={totalOperationalEmissionSavingsAbatementPeriod} />
                                    <CalculatedData heading="Cost effectiveness considering operational emission savings only (i.e. without embodied emissions)" unit="tCO2e" value={totalOperationalEmissionSavingsAcrossAbatementPeriodTon} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-div">
                        <Button value="Next"  />
                    </div>
                </div >
            </div>
        </>

    );
};
export default EnergyManagementSystem;
