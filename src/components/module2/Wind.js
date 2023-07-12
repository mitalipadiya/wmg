import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateBaseline } from "../../actions/module2";
import { useNavigate } from "react-router-dom";
import { event } from "jquery";

const Wind = () => {
    const { solavPV, baseline, economicParameters } = useSelector(state => state.module2);

    const [averageAnnualElectricityRequirements, setAverageAnnualElectricityRequirements] = useState(baseline?.averageAnnualElectricityConsumption);
    const [percentAnnualElectricityFromWind, setPercentAnnualElectricityFromWind] = useState(solavPV?.percentAnnualElectricityFromWind);
    const [location, setLocation] = useState(solavPV?.location);
    const [latitudeLongitude, setLatitudeLongitude] = useState(solavPV?.latitudeLongitude);
    const [height, setHeight] = useState(solavPV?.height);
    const [turbineModel, setTurbineModel] = useState(solavPV?.turbineModel);
    const [averageAnnualWindSpeed, setAverageAnnualWindSpeed] = useState(solavPV?.averageAnnualWindSpeed);
    const [annualGenerationWindSystem, setAnnualGenerationWindSystem] = useState(solavPV?.annualGenerationWindSystem);
    const [inverterEfficiency, setInverterEfficiency] = useState(solavPV?.inverterEfficiency);
    const [sizeOfWindSystem, setSizeOfWindSystem] = useState(solavPV?.sizeOfWindSystem);
    const [electricityUsedFromWindSystemInsteadGrid, setElectricityUsedFromWindSystemInsteadGrid] = useState(solavPV?.electricityUsedFromWindSystemInsteadGrid);
    const [unitInstallationCost, setUnitInstallationCost] = useState(solavPV?.unitInstallationCost);
    const [initialInvestmentWindSystem, setInitialInvestmentWindSystem] = useState(solavPV?.initialInvestmentWindSystem);
    const [annualOperationalCost, setAnnualOperationalCost] = useState(solavPV?.annualOperationalCost);
    const [netPresentValueOperationalEnergyCostSavings, setNetPresentValueOperationalEnergyCostSavings] = useState(solavPV?.netPresentValueOperationalEnergyCostSavings);
    const [annualOperationalEmissionSavings, setAnnualOperationalEmissionSavings] = useState(solavPV?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAbatementPeriod, setTotalOperationalEmissionSavingsAbatementPeriod] = useState(solavPV?.totalOperationalEmissionSavingsAbatementPeriod);
    const [totalOperationalEmissionSavingsAbatementPeriodTon, setTotalOperationalEmissionSavingsAbatementPeriodTon] = useState(solavPV?.totalOperationalEmissionSavingsAbatementPeriodTon);
    const [costEffectivenessConsideringOperationalEmissionSavings, setCostEffectivenessConsideringOperationalEmissionSavings] = useState(solavPV?.costEffectivenessConsideringOperationalEmissionSavings);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSave = () => {
        // dispatch(updateBaseline({
        //     averageAnnualElectricityConsumption: averageAnnualElectricityConsumption,
        //     averageAnnualGasConsumption: averageAnnualGasConsumption,
        //     emissionFactorGridElectricity: emissionFactorGridElectricity,
        //     emissionFactorForGridGas: emissionFactorForGridGas
        // }));
        navigate("./../economic-parameters")

    }
    useEffect(() => {
        setSizeOfWindSystem((averageAnnualElectricityRequirements * (percentAnnualElectricityFromWind / 100)) / (annualGenerationWindSystem * (inverterEfficiency / 100)));
    }, [averageAnnualElectricityRequirements, percentAnnualElectricityFromWind, annualGenerationWindSystem, inverterEfficiency]);
    useEffect(() => {
        setElectricityUsedFromWindSystemInsteadGrid(averageAnnualElectricityRequirements * (percentAnnualElectricityFromWind / 100));
    }, [averageAnnualElectricityRequirements, percentAnnualElectricityFromWind]);
    useEffect(() => {
        setInitialInvestmentWindSystem(unitInstallationCost * sizeOfWindSystem);
    }, [unitInstallationCost, sizeOfWindSystem]);
    useEffect(() => {
        setAnnualOperationalCost(electricityUsedFromWindSystemInsteadGrid * economicParameters?.unitPriceOfElectricity);
    }, [electricityUsedFromWindSystemInsteadGrid]);
    useEffect(() => {
        setNetPresentValueOperationalEnergyCostSavings(((1 - (Math.pow((1 + (economicParameters.discountRate / 100)), -economicParameters.yearsOfAbatement))) / (economicParameters.discountRate / 100)) * annualOperationalCost);
    }, [annualOperationalCost]);
    useEffect(() => {
        setAnnualOperationalEmissionSavings(electricityUsedFromWindSystemInsteadGrid * baseline.emissionFactorGridElectricity);
    }, [electricityUsedFromWindSystemInsteadGrid]);
    useEffect(() => {
        setTotalOperationalEmissionSavingsAbatementPeriod(annualOperationalEmissionSavings * economicParameters.yearsOfAbatement);
    }, [annualOperationalEmissionSavings]);
    useEffect(()=>{
        setTotalOperationalEmissionSavingsAbatementPeriodTon(totalOperationalEmissionSavingsAbatementPeriod / 1000);
    },[totalOperationalEmissionSavingsAbatementPeriod]);
    useEffect(()=>{
        setCostEffectivenessConsideringOperationalEmissionSavings((initialInvestmentWindSystem - netPresentValueOperationalEnergyCostSavings)/totalOperationalEmissionSavingsAbatementPeriodTon);
    },[initialInvestmentWindSystem, netPresentValueOperationalEnergyCostSavings, totalOperationalEmissionSavingsAbatementPeriodTon]);

    return (
        <>
            <h2 className="form-heading">Wind</h2>
            <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
            <div className="main">
                <div>
                    <h2 className="group-heading">GENERAL</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={averageAnnualElectricityRequirements}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Average annual electricity requirements"
                                disabled={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                            <InputWithSideText value={percentAnnualElectricityFromWind}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="What % of annual electricity you want to get from wind?"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => setPercentAnnualElectricityFromWind(event.target.value)} />
                            <InputWithSideText value={location}
                                unit=""
                                type="text"
                                placeholder="Select"
                                heading="Location"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis.Inventor"
                                onChange={(event) => { setLocation(event.target.value) }} />
                            <InputWithSideText value={latitudeLongitude}
                                unit=""
                                type="text"
                                placeholder="Select location to view lattitude, longitude"
                                heading="Lattitude, longitude"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                onChange={(event) => { setLatitudeLongitude(event.target.value) }} />
                        </div>
                        <div className="calculated-main">
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">TECHNICAL ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={height}
                                unit="m"
                                type="number"
                                placeholder="Enter value"
                                heading="Height"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setHeight(event.target.value) }} />
                            <InputWithSideText value={turbineModel}
                                unit=""
                                type="text"
                                placeholder="Enter value"
                                heading="Turbine model"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setTurbineModel(event.target.value) }} />
                            <InputWithSideText value={averageAnnualWindSpeed}
                                unit="m/s"
                                type="number"
                                placeholder="Enter value"
                                heading="Average annual wind speed"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                onChange={(event) => { setAverageAnnualWindSpeed(event.target.value) }} />
                            <InputWithSideText value={annualGenerationWindSystem}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual generation per 1kW wind system"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                onChange={(event) => { setAnnualGenerationWindSystem(event.target.value) }} />
                            <InputWithSideText value={inverterEfficiency}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="Inverter efficiency"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                onChange={(event) => { setInverterEfficiency(event.target.value) }} />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Size of wind system" unit="kW" value={sizeOfWindSystem} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">ECONOMIC ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={electricityUsedFromWindSystemInsteadGrid}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Electricity used from wind system instead of grid"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setElectricityUsedFromWindSystemInsteadGrid(event.target.value) }} />
                            <InputWithSideText value={unitInstallationCost}
                                unit="£/kW"
                                type="number"
                                placeholder="Enter value"
                                heading="Unit installation cost"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setUnitInstallationCost(event.target.value) }} />
                            <InputWithSideText value={initialInvestmentWindSystem}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Initial investment for Wind system (CAPEX)"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setInitialInvestmentWindSystem(event.target.value) }} />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Annual operational cost savings" unit="£" value={annualOperationalCost} />
                                <CalculatedData heading="Net Present Value of operational energy cost savings (NPV)" unit="£" value={netPresentValueOperationalEnergyCostSavings} />
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
                            <InputWithSideText value={totalOperationalEmissionSavingsAbatementPeriod}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="Total operational emission savings across abatement period"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setTotalOperationalEmissionSavingsAbatementPeriod(event.target.value) }} />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Total operational emission savings across abatement period" unit="tCO2e" value={totalOperationalEmissionSavingsAbatementPeriodTon} />
                                <CalculatedData heading="Cost effectiveness considering operational emission savings only (i.e. without embodied emissions)" unit="tCO2e" value={costEffectivenessConsideringOperationalEmissionSavings} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-div">
                    <Button value="Next" onClick={onSave} />
                </div>
            </div >
        </>

    );
};
export default Wind;
