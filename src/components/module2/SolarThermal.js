import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateBaseline, updateSolarThermal } from "../../actions/module2";
import { useNavigate } from "react-router-dom";

const SolarThermal = () => {
    const { solavPV, baseline, economicParameters, led } = useSelector(state => state.module2);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [averageAnnualGasRequirements,setAverageAnnualGasRequirements ] = useState(led?.averageAnnualGasRequirements);
    const [heatDemandToBeTakenFromSolarThermalSystem, setHeatDemandToBeTakenFromSolarThermalSystem]=useState(led?.heatDemandToBeTakenFromSolarThermalSystem);
    const [location, setLocation]=useState(led?.location);
    const [latitudeLongitude,setLatitudeLongitude]=useState(led?.latitudeLongitude);
    const [existingBoilerEfficiency, setExistingBoilerEfficiency]=useState(led?.existingBoilerEfficiency);
    const [incidentSolarIrradiation, setIncidentSolarIrradiation]=useState(led?.incidentSolarIrradiation);
    const [solarIrradiation, setSolarIrradiation]=useState(led?.solarIrradiation);
    const [opticalEfficiency, setOpticalEfficiency]=useState(led?.opticalEfficiency);
    const [firstOrderEfficiencyCoefficient,setFirstOrderEfficiencyCoefficient]=useState(led?.firstOrderEfficiencyCoefficient);
    const [secondOrderEfficiencyCoefficient,setSecondOrderEfficiencyCoefficient]=useState(led?.secondOrderEfficiencyCoefficient);
    const [ambientTemperature, setAmbientTemperature]=useState(led?.ambientTemperature);
    const [inletTemperature, setInletTemperature]=useState(led?.inletTemperature);
    const [outletTemperature,setOutletTemperature]=useState(led?.outletTemperature);
    const [collectorTemperature, setCollectorTemperature]=useState(led?.collectorTemperature);
    const [efficiencyOfSolarThermalSystem,setEfficiencyOfSolarThermalSystem]=useState(led?.efficiencyOfSolarThermalSystem);
    const [capacityOfSolarThermalSystem,setCapacityOfSolarThermalSystem]=useState(led?.capacityOfSolarThermalSystem);
    const [annualGridGasSavingInPresenceOfSolarThermalSystem,setAnnualGridGasSavingInPresenceOfSolarThermalSystem]=useState(led?.annualGridGasSavingInPresenceOfSolarThermalSystem);
    const [sizeOfSolarThermalSystem, setSizeOfSolarThermalSystem]=useState(led?.sizeOfSolarThermalSystem);
    const [unitInstallationCostOfSolarThermalSystem, setUnitInstallationCostOfSolarThermalSystem]=useState(led?.unitInstallationCostOfSolarThermalSystem);
    const [initialInvestmentForSolarThermalSystem,setInitialInvestmentForSolarThermalSystem]=useState(led?.initialInvestmentForSolarThermalSystem);
    const [unitPriceOfGridGas,setUnitPriceOfGridGas]=useState(led?.unitPriceOfGridGas);
    const [annualOperationalCostSavings,setAnnualOperationalCostSavings]=useState(led?.annualOperationalCostSavings);
    const [netPresentValueOfOperationalEnergyCostSavings,setNetPresentValueOfOperationalEnergyCostSavings]=useState(led?.netPresentValueOfOperationalEnergyCostSavings);
    const [emissionFactorOfGridGas, setEmissionFactorOfGridGas]=useState(led?.emissionFactorOfGridGas);
    const [annualOperationalEmissionSavings,setAnnualOperationalEmissionSavings]=useState(led?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriod,setTotalOperationalEmissionSavingsAcrossAbatementPeriod]=useState(led?.totalOperationalEmissionSavingsAcrossAbatementPeriod);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriodTon,setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon]=useState(led?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon)

    useEffect(() => {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${location}`).then(response => {
            return response.json()
        }).then(data => {
            if (data && data.length) {
                setLatitudeLongitude(data[0].lat + "," + data[0].lon);
            }
        })
    }, [location]);

    useEffect(() => {
        setCollectorTemperature( outletTemperature-inletTemperature);
    }, [outletTemperature, inletTemperature])
    useEffect(() => {
        // formula wrong in excel*100
        setEfficiencyOfSolarThermalSystem( (opticalEfficiency-((firstOrderEfficiencyCoefficient/incidentSolarIrradiation)*collectorTemperature)-((secondOrderEfficiencyCoefficient/incidentSolarIrradiation)*((collectorTemperature)*(collectorTemperature))))*100);
    }, [opticalEfficiency, firstOrderEfficiencyCoefficient,incidentSolarIrradiation,collectorTemperature,secondOrderEfficiencyCoefficient])
    useEffect(() => {
        setSizeOfSolarThermalSystem( (averageAnnualGasRequirements*heatDemandToBeTakenFromSolarThermalSystem*existingBoilerEfficiency)/(efficiencyOfSolarThermalSystem*solarIrradiation));
    }, [averageAnnualGasRequirements, heatDemandToBeTakenFromSolarThermalSystem,existingBoilerEfficiency,efficiencyOfSolarThermalSystem,solarIrradiation])
    useEffect(() => {
        setCapacityOfSolarThermalSystem( 0.7*sizeOfSolarThermalSystem);
    }, [sizeOfSolarThermalSystem])
    useEffect(() => {
        setAnnualGridGasSavingInPresenceOfSolarThermalSystem( averageAnnualGasRequirements*heatDemandToBeTakenFromSolarThermalSystem);
    }, [averageAnnualGasRequirements,heatDemandToBeTakenFromSolarThermalSystem])
    useEffect(() => {
        setInitialInvestmentForSolarThermalSystem( unitInstallationCostOfSolarThermalSystem*sizeOfSolarThermalSystem);
    }, [unitInstallationCostOfSolarThermalSystem, sizeOfSolarThermalSystem])
    useEffect(() => {
        setAnnualOperationalCostSavings(unitPriceOfGridGas*annualGridGasSavingInPresenceOfSolarThermalSystem );
    }, [unitPriceOfGridGas,annualGridGasSavingInPresenceOfSolarThermalSystem])
    useEffect(() => {
        setAnnualOperationalEmissionSavings(emissionFactorOfGridGas*annualGridGasSavingInPresenceOfSolarThermalSystem );
    }, [emissionFactorOfGridGas,annualGridGasSavingInPresenceOfSolarThermalSystem])
    useEffect(() => {
        setTotalOperationalEmissionSavingsAcrossAbatementPeriod(annualOperationalEmissionSavings*economicParameters.yearsOfAbatement );
    }, [annualOperationalEmissionSavings])
    useEffect(() => {
        setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon(totalOperationalEmissionSavingsAcrossAbatementPeriod/1000);
    }, [totalOperationalEmissionSavingsAcrossAbatementPeriod])

    const onSave = () => {
        dispatch(updateSolarThermal({
            averageAnnualGasRequirements,
            heatDemandToBeTakenFromSolarThermalSystem,
            location,
            latitudeLongitude,
            existingBoilerEfficiency,
            incidentSolarIrradiation,
            solarIrradiation,
            opticalEfficiency,
            firstOrderEfficiencyCoefficient,
            secondOrderEfficiencyCoefficient,
            ambientTemperature,
            inletTemperature,
            outletTemperature,
            collectorTemperature,
            efficiencyOfSolarThermalSystem,
            capacityOfSolarThermalSystem,
            annualGridGasSavingInPresenceOfSolarThermalSystem,
            sizeOfSolarThermalSystem,
            unitInstallationCostOfSolarThermalSystem,
            initialInvestmentForSolarThermalSystem,
            unitPriceOfGridGas,
            annualOperationalCostSavings,
            netPresentValueOfOperationalEnergyCostSavings,
            emissionFactorOfGridGas,
            annualOperationalEmissionSavings,
            totalOperationalEmissionSavingsAcrossAbatementPeriod,
            totalOperationalEmissionSavingsAcrossAbatementPeriodTon,
            isComplete: true
        }));
        navigate("./../industrial-heat-pump")
    }

    return (
        <>
            <h2 className="form-heading">Solar thermal</h2>
            <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
            <div className="main">
                <div>
                    <h2 className="group-heading">GENERAL</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={baseline.averageAnnualGasConsumption}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Average annual gas requirements"
                                onChange={(event) => { setAverageAnnualGasRequirements(event.target.value) }}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                            <InputWithSideText value={heatDemandToBeTakenFromSolarThermalSystem}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="What % of heat demand to be taken from Solar thermal system?"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setHeatDemandToBeTakenFromSolarThermalSystem(event.target.value) }} />
                            <InputWithSideText value={location}
                                unit=""
                                type="text"
                                placeholder="Enter value"
                                heading="Location"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                onChange={(event) => { setLocation(event.target.value) }} />
                            <InputWithSideText value={latitudeLongitude}
                                unit=""
                                type="text"
                                placeholder="Enter value"
                                heading="Lattitude, longitude"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                onChange={(event) => { setLatitudeLongitude(event.target.value) }} />
                            {/* from ninjaewebsite */}
                        </div>
                        <div className="calculated-main">

                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">TECHNICAL ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={existingBoilerEfficiency}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="Existing boiler efficiency"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setExistingBoilerEfficiency(event.target.value) }} />
                            <InputWithSideText value={incidentSolarIrradiation}
                                unit="W/m2"
                                type="number"
                                placeholder="Enter value"
                                heading="Incident solar irradiation"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setIncidentSolarIrradiation(event.target.value) }} />
                            <InputWithSideText value={solarIrradiation}
                                unit="kWh/m2"
                                type="number"
                                placeholder="Enter value"
                                heading="Solar irradiation"
                                onChange={(event) => { setSolarIrradiation(event.target.value) }}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                            />
                            <InputWithSideText value={opticalEfficiency}
                                unit="W"
                                type="number"
                                placeholder="Enter value"
                                heading="Optical Efficiency"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setOpticalEfficiency(event.target.value) }} />
                            <InputWithSideText value={firstOrderEfficiencyCoefficient}
                                unit="W/m²K"
                                type="number"
                                placeholder="Enter value"
                                heading="First-order Efficiency Coefficient"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setFirstOrderEfficiencyCoefficient(event.target.value) }} />
                            <InputWithSideText value={secondOrderEfficiencyCoefficient}
                                unit="W/m²K2"
                                type="number"
                                placeholder="Enter value"
                                heading="Second-order Efficiency Coefficient"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setSecondOrderEfficiencyCoefficient(event.target.value) }} />
                            <InputWithSideText value={ambientTemperature}
                                unit="K"
                                type="number"
                                placeholder="Enter value"
                                heading="Ambient temperature"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setAmbientTemperature(event.target.value) }} />
                            <InputWithSideText value={inletTemperature}
                                unit="K"
                                type="number"
                                placeholder="Enter value"
                                heading="Inlet temperature"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setInletTemperature(event.target.value) }} />
                            <InputWithSideText value={outletTemperature}
                                unit="K"
                                type="number"
                                placeholder="Enter value"
                                heading="Outlet temperature"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setOutletTemperature(event.target.value) }} />
                            
                            <InputWithSideText value={collectorTemperature}
                                unit="K"
                                type="number"
                                placeholder="Enter value"
                                heading="Collector temperature"
                                disabled={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setCollectorTemperature(event.target.value) }} />
                                {/* collector temperature difference in excel */}
                            <InputWithSideText value={efficiencyOfSolarThermalSystem}
                                unit=""
                                type="number"
                                placeholder="Enter value"
                                heading="Efficiency of solar thermal system"
                                disabled={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setEfficiencyOfSolarThermalSystem(event.target.value) }} />
                            <InputWithSideText value={capacityOfSolarThermalSystem}
                                unit="kW"
                                type="number"
                                placeholder="Enter value"
                                heading="Capacity of solar thermal system"
                                disabled={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setCapacityOfSolarThermalSystem(event.target.value) }} />
                            <InputWithSideText value={annualGridGasSavingInPresenceOfSolarThermalSystem}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual grid gas saving in presence of solar thermal system"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                disabled={true}
                                onChange={(event) => { setAnnualGridGasSavingInPresenceOfSolarThermalSystem(event.target.value) }} />

                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Size of solar thermal system" unit="m2" value={sizeOfSolarThermalSystem} />
                                {/* <CalculatedData heading="Annual electricity consumption with LEDs" unit="kWh" value={annualElectricityConsumptionWithLEDs} /> */}
                                {/* <CalculatedData heading="Annual electricity savings with LEDs" unit="kWh" value={annualElectricitySavingsWithLEDs} /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">ECONOMIC ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={unitInstallationCostOfSolarThermalSystem}
                                unit="£/m2"
                                type="number"
                                placeholder="Enter value"
                                heading="Unit installation cost of Solar thermal system"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setUnitInstallationCostOfSolarThermalSystem(event.target.value) }} />
                            <InputWithSideText value={initialInvestmentForSolarThermalSystem}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Initial investment for Solar thermal system (CAPEX)"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                disabled={true}
                                onChange={(event) => { setInitialInvestmentForSolarThermalSystem(event.target.value) }} />
                            <InputWithSideText value={economicParameters.unitPriceOfGas}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Unit price of grid gas"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" 
                                onChange={(event) => { setUnitPriceOfGridGas(event.target.value) }}/>

                            {/* <InputWithSideText value={costOfElectricityWithLEDs}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Cost of electricity with LEDs"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                            /> */}
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
                            <InputWithSideText value={emissionFactorOfGridGas}
                                unit="kgCO2e/kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Emission factor of grid gas"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" 
                                onChange={(event) => { setEmissionFactorOfGridGas(event.target.value) }}/>
                            <InputWithSideText value={annualOperationalEmissionSavings}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual operational emission savings"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" 
                                 onChange={(event) => { setAnnualOperationalEmissionSavings(event.target.value) }}/>
                                <InputWithSideText value={totalOperationalEmissionSavingsAcrossAbatementPeriod}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="Total operational emission savings across abatement period"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Total operational emission savings across abatement period" unit="tCO2e" value={totalOperationalEmissionSavingsAcrossAbatementPeriodTon} />
                                {/* <CalculatedData heading="Cost effectiveness considering operational emission savings only (i.e. without embodied emissions)" unit="tCO2e" value={costEffectivenessConsideringOperationalEmissionSavingsOnly} /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="calculated-main calculated-last">
                    <div className="calculated-container">
                        <CalculatedData heading="Cost effectiveness considering operational emission savings only (i.e. without embodied emissions)" unit="£/tCO2e" value={""} />
                    </div>
                </div>
                <div className="btn-div">
                    <Button value="Next" />
                </div>
            </div >
        </>

    );
};
export default SolarThermal;
