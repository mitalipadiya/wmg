import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateBaseline } from "../../actions/module2";
import { useNavigate } from "react-router-dom";

const Biomass = () => {
    const { solavPV, baseline } = useSelector(state => state.module2);

    const [averageAnnualElectricityRequirements, setAverageAnnualElectricityRequirements] = useState(baseline?.averageAnnualElectricityConsumption);
    const [percentAnnualElectricityFromPV, setPercentAnnualElectricityFromPV] = useState(solavPV?.percentAnnualElectricityFromPV);
    const [location, setLocation] = useState(solavPV?.location);
    const [latitudeLongitude, setLatitudeLongitude] = useState(solavPV?.latitudeLongitude);
    const [electricityGeneratedPVSystem, setElectricityGeneratedPVSystem] = useState(solavPV?.electricityGeneratedPVSystem);
    const [annualElectricityGenerationSelectedLocation, setAnnualElectricityGenerationSelectedLocation] = useState(solavPV?.annualElectricityGenerationSelectedLocation);
    const [annualSolarInsolationSelectedLocation, setAnnualSolarInsolationSelectedLocation] = useState(solavPV?.annualSolarInsolationSelectedLocation);
    const [solarModuleEfficiency, setSolarModuleEfficiency] = useState(solavPV?.solarModuleEfficiency);
    const [gHGEmissionsElectricityPVSystem, setgHGEmissionsElectricityPVSystem] = useState(solavPV?.gHGEmissionsElectricityPVSystem);
    const [annualOperationalEmissionSavings, setAnnualOperationalEmissionSavings] = useState(solavPV?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAbatementPeriod, setTotalOperationalEmissionSavingsAbatementPeriod] = useState(solavPV?.totalOperationalEmissionSavingsAbatementPeriod);
    const [unitInstallationCostPVSystem, setUnitInstallationCostPVSystem] = useState(solavPV?.unitInstallationCostPVSystem);
    const [initialInvestmentPVSystem, setInitialInvestmentPVSystem] = useState(solavPV?.initialInvestmentPVSystem);
    const [sizeOfPVSystem, setSizeOfPVSystem] = useState(solavPV?.sizeOfPVSystem);

    const [areaOfPVSystem, setAreaOfPVSystem] = useState(solavPV?.areaOfPVSystem);



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
    const onPercentAnnualElectricityFromPVChange = (event) => {
        setPercentAnnualElectricityFromPV(event.target.value);
        setElectricityGeneratedPVSystem((event.target.value / 100) * averageAnnualElectricityRequirements);
    }
    useEffect(() => {
        setAreaOfPVSystem(electricityGeneratedPVSystem / (parseInt(annualSolarInsolationSelectedLocation) * (parseInt(solarModuleEfficiency) / 100)));
    }, [electricityGeneratedPVSystem, annualSolarInsolationSelectedLocation, solarModuleEfficiency]);
    useEffect(() => {
        setSizeOfPVSystem(electricityGeneratedPVSystem / annualElectricityGenerationSelectedLocation);
    }, [electricityGeneratedPVSystem, annualElectricityGenerationSelectedLocation]);
    useEffect(() => {
        setInitialInvestmentPVSystem(sizeOfPVSystem * unitInstallationCostPVSystem);
    }, [sizeOfPVSystem, unitInstallationCostPVSystem])
    useEffect(() => {
        let defaultValue = '';
        if (sizeOfPVSystem <= 4) {
            defaultValue = 1800;
        } else if (sizeOfPVSystem >= 10 && sizeOfPVSystem <= 50) {
            defaultValue = 1100;
        } else if (sizeOfPVSystem > 50) {
            defaultValue = 1000;
        }
        setUnitInstallationCostPVSystem(defaultValue);
    }, [sizeOfPVSystem])

    return (
        <>
            <h2 className="form-heading">Biomass</h2>
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
                            <InputWithSideText value={percentAnnualElectricityFromPV}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="What % of annual electricity you want to get from wind?"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={onPercentAnnualElectricityFromPVChange} />
                            <InputWithSideText value={location}
                                unit=""
                                type="text"
                                placeholder="Select"
                                heading="Location"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
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
                        <div className="calculated-container">
                                <CalculatedData heading="" unit="" value={sizeOfPVSystem} />
                                <CalculatedData heading="" unit="" value={areaOfPVSystem} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">TECHNICAL ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={electricityGeneratedPVSystem}
                                unit="m"
                                type="number"
                                placeholder="Enter value"
                                heading="Height"
                                disabled={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                            <InputWithSideText value={annualElectricityGenerationSelectedLocation}
                                unit=""
                                type="number"
                                placeholder="Enter value"
                                heading="Turbine model"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setAnnualElectricityGenerationSelectedLocation(event.target.value) }} />
                            <InputWithSideText value={annualSolarInsolationSelectedLocation}
                                unit="m/s"
                                type="number"
                                placeholder="Enter value"
                                heading="Average annual wind speed"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                onChange={(event) => { setAnnualSolarInsolationSelectedLocation(event.target.value) }} />
                            <InputWithSideText value={solarModuleEfficiency}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual generation per 1kW wind system"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                onChange={(event) => { setSolarModuleEfficiency(event.target.value) }} />
                            <InputWithSideText value={solarModuleEfficiency}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="Inverter efficiency"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                onChange={(event) => { setSolarModuleEfficiency(event.target.value) }} />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Size of PV system" unit="kWp" value={sizeOfPVSystem} />
                                <CalculatedData heading="Size of wind system" unit="kW" value={areaOfPVSystem} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">ECONOMIC ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={unitInstallationCostPVSystem}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Electricity used from wind system instead of grid"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setUnitInstallationCostPVSystem(event.target.value) }} />
                            <InputWithSideText value={initialInvestmentPVSystem}
                                unit="£/kW"
                                type="number"
                                placeholder="Enter value"
                                heading="Unit installation cost"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setInitialInvestmentPVSystem(event.target.value) }} />
                            <InputWithSideText value={initialInvestmentPVSystem}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Initial investment for Wind system (CAPEX)"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setInitialInvestmentPVSystem(event.target.value) }} />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Annual operational cost savings" unit="£" value={baseline?.averageAnnualElectricityConsumption} />
                                <CalculatedData heading="Net Present Value of operational energy cost savings (NPV)" unit="£" value={ baseline?.averageAnnualGasConsumption} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">OPERATIONAL EMISSIONS ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={gHGEmissionsElectricityPVSystem}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual operational emission savings"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setgHGEmissionsElectricityPVSystem(event.target.value) }} />
                            <InputWithSideText value={annualOperationalEmissionSavings}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="Total operational emission savings across abatement period"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setAnnualOperationalEmissionSavings(event.target.value) }} />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Total operational emission savings across abatement period" unit="tCO2e" value={baseline?.averageAnnualElectricityConsumption} />
                                <CalculatedData heading="Cost effectiveness considering operational emission savings only (i.e. without embodied emissions)" unit="tCO2e" value={baseline?.averageAnnualElectricityConsumption} />
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
export default Biomass;
