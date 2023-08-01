import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateSolarPV } from "../../actions/module2";
import { useNavigate } from "react-router-dom";

const SolarPV = () => {
    const { baseline, solarPV, economicParameters } = useSelector(state => state.module2);

    const [averageAnnualElectricityRequirements] = useState(baseline?.averageAnnualElectricityConsumption);
    const [percentAnnualElectricityFromPV, setPercentAnnualElectricityFromPV] = useState(solarPV?.percentAnnualElectricityFromPV);
    const [location, setLocation] = useState(solarPV?.location);
    const [latitudeLongitude, setLatitudeLongitude] = useState(solarPV?.latitudeLongitude);
    const [electricityGeneratedPVSystem, setElectricityGeneratedPVSystem] = useState(solarPV?.electricityGeneratedPVSystem);
    const [annualElectricityGenerationSelectedLocation, setAnnualElectricityGenerationSelectedLocation] = useState(solarPV?.annualElectricityGenerationSelectedLocation);
    const [annualSolarInsolationSelectedLocation, setAnnualSolarInsolationSelectedLocation] = useState(solarPV?.annualSolarInsolationSelectedLocation);
    const [solarModuleEfficiency, setSolarModuleEfficiency] = useState(solarPV?.solarModuleEfficiency);
    const [gHGEmissionsElectricityPVSystem, setgHGEmissionsElectricityPVSystem] = useState(solarPV?.gHGEmissionsElectricityPVSystem);
    const [annualOperationalEmissionSavings, setAnnualOperationalEmissionSavings] = useState(solarPV?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAbatementPeriod, setTotalOperationalEmissionSavingsAbatementPeriod] = useState(solarPV?.totalOperationalEmissionSavingsAbatementPeriod);
    const [unitInstallationCostPVSystem, setUnitInstallationCostPVSystem] = useState(solarPV?.unitInstallationCostPVSystem);
    const [initialInvestmentPVSystem, setInitialInvestmentPVSystem] = useState(solarPV?.initialInvestmentPVSystem);
    const [annualElectricityInsteadOfGrid, setAnnualElectricityInsteadOfGrid] = useState(solarPV?.annualElectricityInsteadOfGrid);
    const [sizeOfPVSystem, setSizeOfPVSystem] = useState(solarPV?.sizeOfPVSystem);
    const [areaOfPVSystem, setAreaOfPVSystem] = useState(solarPV?.areaOfPVSystem);
    const [annualOperationalCostSavings, setAnnualOperationalCostSavings] = useState(solarPV?.annualOperationalCostSavings);
    const [netPresentValueOperationalEnergy, setNetPresentValueOperationalEnergy] = useState(solarPV?.netPresentValueOperationalEnergy);
    const [totalOperationalEmissionSavingsAbatementPeriodInTon, setTotalOperationalEmissionSavingsAbatementPeriodInTon] = useState(solarPV?.totalOperationalEmissionSavingsAbatementPeriodInTon);
    const [costEffectivenessOperationalEmission, setCostEffectivenessOperationalEmission] = useState(solarPV?.costEffectivenessOperationalEmission);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSave = () => {
        dispatch(updateSolarPV({
            averageAnnualElectricityRequirements,
            percentAnnualElectricityFromPV,
            location,
            latitudeLongitude,
            electricityGeneratedPVSystem,
            annualElectricityGenerationSelectedLocation,
            annualSolarInsolationSelectedLocation,
            solarModuleEfficiency,
            gHGEmissionsElectricityPVSystem,
            annualOperationalEmissionSavings,
            totalOperationalEmissionSavingsAbatementPeriod,
            unitInstallationCostPVSystem,
            initialInvestmentPVSystem,
            annualElectricityInsteadOfGrid,
            sizeOfPVSystem,
            areaOfPVSystem,
            annualOperationalCostSavings,
            netPresentValueOperationalEnergy,
            totalOperationalEmissionSavingsAbatementPeriodInTon,
            costEffectivenessOperationalEmission,
            isComplete: true
        }));
        navigate("./../wind")

    }

    useEffect(()=>{
        const data = (percentAnnualElectricityFromPV / 100) * averageAnnualElectricityRequirements;
        setElectricityGeneratedPVSystem(data);
        setAnnualElectricityInsteadOfGrid(data);
    }, [averageAnnualElectricityRequirements, percentAnnualElectricityFromPV]);

    useEffect(() => {
        if (location) {
            fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${location}`).then(res => res.json()).then(data => {
                if (data && data.length) {
                    setLatitudeLongitude(data[0].lat + "," + data[0].lon);
                }
            })
        }
    }, [location]);

    useEffect(() => {
        fetch("https://renewables.ninja/api/data/pv?local_time=true&format=json&header=true&lat=52.4081812&lon=-1.510477&date_from=2019-01-01&date_to=2019-12-31&dataset=merra2&capacity=1&system_loss=0.1&tracking=0&tilt=35&azim=180&raw=true").then(res => res.json()).then(data => {
            if (data && data.data) {
                let allData = Object.values(data.data);
                let totalElectricity = 0;
                let totalDirectIrradiance = 0;
                let totalDiffuseIrradiance = 0;
                for (let i = 0; i < allData.length; i++) {
                    totalElectricity += allData[i].electricity;
                    totalDirectIrradiance += allData[i].irradiance_direct;
                    totalDiffuseIrradiance += allData[i].irradiance_diffuse;
                }
                setAnnualElectricityGenerationSelectedLocation(totalElectricity);
                setAnnualSolarInsolationSelectedLocation(totalDirectIrradiance + totalDiffuseIrradiance);
            }
        })

    }, [])

    useEffect(() => {
        if(annualSolarInsolationSelectedLocation && solarModuleEfficiency) {
            setAreaOfPVSystem(electricityGeneratedPVSystem / (annualSolarInsolationSelectedLocation * (solarModuleEfficiency) / 100));
        }
    }, [electricityGeneratedPVSystem, annualSolarInsolationSelectedLocation, solarModuleEfficiency]);
    useEffect(() => {
        if(annualElectricityGenerationSelectedLocation) {
            setSizeOfPVSystem(electricityGeneratedPVSystem / annualElectricityGenerationSelectedLocation);
        }
    }, [electricityGeneratedPVSystem, annualElectricityGenerationSelectedLocation]);
    useEffect(() => {
        setInitialInvestmentPVSystem(sizeOfPVSystem * unitInstallationCostPVSystem);
    }, [sizeOfPVSystem, unitInstallationCostPVSystem]);
    useEffect(() => {
        setAnnualOperationalCostSavings(economicParameters?.unitPriceOfElectricity * annualElectricityInsteadOfGrid);
        setAnnualOperationalEmissionSavings(annualElectricityInsteadOfGrid * baseline?.emissionFactorGridElectricity);
    }, [annualElectricityInsteadOfGrid]);
    useEffect(() => {
        setNetPresentValueOperationalEnergy(((1 - Math.pow(1 + (economicParameters?.discountRate / 100), -economicParameters?.yearsOfAbatement)) / (economicParameters?.discountRate / 100)) * annualOperationalCostSavings);
    }, [annualOperationalCostSavings]);
    useEffect(() => {
        setgHGEmissionsElectricityPVSystem((averageAnnualElectricityRequirements - annualElectricityInsteadOfGrid) * baseline?.emissionFactorGridElectricity);
    }, [averageAnnualElectricityRequirements, annualElectricityInsteadOfGrid]);
    useEffect(() => {
        setTotalOperationalEmissionSavingsAbatementPeriod(annualOperationalEmissionSavings * economicParameters?.yearsOfAbatement);
    }, [annualOperationalEmissionSavings]);
    useEffect(() => {
        setTotalOperationalEmissionSavingsAbatementPeriodInTon(totalOperationalEmissionSavingsAbatementPeriod / 1000);
    }, [totalOperationalEmissionSavingsAbatementPeriod]);
    useEffect(() => {
        setCostEffectivenessOperationalEmission((initialInvestmentPVSystem - netPresentValueOperationalEnergy) / totalOperationalEmissionSavingsAbatementPeriodInTon);
    }, [initialInvestmentPVSystem, netPresentValueOperationalEnergy, totalOperationalEmissionSavingsAbatementPeriodInTon])
    useEffect(() => {
        let defaultValue = '';
        if (sizeOfPVSystem <= 4) {
            defaultValue = 1800;
        } else if (sizeOfPVSystem > 4 && sizeOfPVSystem <= 50) {
            defaultValue = 1100;
        } else if (sizeOfPVSystem > 50) {
            defaultValue = 1000;
        }
        setUnitInstallationCostPVSystem(defaultValue);
    }, [sizeOfPVSystem])

    return (
        <>
            <h2 className="form-heading">Solar PV</h2>
            <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
            <div className="main">
                <div>
                    <h2 className="group-heading">General</h2>
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
                                heading="What % of annual electricity you want to get from PV?"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => setPercentAnnualElectricityFromPV(event.target.value)} />
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
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">TECHNICAL ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={electricityGeneratedPVSystem}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Electricity to be generated using PV system"
                                disabled={true}
                                toFixed={true}
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                            <InputWithSideText value={annualElectricityGenerationSelectedLocation}
                                unit="kWh/kWp"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual electricity generation at selected location using 1 kWp system"
                                toFixed={true}
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                disabled={true} />
                            <InputWithSideText value={annualSolarInsolationSelectedLocation}
                                unit="kWh/m2"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual solar insolation at selected location"
                                toFixed={true}
                                disabled={true}
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor" />
                            <InputWithSideText value={solarModuleEfficiency}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="Solar module efficiency"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                onChange={(event) => { setSolarModuleEfficiency(event.target.value) }} />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Size of PV system" unit="kWp" value={sizeOfPVSystem} />
                                <CalculatedData heading="Area of PV system" unit="m2" value={areaOfPVSystem} />
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
                                heading="Unit installation cost of PV system"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setUnitInstallationCostPVSystem(event.target.value) }} />
                            <InputWithSideText value={initialInvestmentPVSystem}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Initial investment for PV system (CAPEX)"
                                toFixed={true}
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setInitialInvestmentPVSystem(event.target.value) }} />
                            <InputWithSideText value={annualElectricityInsteadOfGrid}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                isFixed={true}
                                heading="Annual electricity used from PV system instead of grid ()"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel" />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Annual operational cost savings" unit="£" value={annualOperationalCostSavings} />
                                <CalculatedData heading="Net Present Value of operational energy cost savings (NPV)" unit="£" value={netPresentValueOperationalEnergy} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">ENVIRONMENTAL ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={gHGEmissionsElectricityPVSystem}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="GHG Emissions for electricity in presence of PV system"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                disabled={true} 
                                isFixed={true}/>
                            <InputWithSideText value={annualOperationalEmissionSavings}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual operational emission savings"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                disabled={true}
                                isFixed={true} />
                            <InputWithSideText value={totalOperationalEmissionSavingsAbatementPeriod}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="Total operational emission savings across abatement period"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                disabled={true}
                                isFixed={true} />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Total operational emission savings across abatement period" unit="tCO2e" value={totalOperationalEmissionSavingsAbatementPeriodInTon} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="calculated-main calculated-last">
                    <div className="calculated-container">
                        <CalculatedData heading="Cost effectiveness considering operational emission savings only (i.e. without embodied emissions)" unit="£/tCO2e" value={costEffectivenessOperationalEmission} />
                    </div>
                </div>
                <div className="btn-div">
                    <Button value="Next" onClick={onSave} />
                </div>
            </div >
        </>

    );
};
export default SolarPV;
