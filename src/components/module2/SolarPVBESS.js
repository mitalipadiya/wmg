import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateBaseline, updateSolarPvBess } from "../../actions/module2";
import { useLocation, useNavigate } from "react-router-dom";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";

const SolarPVBESS = () => {
    const { solarPvBess, baseline, economicParameters } = useSelector(state => state.module2);
    const { navigation } = useSelector(state => state.module2);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const wLocation = useLocation();

    const [averageAnnualElectricityRequirements, setAverageAnnualElectricityRequirements] = useState(baseline?.averageAnnualElectricityConsumption);
    const [percentAnnualElectricityFromPVBESS, setPercentAnnualElectricityFromPVBESS] = useState(solarPvBess?.percentAnnualElectricityFromPVBESS);
    const [numberOfDaysOfOperationInAYear, setNumberOfDaysOfOperationInAYear] = useState(solarPvBess?.numberOfDaysOfOperationInAYear);
    const [location, setLocation] = useState(baseline?.location)
    const [latitudeLongitude, setLatitudeLongitude] = useState(baseline?.latitudeLongitude);
    const [dailyElectricityRequirementUsingPVBESSSystem, setDailyElectricityRequirementUsingPVBESSSystem] = useState(solarPvBess?.dailyElectricityRequirementUsingPVBESSSystem);
    const [dailyAverageElectricityGeneration, setDailyAverageElectricityGeneration] = useState(solarPvBess?.dailyAverageElectricityGeneration);
    const [averageDailySolarInsolation, setAverageDailySolarInsolation] = useState(solarPvBess?.averageDailySolarInsolation);
    const [solarModuleEfficiency, setSolarModuleEfficiency] = useState(solarPvBess?.solarModuleEfficiency);
    const [batteryEfficiency, setBatteryEfficiency] = useState(solarPvBess?.batteryEfficiency);
    const [depthOfDischargeOfBattery, setDepthOfDischargeOfBattery] = useState(solarPvBess?.depthOfDischargeOfBattery);
    const [numberOfDaysOfAutonomy, setNumberOfDaysOfAutonomy] = useState(solarPvBess?.numberOfDaysOfAutonomy);
    const [sizeOfPVSystem, setSizeOfPVSystem] = useState(solarPvBess?.sizeOfPVSystem);
    const [areaOfPVSystem, setAreaOfPVSystem] = useState(solarPvBess?.areaOfPVSystem);
    const [batterySize, setBatterySize] = useState(solarPvBess?.batterySize);
    const [unitInstallationCostPVSystem, setUnitInstallationCostPVSystem] = useState(solarPvBess?.unitInstallationCostPVSystem);
    const [initialInvestmentPVSystem, setInitialInvestmentPVSystem] = useState(solarPvBess?.initialInvestmentPVSystem);
    const [unitPriceOfLithiumIonBatteryPack, setUnitPriceOfLithiumIonBatteryPack] = useState(solarPvBess?.unitPriceOfLithiumIonBatteryPack);
    const [initialInvestmentForBESSSystem, setInitialInvestmentForBESSSystem] = useState(solarPvBess?.initialInvestmentForBESSSystem);
    const [annualElectricityUsedFromPVBESSSystemInsteadOfGrid, setAnnualElectricityUsedFromPVBESSSystemInsteadOfGrid] = useState(solarPvBess?.annualElectricityUsedFromPVBESSSystemInsteadOfGrid);
    const [annualOperationalCostSavings, setAnnualOperationalCostSavings] = useState(solarPvBess?.annualOperationalCostSavings);
    const [netPresentValueOfOperationalEnergyCostSavings, setNetPresentValueOfOperationalEnergyCostSavings] = useState(solarPvBess?.netPresentValueOfOperationalEnergyCostSavings);
    const [gHGEmissionsElectricityPVSystem, setGHGEmissionsElectricityPVSystem] = useState(solarPvBess?.gHGEmissionsElectricityPVSystem);
    const [annualOperationalEmissionSavings, setAnnualOperationalEmissionSavings] = useState(solarPvBess?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAbatementPeriod, setTotalOperationalEmissionSavingsAbatementPeriod] = useState(solarPvBess?.totalOperationalEmissionSavingsAbatementPeriod);
    const [totalOperationalEmissionSavingsAbatementPeriodTon, setTotalOperationalEmissionSavingsAbatementPeriodTon] = useState(solarPvBess?.totalOperationalEmissionSavingsAbatementPeriodTon);
    const [costEffectivenessConsideringOperationalEmissionSavingsOnly, setCostEffectivenessConsideringOperationalEmissionSavingsOnly] = useState(solarPvBess?.costEffectivenessConsideringOperationalEmissionSavingsOnly);

    useEffect(() => {
        const latLong = latitudeLongitude.split(",");
        if (latLong.length > 1) {
            fetch(`https://renewables.ninja/api/data/pv?local_time=true&format=json&header=true&lat=${latLong[0]}&lon=${latLong[1]}&date_from=2019-01-01&date_to=2019-12-31&dataset=merra2&capacity=1&system_loss=0.1&tracking=0&tilt=35&azim=180&raw=true`).then(res => res.json()).then(data => {
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
                    if (allData.length) {
                        setDailyAverageElectricityGeneration(totalElectricity / allData.length);
                        setAverageDailySolarInsolation((totalDirectIrradiance + totalDiffuseIrradiance) / allData.length);
                    }
                }
            })
        }
    }, [])

    useEffect(() => {
        setDailyElectricityRequirementUsingPVBESSSystem(averageAnnualElectricityRequirements * (percentAnnualElectricityFromPVBESS / 100) / 300);
    }, [averageAnnualElectricityRequirements, percentAnnualElectricityFromPVBESS]);
    useEffect(() => {
        if (dailyAverageElectricityGeneration) {
            setSizeOfPVSystem(dailyElectricityRequirementUsingPVBESSSystem / dailyAverageElectricityGeneration);
        }
    }, [dailyElectricityRequirementUsingPVBESSSystem, dailyAverageElectricityGeneration])
    useEffect(() => {
        if (averageDailySolarInsolation && solarModuleEfficiency) {
            setAreaOfPVSystem(dailyElectricityRequirementUsingPVBESSSystem / (averageDailySolarInsolation * (solarModuleEfficiency / 100)));
        }
    }, [dailyElectricityRequirementUsingPVBESSSystem, averageDailySolarInsolation, solarModuleEfficiency]);
    useEffect(() => {
        if (batteryEfficiency && depthOfDischargeOfBattery) {
            setBatterySize((dailyElectricityRequirementUsingPVBESSSystem / ((batteryEfficiency * depthOfDischargeOfBattery) / 10000)) * (1 + parseInt(numberOfDaysOfAutonomy)));
        }
    }, [dailyElectricityRequirementUsingPVBESSSystem, batteryEfficiency, depthOfDischargeOfBattery, numberOfDaysOfAutonomy])
    useEffect(() => {
        setInitialInvestmentPVSystem(sizeOfPVSystem * unitInstallationCostPVSystem);
    }, [sizeOfPVSystem, unitInstallationCostPVSystem])
    useEffect(() => {
        setInitialInvestmentForBESSSystem(batterySize * unitPriceOfLithiumIonBatteryPack);
    }, [batterySize, unitPriceOfLithiumIonBatteryPack])
    useEffect(() => {
        setAnnualElectricityUsedFromPVBESSSystemInsteadOfGrid(averageAnnualElectricityRequirements * (percentAnnualElectricityFromPVBESS / 100));
    }, [averageAnnualElectricityRequirements, percentAnnualElectricityFromPVBESS])
    useEffect(() => {
        setAnnualOperationalCostSavings(economicParameters.unitPriceOfElectricity * annualElectricityUsedFromPVBESSSystemInsteadOfGrid);
    }, [annualElectricityUsedFromPVBESSSystemInsteadOfGrid])
    useEffect(() => {
        setGHGEmissionsElectricityPVSystem((averageAnnualElectricityRequirements - annualElectricityUsedFromPVBESSSystemInsteadOfGrid) * baseline.emissionFactorGridElectricity);
    }, [averageAnnualElectricityRequirements, annualElectricityUsedFromPVBESSSystemInsteadOfGrid])
    useEffect(() => {
        setAnnualOperationalEmissionSavings((annualElectricityUsedFromPVBESSSystemInsteadOfGrid) * baseline.emissionFactorGridElectricity);
    }, [annualElectricityUsedFromPVBESSSystemInsteadOfGrid])
    useEffect(() => {
        setTotalOperationalEmissionSavingsAbatementPeriod(annualOperationalEmissionSavings * economicParameters.yearsOfAbatement);
    }, [annualOperationalEmissionSavings])
    useEffect(() => {
        setTotalOperationalEmissionSavingsAbatementPeriodTon(totalOperationalEmissionSavingsAbatementPeriod / 1000);
    }, [totalOperationalEmissionSavingsAbatementPeriod])
    useEffect(() => {
        if (economicParameters?.discountRate) {
            setNetPresentValueOfOperationalEnergyCostSavings(((1 - Math.pow(1 + (economicParameters?.discountRate / 100), -economicParameters?.yearsOfAbatement)) / (economicParameters?.discountRate / 100)) * annualOperationalCostSavings);
        }
    }, [annualOperationalCostSavings]);
    useEffect(() => {
        if (totalOperationalEmissionSavingsAbatementPeriodTon) {
            setCostEffectivenessConsideringOperationalEmissionSavingsOnly(((initialInvestmentPVSystem + initialInvestmentForBESSSystem) - netPresentValueOfOperationalEnergyCostSavings) / totalOperationalEmissionSavingsAbatementPeriodTon);
        }
    }, [initialInvestmentPVSystem, initialInvestmentForBESSSystem, netPresentValueOfOperationalEnergyCostSavings, totalOperationalEmissionSavingsAbatementPeriodTon])

    const onSave = () => {
        dispatch(updateSolarPvBess({
            averageAnnualElectricityRequirements,
            percentAnnualElectricityFromPVBESS,
            numberOfDaysOfOperationInAYear,
            location,
            latitudeLongitude,
            dailyElectricityRequirementUsingPVBESSSystem,
            dailyAverageElectricityGeneration,
            averageDailySolarInsolation,
            solarModuleEfficiency,
            batteryEfficiency,
            depthOfDischargeOfBattery,
            numberOfDaysOfAutonomy,
            sizeOfPVSystem,
            areaOfPVSystem,
            batterySize,
            unitInstallationCostPVSystem,
            initialInvestmentPVSystem,
            unitPriceOfLithiumIonBatteryPack,
            initialInvestmentForBESSSystem,
            annualElectricityUsedFromPVBESSSystemInsteadOfGrid,
            annualOperationalCostSavings,
            netPresentValueOfOperationalEnergyCostSavings,
            gHGEmissionsElectricityPVSystem,
            annualOperationalEmissionSavings,
            totalOperationalEmissionSavingsAbatementPeriod,
            totalOperationalEmissionSavingsAbatementPeriodTon,
            costEffectivenessConsideringOperationalEmissionSavingsOnly,
            isComplete: true
        }));
        if (wLocation.pathname.startsWith("/module2/")) {
            let routes = wLocation.pathname.split("/");
            if (routes.length == 3) {
                const index = navigation.indexOf(routes[2]);
                if (index < navigation.length - 1) {
                    navigate(`./../${navigation[index + 1]}`);
                } else {
                    navigate("./../emission-savings");
                }
            }
        }
    }
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
            <div className="tooltip-heading">
                <h2 className="form-heading">Solar PV+BESS</h2>
                <OverlayTrigger placement="right" overlay={<Tooltip className="mytooltip">Solar photovoltaic (PV) and Battery energy storage system (BESS) is a hybrid energy system where PV generates electricity during sunshine hours and BESS stores it for usage during non-sunshine hours.</Tooltip>}>
                    <div className="heading-info">i</div>
                </OverlayTrigger>
            </div>
            {/* <h2 className="form-heading">Solar PV+BESS</h2>
            <h3 className="form-subheading">Solar photovoltaic (PV) and Battery energy storage system (BESS) is a hybrid energy system where PV generates electricity during sunshine hours and BESS stores it for usage during non-sunshine hours.</h3> */}
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
                            <InputWithSideText value={percentAnnualElectricityFromPVBESS}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="What % of annual electricity you want to get from PV+BESS? "
                                subHeading="As output of the PV+BESS hybrid system depends on the diurnal and seasonal changes; you can utilise share of your electricity requirements using the PV+BESS system to avoid oversizing or undersizing."
                                onChange={(event) => { setPercentAnnualElectricityFromPVBESS(event.target.value) }} />
                            <InputWithSideText value={numberOfDaysOfOperationInAYear}
                                unit=""
                                type="text"
                                placeholder="Select"
                                heading="Number of days of operation in a year"
                                subHeading=""
                                onChange={(event) => { setNumberOfDaysOfOperationInAYear(event.target.value) }} />
                            <InputWithSideText value={location}
                                unit=""
                                type="text"
                                placeholder="Select"
                                heading="Location"
                                subHeading=""
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
                            <InputWithSideText value={dailyElectricityRequirementUsingPVBESSSystem}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Daily electricity requirement using PV+BESS system "
                                disabled={true}
                                toFixed={true}
                                subHeading="" />
                            <InputWithSideText
                                value={dailyAverageElectricityGeneration}
                                // calculated from renewablesninja
                                unit="kWh/kWp"
                                type="number"
                                placeholder="Enter value"
                                toFixed={true}
                                onChange={(event) => { setDailyAverageElectricityGeneration(event.target.value) }}
                                heading="Daily average electricity generation at selected location using 1 kWp system"
                                subHeading="" />
                            <InputWithSideText
                                value={averageDailySolarInsolation}
                                // calculated from renewablesninja
                                unit="kWh/m2"
                                type="number"
                                placeholder="Enter value"
                                toFixed={true}
                                onChange={(event) => { setAverageDailySolarInsolation(event.target.value) }}
                                heading="Average daily solar insolation at selected location"
                                subHeading=""
                            />
                            <InputWithSideText value={solarModuleEfficiency}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="Solar module efficiency"
                                subHeading=""
                                onChange={(event) => { setSolarModuleEfficiency(event.target.value) }} />
                            <InputWithSideText value={batteryEfficiency}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="Battery efficiency"
                                subHeading=""
                                onChange={(event) => { setBatteryEfficiency(event.target.value) }} />
                            <InputWithSideText value={depthOfDischargeOfBattery}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="Depth of discharge of battery"
                                subHeading=""
                                onChange={(event) => { setDepthOfDischargeOfBattery(event.target.value) }} />
                            <InputWithSideText value={numberOfDaysOfAutonomy}
                                unit=""
                                type="number"
                                placeholder="Enter value"
                                heading="Number of days of autonomy"
                                subHeading=""
                                onChange={(event) => { setNumberOfDaysOfAutonomy(event.target.value) }} />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Size of PV system" unit="kWp" value={sizeOfPVSystem} />
                                <CalculatedData heading="Area of PV system" unit="m2" value={areaOfPVSystem} />
                                <CalculatedData heading="Battery Size" unit="kWh" value={batterySize} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">ECONOMIC ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={unitInstallationCostPVSystem}
                                unit="£/kWp"
                                type="number"
                                placeholder="Enter value"
                                heading="Unit installation cost of PV system"
                                subHeading=""
                                onChange={(event) => { setUnitInstallationCostPVSystem(event.target.value) }} />
                            <InputWithSideText value={initialInvestmentPVSystem}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                toFixed={true}
                                heading="Initial investment for PV system (CAPEX)"
                                subHeading="" />
                            <InputWithSideText value={unitPriceOfLithiumIonBatteryPack}
                                unit="£/kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Unit price of Lithium ion battery pack"
                                subHeading=""
                                onChange={(event) => { setUnitPriceOfLithiumIonBatteryPack(event.target.value) }} />
                            <InputWithSideText value={initialInvestmentForBESSSystem}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Initial investment for BESS system (CAPEX)"
                                subHeading=""
                                disabled={true}
                                toFixed={true} />
                            <InputWithSideText value={annualElectricityUsedFromPVBESSSystemInsteadOfGrid}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                toFixed={true}
                                heading="Annual electricity used from PV+BESS system instead of grid"
                                subHeading="" />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Annual operational cost savings" unit="£" isStart={true} value={annualOperationalCostSavings} />
                                <CalculatedData heading="Net Present Value of operational energy cost savings (NPV)" isStart={true} unit="£" value={netPresentValueOfOperationalEnergyCostSavings} />
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
                                disabled={true}
                                toFixed={true}
                                heading="GHG Emissions for electricity in presence of PV system"
                                subHeading=""
                            />
                            <InputWithSideText value={annualOperationalEmissionSavings}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                toFixed={true}
                                heading="Annual operational emission savings"
                                subHeading=""
                            />
                            <InputWithSideText value={totalOperationalEmissionSavingsAbatementPeriod}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                toFixed={true}
                                heading="Total operational emission savings across abatement period"
                                subHeading=""
                            />

                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Total operational emission savings across abatement period" unit="tCO2e" value={totalOperationalEmissionSavingsAbatementPeriodTon} decimalCount={4} />

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
            </div >
        </>

    );
};
export default SolarPVBESS;
