import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateBaseline } from "../../actions/module2";
import { useNavigate } from "react-router-dom";

const Wind = () => {
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
            <h2 className="form-heading">Passive infrared sensor</h2>
            <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
            <div className="main">
                <div>
                    <h2 className="group-heading">GENERAL</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={averageAnnualElectricityRequirements}
                                unit="N"
                                type="number"
                                placeholder="Enter value"
                                heading="Number of lamps"
                                disabled={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                                <InputWithSideText value={averageAnnualElectricityRequirements}
                                unit="W"
                                type="number"
                                placeholder="Enter value"
                                heading="Wattage of lamp"
                                disabled={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                                <InputWithSideText value={averageAnnualElectricityRequirements}
                                unit="D"
                                type="number"
                                placeholder="Enter value"
                                heading="Number of days in year"
                                disabled={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                                <InputWithSideText value={averageAnnualElectricityRequirements}
                                unit="h0"
                                type="number"
                                placeholder="Enter value"
                                heading="Estimated hours ON per day"
                                disabled={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                                <InputWithSideText value={averageAnnualElectricityRequirements}
                                unit="hoc"
                                type="number"
                                placeholder="Enter value"
                                heading="Estimated hours occupied per day"
                                disabled={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                                <InputWithSideText value={averageAnnualElectricityRequirements}
                                unit="m2"
                                type="number"
                                placeholder="Enter value"
                                heading="Area of industrial facility"
                                disabled={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
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
                                    unit="m2"
                                    type="number"
                                    placeholder="Enter value"
                                    heading="Detection range of PIR sensors"
                                    disabled={true}
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                                    <InputWithSideText value={electricityGeneratedPVSystem}
                                    unit="m2"
                                    type="number"
                                    placeholder="Enter value"
                                    heading="Detection range of PIR sensors"
                                    disabled={true}
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                                    <InputWithSideText value={electricityGeneratedPVSystem}
                                    unit=""
                                    type="number"
                                    placeholder="Enter value"
                                    heading="Number of PIR sensors"
                                    disabled={true}
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                                    <InputWithSideText value={electricityGeneratedPVSystem}
                                    unit="m2"
                                    type="number"
                                    placeholder="Enter value"
                                    heading="Detection range of PIR sensors"
                                    disabled={true}
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                            </div>
                            <div className="calculated-main">
                                <div className="calculated-container">
                                    <CalculatedData heading="Annual electricity consumption without PIR sensor" unit="kWh" value={sizeOfPVSystem} />
                                </div>
                                <div className="calculated-container">
                                    <CalculatedData heading="Annual electricity consumption with PIR sensor installed" unit="kWh" value={sizeOfPVSystem} />
                                </div>
                                <div className="calculated-container">
                                    <CalculatedData heading="Annual Electricity savings with PIR sensors" unit="kWh" value={sizeOfPVSystem} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="group-heading">ECONOMIC ANALYSIS</h2>
                        <div className="form-div">
                            <div className="form-input">
                                <InputWithSideText value={unitInstallationCostPVSystem}
                                    unit="£"
                                    type="number"
                                    placeholder="Enter value"
                                    heading="Unit cost of PIR sensor"
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                    onChange={(event) => { setUnitInstallationCostPVSystem(event.target.value) }} />
                                    <InputWithSideText value={unitInstallationCostPVSystem}
                                    unit="£"
                                    type="number"
                                    placeholder="Enter value"
                                    heading="Initial investment for PIR (CAPEX)"
                                    subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                    onChange={(event) => { setUnitInstallationCostPVSystem(event.target.value) }} />
                            </div>
                            <div className="calculated-main">
                                <div className="calculated-container">
                                    <CalculatedData heading="Annual operational cost savings" unit="£" value={baseline?.averageAnnualElectricityConsumption * unitPriceOfElectricity} />
                                    <CalculatedData heading="Net Present Value of operational energy cost savings (NPV)" unit="£" value={unitPriceOfGas * baseline?.averageAnnualGasConsumption} />
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
                                    <CalculatedData heading="Total operational emission savings across abatement period" unit="tCO2e" value={baseline?.averageAnnualElectricityConsumption * unitPriceOfElectricity} />
                                    <CalculatedData heading="Cost effectiveness considering operational emission savings only (i.e. without embodied emissions)" unit="tCO2e" value={baseline?.averageAnnualElectricityConsumption * unitPriceOfElectricity} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-div">
                        <Button value="Next" onClick={onSave} />
                    </div>
                </div >
            </div>
        </>

    );
};
export default Wind;
