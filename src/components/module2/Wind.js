import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateWind } from "../../actions/module2";
import { useNavigate } from "react-router-dom";
import InputWithSelect from "../UI/InputWithSelect";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";

const Wind = () => {
    const { wind, baseline, economicParameters } = useSelector(state => state.module2);

    const [averageAnnualElectricityRequirements] = useState(baseline?.averageAnnualElectricityConsumption);
    const [percentAnnualElectricityFromWind, setPercentAnnualElectricityFromWind] = useState(wind?.percentAnnualElectricityFromWind);
    const [location, setLocation] = useState(baseline?.location);
    const [latitudeLongitude, setLatitudeLongitude] = useState(baseline?.latitudeLongitude);
    const [height, setHeight] = useState(wind?.height);
    const [turbineModel, setTurbineModel] = useState(wind?.turbineModel);
    const [averageAnnualWindSpeed, setAverageAnnualWindSpeed] = useState(wind?.averageAnnualWindSpeed);
    const [annualGenerationWindSystem, setAnnualGenerationWindSystem] = useState(wind?.annualGenerationWindSystem);
    const [inverterEfficiency, setInverterEfficiency] = useState(wind?.inverterEfficiency);
    const [sizeOfWindSystem, setSizeOfWindSystem] = useState(wind?.sizeOfWindSystem);
    const [electricityUsedFromWindSystemInsteadGrid, setElectricityUsedFromWindSystemInsteadGrid] = useState(wind?.electricityUsedFromWindSystemInsteadGrid);
    const [unitInstallationCost, setUnitInstallationCost] = useState(wind?.unitInstallationCost);
    const [initialInvestmentWindSystem, setInitialInvestmentWindSystem] = useState(wind?.initialInvestmentWindSystem);
    const [annualOperationalCost, setAnnualOperationalCost] = useState(wind?.annualOperationalCost);
    const [netPresentValueOperationalEnergyCostSavings, setNetPresentValueOperationalEnergyCostSavings] = useState(wind?.netPresentValueOperationalEnergyCostSavings);
    const [annualOperationalEmissionSavings, setAnnualOperationalEmissionSavings] = useState(wind?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAbatementPeriod, setTotalOperationalEmissionSavingsAbatementPeriod] = useState(wind?.totalOperationalEmissionSavingsAbatementPeriod);
    const [totalOperationalEmissionSavingsAbatementPeriodTon, setTotalOperationalEmissionSavingsAbatementPeriodTon] = useState(wind?.totalOperationalEmissionSavingsAbatementPeriodTon);
    const [costEffectivenessConsideringOperationalEmissionSavings, setCostEffectivenessConsideringOperationalEmissionSavings] = useState(wind?.costEffectivenessConsideringOperationalEmissionSavings);
    const [turbineModels, setTurbineModels] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSave = () => {
        dispatch(updateWind({
            averageAnnualElectricityRequirements,
            percentAnnualElectricityFromWind,
            location,
            latitudeLongitude,
            height,
            turbineModel,
            averageAnnualWindSpeed,
            annualGenerationWindSystem,
            inverterEfficiency,
            sizeOfWindSystem,
            electricityUsedFromWindSystemInsteadGrid,
            unitInstallationCost,
            initialInvestmentWindSystem,
            annualOperationalCost,
            netPresentValueOperationalEnergyCostSavings,
            annualOperationalEmissionSavings,
            totalOperationalEmissionSavingsAbatementPeriod,
            totalOperationalEmissionSavingsAbatementPeriodTon,
            costEffectivenessConsideringOperationalEmissionSavings,
            isComplete: true
        }));
        navigate("./../solar-pv-bess")

    }
    useEffect(() => {
        fetch('https://renewables.ninja/api/models').then(res => res.json()).then(data => {

            console.log(data)
            if (data && data.length) {
                for (let windData of data) {
                    if (windData.id == "wind") {
                        if (windData.fields.length) {
                            for (let fieldData of windData.fields) {
                                if (fieldData.id == "turbine") {
                                    console.log(fieldData.options)
                                    let turbineValues = fieldData.options.map(entry => entry.value);
                                    setTurbineModels(prev => [...turbineValues]);
                                    return;
                                }
                            }
                        }
                    }
                }
            }
        });
    }, [])
    useEffect(() => {
        const latLong = latitudeLongitude.split(",");
        if (latLong.length > 0 && height && turbineModel) {
            fetch(`https://renewables.ninja/api/data/wind?local_time=true&format=json&header=true&lat=${latLong[0]}&lon=${latLong[1]}&date_from=2019-01-01&date_to=2019-12-31&dataset=merra2&capacity=1&height=${height}&turbine=${turbineModel}&raw=true`).then(res => res.json()).then(data => {
                if (data && data.data) {
                    let allData = Object.values(data.data);
                    let totalWindSpeed = 0;
                    let totalElectricity = 0;
                    for (let i = 0; i < allData.length; i++) {
                        totalElectricity += allData[i].electricity;
                        totalWindSpeed += allData[i].wind_speed;
                    }
                    setAnnualGenerationWindSystem(totalElectricity);
                    setAverageAnnualWindSpeed(totalWindSpeed / allData.length);
                }
            })
        }
    }, [height, turbineModel])
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
    useEffect(() => {
        setTotalOperationalEmissionSavingsAbatementPeriodTon(totalOperationalEmissionSavingsAbatementPeriod / 1000);
    }, [totalOperationalEmissionSavingsAbatementPeriod]);
    useEffect(() => {
        setCostEffectivenessConsideringOperationalEmissionSavings((initialInvestmentWindSystem - netPresentValueOperationalEnergyCostSavings) / totalOperationalEmissionSavingsAbatementPeriodTon);
    }, [initialInvestmentWindSystem, netPresentValueOperationalEnergyCostSavings, totalOperationalEmissionSavingsAbatementPeriodTon]);

    return (
        <>
            {/* <h2 className="form-heading">Wind</h2>
            <h3 className="form-subheading">The wind energy system generates electricity using kinetic energy of wind.</h3> */}
            <div className="tooltip-heading">
                <h2 className="form-heading">Wind</h2>
                <OverlayTrigger placement="right" overlay={<Tooltip className="mytooltip">The wind energy system generates electricity using kinetic energy of wind.</Tooltip>}>
                    <div className="heading-info">i</div>
                </OverlayTrigger>
            </div>
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
                                subHeading="" />
                            <InputWithSideText value={percentAnnualElectricityFromWind}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="What % of annual electricity you want to get from wind?"
                                subHeading="The wind energy system generates electricity based on weather conditions; thus you utilise stand-alone wind system to generate a share of your electricity requirements."
                                onChange={(event) => setPercentAnnualElectricityFromWind(event.target.value)} />
                            <InputWithSideText value={location}
                                unit=""
                                type="text"
                                placeholder="Select"
                                heading="Location"
                                subHeading="This is the location of your facility."
                                disabled={true} />
                            <InputWithSideText value={latitudeLongitude}
                                unit=""
                                type="text"
                                placeholder="Select location to view lattitude, longitude"
                                heading="Lattitude, longitude"
                                subHeading=""
                                disabled={true} />
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
                                subHeading="Height of the wind turbine."
                                onChange={(event) => { setHeight(event.target.value) }} />
                            <InputWithSelect
                                value={turbineModel}
                                values={turbineModels}
                                heading="Turbine model"
                                subHeading="" />
                            <InputWithSideText value={averageAnnualWindSpeed}
                                unit="m/s"
                                type="number"
                                placeholder="Enter value"
                                toFixed={true}
                                heading="Average annual wind speed"
                                subHeading=""
                                onChange={(event) => { setAverageAnnualWindSpeed(event.target.value) }} />
                            <InputWithSideText value={annualGenerationWindSystem}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                toFixed={true}
                                heading="Annual generation per 1kW wind system"
                                onChange={(event) => { setAnnualGenerationWindSystem(event.target.value) }}
                                subHeading="" />
                            <InputWithSideText value={inverterEfficiency}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="Inverter efficiency"
                                subHeading=""
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
                                disabled={true}
                                toFixed={true}
                                heading="Electricity used from wind system instead of grid"
                                subHeading="" />
                            <InputWithSideText value={unitInstallationCost}
                                unit="£/kW"
                                type="number"
                                placeholder="Enter value"
                                heading="Unit installation cost"
                                subHeading=""
                                onChange={(event) => { setUnitInstallationCost(event.target.value) }} />
                            <InputWithSideText value={initialInvestmentWindSystem}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                toFixed={true}
                                heading="Initial investment for Wind system (CAPEX)"
                                subHeading="" />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Annual operational cost savings" unit="£" isStart={true} value={annualOperationalCost} />
                                <CalculatedData heading="Net Present Value of operational energy cost savings (NPV)" isStart={true} unit="£" value={netPresentValueOperationalEnergyCostSavings} />
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
                                disabled={true}
                                toFixed={true}
                                placeholder="Enter value"
                                heading="Annual operational emission savings"
                                subHeading="" />
                            <InputWithSideText value={totalOperationalEmissionSavingsAbatementPeriod}
                                unit="kgCO2e"
                                type="number"
                                disabled={true}
                                toFixed={true}
                                placeholder="Enter value"
                                heading="Total operational emission savings across abatement period"
                                subHeading="" />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Total operational emission savings across abatement period" unit="tCO2e" value={totalOperationalEmissionSavingsAbatementPeriodTon} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="calculated-main calculated-last">
                    <div className="calculated-container">
                        <CalculatedData heading="Cost effectiveness considering operational emission savings only (i.e. without embodied emissions)" unit="tCO2e" value={costEffectivenessConsideringOperationalEmissionSavings} decimalCount={4} />
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
