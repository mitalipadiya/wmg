import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateSolarThermal } from "../../actions/module2";
import { useNavigate } from "react-router-dom";
import InputWithSelect from "../UI/InputWithSelect";

const SolarThermal = () => {
    const { baseline, economicParameters, solarThermal } = useSelector(state => state.module2);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [averageAnnualGasRequirements, setAverageAnnualGasRequirements] = useState(baseline?.averageAnnualGasConsumption);
    const [heatDemandToBeTakenFromSolarThermalSystem, setHeatDemandToBeTakenFromSolarThermalSystem] = useState(solarThermal?.heatDemandToBeTakenFromSolarThermalSystem);
    const [location, setLocation] = useState(baseline?.location);
    const [latitudeLongitude, setLatitudeLongitude] = useState(baseline?.latitudeLongitude);
    const [existingBoilerEfficiency, setExistingBoilerEfficiency] = useState(solarThermal?.existingBoilerEfficiency);
    const [incidentSolarIrradiation, setIncidentSolarIrradiation] = useState(solarThermal?.incidentSolarIrradiation);
    const [annualSolarIrradiation, setAnnualSolarIrradiation] = useState(solarThermal?.annualSolarIrradiation);
    const [opticalEfficiency, setOpticalEfficiency] = useState(solarThermal?.opticalEfficiency);
    const [firstOrderEfficiencyCoefficient, setFirstOrderEfficiencyCoefficient] = useState(solarThermal?.firstOrderEfficiencyCoefficient);
    const [secondOrderEfficiencyCoefficient, setSecondOrderEfficiencyCoefficient] = useState(solarThermal?.secondOrderEfficiencyCoefficient);
    const [ambientTemperature, setAmbientTemperature] = useState(solarThermal?.ambientTemperature);
    const [inletTemperature, setInletTemperature] = useState(solarThermal?.inletTemperature);
    const [outletTemperature, setOutletTemperature] = useState(solarThermal?.outletTemperature);
    const [collectorTemperature, setCollectorTemperature] = useState(solarThermal?.collectorTemperature);
    const [efficiencyOfSolarThermalSystem, setEfficiencyOfSolarThermalSystem] = useState(solarThermal?.efficiencyOfSolarThermalSystem);
    const [capacityOfSolarThermalSystem, setCapacityOfSolarThermalSystem] = useState(solarThermal?.capacityOfSolarThermalSystem);
    const [annualGridGasSavingInPresenceOfSolarThermalSystem, setAnnualGridGasSavingInPresenceOfSolarThermalSystem] = useState(solarThermal?.annualGridGasSavingInPresenceOfSolarThermalSystem);
    const [sizeOfSolarThermalSystem, setSizeOfSolarThermalSystem] = useState(solarThermal?.sizeOfSolarThermalSystem);
    const [unitInstallationCostOfSolarThermalSystem, setUnitInstallationCostOfSolarThermalSystem] = useState(solarThermal?.unitInstallationCostOfSolarThermalSystem);
    const [initialInvestmentForSolarThermalSystem, setInitialInvestmentForSolarThermalSystem] = useState(solarThermal?.initialInvestmentForSolarThermalSystem);
    const [unitPriceOfGridGas, setUnitPriceOfGridGas] = useState(economicParameters?.unitPriceOfGas);
    const [annualOperationalCostSavings, setAnnualOperationalCostSavings] = useState(solarThermal?.annualOperationalCostSavings);
    const [netPresentValueOfOperationalEnergyCostSavings, setNetPresentValueOfOperationalEnergyCostSavings] = useState(solarThermal?.netPresentValueOfOperationalEnergyCostSavings);
    const [emissionFactorOfGridGas, setEmissionFactorOfGridGas] = useState(baseline?.emissionFactorForGridGas);
    const [annualOperationalEmissionSavings, setAnnualOperationalEmissionSavings] = useState(solarThermal?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriod, setTotalOperationalEmissionSavingsAcrossAbatementPeriod] = useState(solarThermal?.totalOperationalEmissionSavingsAcrossAbatementPeriod);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriodTon, setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon] = useState(solarThermal?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon)
    const [costEffectivenessConsideringOperationalEmissionSavingsOnly, setCostEffectivenessConsideringOperationalEmissionSavingsOnly] = useState(solarThermal?.costEffectivenessConsideringOperationalEmissionSavingsOnly);
    const [solarThermalSystemType, setSolarThermalSystemType] = useState(solarThermal?.solarThermalSystemType);
    const solarThermalTypes = ["High performance FPC", "Low cost  FPC", "High performance ETC", "Low cost  ETC"];


    useEffect(() => {
        const latLong = latitudeLongitude.split(",");
        let maxIrradianceSum = 0;
        if(latLong.length > 1) {
            fetch(`https://renewables.ninja/api/data/pv?local_time=true&format=json&header=true&lat=${latLong[0]}&lon=${latLong[1]}&date_from=2019-01-01&date_to=2019-12-31&dataset=merra2&capacity=1&system_loss=0.1&tracking=0&tilt=35&azim=180&raw=true`).then(res => res.json()).then(data => {
                if (data && data.data) {
                    let allData = Object.values(data.data);
                    let totalTemperature = 0;
                    let totalDirectIrradiance = 0;
                    let totalDiffuseIrradiance = 0;
                    for (let i = 0; i < allData.length; i++) {
                        totalTemperature += allData[i].temperature;
                        totalDirectIrradiance += allData[i].irradiance_direct;
                        totalDiffuseIrradiance += allData[i].irradiance_diffuse;
                        let irradianceSum = totalDirectIrradiance + totalDiffuseIrradiance;
                        if(irradianceSum > maxIrradianceSum) {
                            maxIrradianceSum = irradianceSum;
                        }
                    }
                    setAmbientTemperature(totalTemperature/allData.length);
                    setAnnualSolarIrradiation(totalDirectIrradiance + totalDiffuseIrradiance);
                    setIncidentSolarIrradiation(maxIrradianceSum);
                }
            })
        }
    }, [])

    useEffect(() => {
        setCollectorTemperature(outletTemperature - inletTemperature);
    }, [outletTemperature, inletTemperature])
    useEffect(() => {
        setEfficiencyOfSolarThermalSystem((opticalEfficiency - ((firstOrderEfficiencyCoefficient / incidentSolarIrradiation) * collectorTemperature) - ((secondOrderEfficiencyCoefficient / incidentSolarIrradiation) * ((collectorTemperature) * (collectorTemperature)))) * 100);
    }, [opticalEfficiency, firstOrderEfficiencyCoefficient, incidentSolarIrradiation, collectorTemperature, secondOrderEfficiencyCoefficient])
    useEffect(() => {
        setSizeOfSolarThermalSystem((averageAnnualGasRequirements * (heatDemandToBeTakenFromSolarThermalSystem / 100) * (existingBoilerEfficiency / 100)) / ((efficiencyOfSolarThermalSystem / 100) * annualSolarIrradiation));
    }, [averageAnnualGasRequirements, heatDemandToBeTakenFromSolarThermalSystem, existingBoilerEfficiency, efficiencyOfSolarThermalSystem, annualSolarIrradiation])
    useEffect(() => {
        setCapacityOfSolarThermalSystem(0.7 * sizeOfSolarThermalSystem);
    }, [sizeOfSolarThermalSystem])
    useEffect(() => {
        setAnnualGridGasSavingInPresenceOfSolarThermalSystem(averageAnnualGasRequirements * heatDemandToBeTakenFromSolarThermalSystem / 100);
    }, [averageAnnualGasRequirements, heatDemandToBeTakenFromSolarThermalSystem])
    useEffect(() => {
        setInitialInvestmentForSolarThermalSystem(unitInstallationCostOfSolarThermalSystem * sizeOfSolarThermalSystem);
    }, [unitInstallationCostOfSolarThermalSystem, sizeOfSolarThermalSystem])
    useEffect(() => {
        setAnnualOperationalCostSavings(unitPriceOfGridGas * annualGridGasSavingInPresenceOfSolarThermalSystem);
    }, [unitPriceOfGridGas, annualGridGasSavingInPresenceOfSolarThermalSystem])
    useEffect(() => {
        setAnnualOperationalEmissionSavings(emissionFactorOfGridGas * annualGridGasSavingInPresenceOfSolarThermalSystem);
    }, [emissionFactorOfGridGas, annualGridGasSavingInPresenceOfSolarThermalSystem])
    useEffect(() => {
        setTotalOperationalEmissionSavingsAcrossAbatementPeriod(annualOperationalEmissionSavings * economicParameters.yearsOfAbatement);
    }, [annualOperationalEmissionSavings])
    useEffect(() => {
        setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon(totalOperationalEmissionSavingsAcrossAbatementPeriod / 1000);
    }, [totalOperationalEmissionSavingsAcrossAbatementPeriod])

    useEffect(() => {
        setNetPresentValueOfOperationalEnergyCostSavings(((1 - Math.pow(1 + (economicParameters?.discountRate / 100), -economicParameters?.yearsOfAbatement)) / (economicParameters?.discountRate / 100)) * annualOperationalCostSavings);
    }, [annualOperationalCostSavings]);
    useEffect(() => {
        setCostEffectivenessConsideringOperationalEmissionSavingsOnly((initialInvestmentForSolarThermalSystem - netPresentValueOfOperationalEnergyCostSavings) / totalOperationalEmissionSavingsAcrossAbatementPeriodTon);
    }, [initialInvestmentForSolarThermalSystem, netPresentValueOfOperationalEnergyCostSavings, totalOperationalEmissionSavingsAcrossAbatementPeriodTon])
    useEffect(()=>{
        switch(solarThermalSystemType) {
            case "High performance FPC":
                setOpticalEfficiency(0.77);
                setFirstOrderEfficiencyCoefficient(3.45);
                setSecondOrderEfficiencyCoefficient(0.0083);
                break;
            case "Low cost  FPC":
                setOpticalEfficiency(0.705);
                setFirstOrderEfficiencyCoefficient(3.78);
                setSecondOrderEfficiencyCoefficient(0.011);
                break;
            case "High performance ETC":
                setOpticalEfficiency(0.63);
                setFirstOrderEfficiencyCoefficient(0.93);
                setSecondOrderEfficiencyCoefficient(0.004);
                break;
            case "Low cost  ETC":
                setOpticalEfficiency(0.39);
                setFirstOrderEfficiencyCoefficient(0.88);
                setSecondOrderEfficiencyCoefficient(0.012);
                break;
        }
    },[solarThermalSystemType]);

    const onSave = () => {
        dispatch(updateSolarThermal({
            averageAnnualGasRequirements,
            heatDemandToBeTakenFromSolarThermalSystem,
            location,
            latitudeLongitude,
            existingBoilerEfficiency,
            incidentSolarIrradiation,
            annualSolarIrradiation,
            solarThermalSystemType,
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
            costEffectivenessConsideringOperationalEmissionSavingsOnly,
            isComplete: true
        }));
        navigate("./../industrial-heat-pump")
    }

    return (
        <>
            <h2 className="form-heading">Solar thermal</h2>
            <h3 className="form-subheading"></h3>
            <div className="main">
                <div>
                    <h2 className="group-heading">GENERAL</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={averageAnnualGasRequirements}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Average annual gas requirements"
                                disabled={true}
                                subHeading="" />
                            <InputWithSideText value={heatDemandToBeTakenFromSolarThermalSystem}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="What % of heat demand to be taken from Solar thermal system?"
                                subHeading=""
                                onChange={(event) => { setHeatDemandToBeTakenFromSolarThermalSystem(event.target.value) }} />
                            <InputWithSideText value={location}
                                unit=""
                                type="text"
                                placeholder="Enter value"
                                heading="Location"
                                subHeading=""
                                disabled={true} />
                            <InputWithSideText value={latitudeLongitude}
                                unit=""
                                type="text"
                                placeholder="Enter value"
                                heading="Lattitude, longitude"
                                subHeading=""
                                disabled={true}/>
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
                                subHeading=""
                                onChange={(event) => { setExistingBoilerEfficiency(event.target.value) }} />
                            <InputWithSideText value={incidentSolarIrradiation}
                                unit="W/m2"
                                type="number"
                                placeholder="Enter value"
                                heading="Incident solar irradiation"
                                subHeading=""                                toFixed={true}
                                disabled={true} />
                            <InputWithSideText value={annualSolarIrradiation}
                                unit="kWh/m2"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual Solar irradiation"                                
                                toFixed={true}
                                disabled={true}
                                subHeading=""
                            />
                            <InputWithSelect heading="Solar thermal system type"
                                subHeading=""
                                values={solarThermalTypes}
                                value={solarThermalSystemType}
                                placeholder="Enter the value"
                                onChange={(event) => { setSolarThermalSystemType(event.target.value) }}
                            />
                            <InputWithSideText value={opticalEfficiency}
                                unit="W"
                                type="number"
                                placeholder="Enter value"
                                heading="Optical Efficiency"
                                subHeading=""
                                onChange={(event) => { setOpticalEfficiency(event.target.value) }} />
                            <InputWithSideText value={firstOrderEfficiencyCoefficient}
                                unit="W/m²K"
                                type="number"
                                placeholder="Enter value"
                                heading="First-order Efficiency Coefficient"
                                subHeading=""
                                disabled={true} />
                            <InputWithSideText value={secondOrderEfficiencyCoefficient}
                                unit="W/m²K2"
                                type="number"
                                placeholder="Enter value"
                                heading="Second-order Efficiency Coefficient"
                                subHeading=""
                                disabled={true}/>
                            <InputWithSideText value={ambientTemperature}
                                unit="K"
                                type="number"
                                placeholder="Enter value"
                                heading="Ambient temperature"
                                toFixed={true}
                                disabled={true}
                                subHeading=""/>
                            <InputWithSideText value={inletTemperature}
                                unit="K"
                                type="number"
                                placeholder="Enter value"
                                heading="Inlet temperature"
                                subHeading=""
                                onChange={(event) => { setInletTemperature(event.target.value) }} />
                            <InputWithSideText value={outletTemperature}
                                unit="K"
                                type="number"
                                placeholder="Enter value"
                                heading="Outlet temperature"
                                subHeading=""
                                onChange={(event) => { setOutletTemperature(event.target.value) }} />

                            <InputWithSideText value={collectorTemperature}
                                unit="K"
                                type="number"
                                placeholder="Enter value"
                                heading="Collector temperature"
                                disabled={true}
                                toFixed={true}
                                subHeading="" />
                            <InputWithSideText value={efficiencyOfSolarThermalSystem}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="Efficiency of solar thermal system"
                                disabled={true}
                                toFixed={true}
                                subHeading="" />
                            <InputWithSideText value={capacityOfSolarThermalSystem}
                                unit="kW"
                                type="number"
                                placeholder="Enter value"
                                heading="Capacity of solar thermal system"
                                disabled={true}
                                toFixed={true}
                                subHeading="" />
                            <InputWithSideText value={annualGridGasSavingInPresenceOfSolarThermalSystem}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual grid gas saving in presence of solar thermal system"
                                subHeading=""
                                disabled={true}
                                toFixed={true} />

                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Size of solar thermal system" unit="m2" value={sizeOfSolarThermalSystem} />
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
                                subHeading=""
                                onChange={(event) => { setUnitInstallationCostOfSolarThermalSystem(event.target.value) }} />
                            <InputWithSideText value={initialInvestmentForSolarThermalSystem}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Initial investment for Solar thermal system (CAPEX)"
                                subHeading=""
                                disabled={true}
                                toFixed={true} />
                            <InputWithSideText value={unitPriceOfGridGas}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Unit price of grid gas"
                                subHeading=""
                                onChange={(event) => { setUnitPriceOfGridGas(event.target.value) }} />
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
                                subHeading=""
                                onChange={(event) => { setEmissionFactorOfGridGas(event.target.value) }} />
                            <InputWithSideText value={annualOperationalEmissionSavings}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual operational emission savings"
                                subHeading=""
                                onChange={(event) => { setAnnualOperationalEmissionSavings(event.target.value) }} />
                            <InputWithSideText value={totalOperationalEmissionSavingsAcrossAbatementPeriod}
                                unit="kgCO2e"
                                type="number"
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
                        <CalculatedData heading="Cost effectiveness considering operational emission savings only (i.e. without embodied emissions)" unit="£/tCO2e" value={costEffectivenessConsideringOperationalEmissionSavingsOnly} />
                    </div>
                </div>
                <div className="btn-div">
                    <Button value="Next" onClick={onSave}/>
                </div>
            </div >
        </>

    );
};
export default SolarThermal;