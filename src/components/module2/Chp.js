import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateBaseline, updateChp } from "../../actions/module2";
import { useNavigate } from "react-router-dom";
import InputWithSelect from "../UI/InputWithSelect";

const Chp = () => {
    const { chp, baseline, economicParameters } = useSelector(state => state.module2);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [averageAnnualElectricityRequirements, setAverageAnnualElectricityRequirements] = useState(baseline?.averageAnnualElectricityConsumption);
    const [numberOfHoursOfElectricityDemand, setNumberOfHoursOfElectricityDemand] = useState(chp?.numberOfHoursOfElectricityDemand);
    const [averageAnnualGasRequirements, setAverageAnnualGasRequirements] = useState(baseline?.averageAnnualGasConsumption);
    const [numberOfHoursOfHeatDemand, setNumberOfHoursOfHeatDemand] = useState(chp?.numberOfHoursOfHeatDemand);
    const [annualElectricityYouWantToGetFromCHPSystem, setAnnualElectricityYouWantToGetFromCHPSystem] = useState(chp?.annualElectricityYouWantToGetFromCHPSystem);
    const [annualHeatYouWantToGetFromCHPSystem, setAnnualHeatYouWantToGetFromCHPSystem] = useState(chp?.annualHeatYouWantToGetFromCHPSystem);
    const [loadsAreToBeSupplied, setLoadsAreToBeSupplied] = useState(chp?.loadsAreToBeSupplied);
    const [cHPFuel, setCHPFuel] = useState(chp?.cHPFuel);
    const [cHPSystem, setCHPSystem] = useState(chp?.cHPSystem);
    const [cHPSystemPrimeMoverTechnology, setCHPSystemPrimeMoverTechnology] = useState(chp?.cHPSystemPrimeMoverTechnology);
    const [averageElectricityLoad, setAverageElectricityLoad] = useState(chp?.averageElectricityLoad);
    const [existingBoilerEfficiency, setExistingBoilerEfficiency] = useState(chp?.existingBoilerEfficiency);
    const [electricalEfficiency, setElectricalEfficiency] = useState(chp?.electricalEfficiency);
    const [thermalEfficiency, setThermalEfficiency] = useState(chp?.thermalEfficiency);
    const [heatToPowerRatioForSite, setHeatToPowerRatioForSite] = useState(chp?.heatToPowerRatioForSite);
    const [averageLoadHeatDemand, setAverageLoadHeatDemand] = useState(chp?.averageLoadHeatDemand);
    const [annualDeliveredHeatDemandUsingCHPSystemInsteadOfGridGas, setAnnualDeliveredHeatDemandUsingCHPSystemInsteadOfGridGas] = useState(chp?.annualDeliveredHeatDemandUsingCHPSystemInsteadOfGridGas);
    const [baseLoadHeatDemand, setBaseLoadHeatDemand] = useState(chp?.baseLoadHeatDemand);
    const [annualElectricityDeliveredUsingCHPSystemInsteadOfGridGas, setAnnualElectricityDeliveredUsingCHPSystemInsteadOfGridGas] = useState(chp?.annualElectricityDeliveredUsingCHPSystemInsteadOfGridGas);
    const [sizeOfCHPSystem, setSizeOfCHPSystem] = useState(chp?.sizeOfCHPSystem);
    const [fuelUsage, setFuelUsage] = useState(chp?.fuelUsage);
    const [unitInstallationCostOfCHPSystem, setUnitInstallationCostOfCHPSystem] = useState(chp?.unitInstallationCostOfCHPSystem);
    const [initialInvestmentForCHPSystem, setInitialInvestmentForCHPSystem] = useState(chp?.initialInvestmentForCHPSystem);
    const [unitPriceOfElectricity, setUnitPriceOfElectricity] = useState(economicParameters?.unitPriceOfElectricity);
    const [annualCostOfElectricityInAbsenceOfCHPSystem, setAnnualCostOfElectricityInAbsenceOfCHPSystem] = useState(chp?.annualCostOfElectricityInAbsenceOfCHPSystem);
    const [unitPriceOfNaturalGas, setUnitPriceOfNaturalGas] = useState(economicParameters?.unitPriceOfGas);
    const [annualCostOfGridGasInAbsenceOfCHPSystem, setAnnualCostOfGridGasInAbsenceOfCHPSystem] = useState(chp?.annualCostOfGridGasInAbsenceOfCHPSystem);
    const [annualCostOfCHPFuel, setAnnualCostOfCHPFuel] = useState(chp?.annualCostOfCHPFuel);
    const [annualCostOfGridElectricityInPresenceOfCHPSystem, setAnnualCostOfGridElectricityInPresenceOfCHPSystem] = useState(chp?.annualCostOfGridElectricityInPresenceOfCHPSystem);
    const [annualCostOfGridGasInPresenceOfCHPSystem, setAnnualCostOfGridGasInPresenceOfCHPSystem] = useState(chp?.annualCostOfGridGasInPresenceOfCHPSystem);
    const [annualOperationalCostSavings, setAnnualOperationalCostSavings] = useState(chp?.annualOperationalCostSavings);
    const [netPresentValueOfOperationalEnergyCostSavings, setNetPresentValueOfOperationalEnergyCostSavings] = useState(chp?.netPresentValueOfOperationalEnergyCostSavings);
    const [emissionFactorForGridGas, setEmissionFactorForGridGas] = useState(baseline?.emissionFactorForGridGas);
    const [gHGEmissionsForHeatInAbsenceOfCHPSystem, setGHGEmissionsForHeatInAbsenceOfCHPSystem] = useState(chp?.gHGEmissionsForHeatInAbsenceOfCHPSystem);
    const [emissionFactorOfGridElectricity, setEmissionFactorGridElectricity] = useState(baseline?.emissionFactorGridElectricity);
    const [gHGEmissionsForElectricityInAbsenceOfCHPSystem, setGHGEmissionsForElectricityInAbsenceOfCHPSystem] = useState(chp?.gHGEmissionsForElectricityInAbsenceOfCHPSystem);
    const [gHGEmissionsForElectricityInPresenceOfCHPSystem, setGHGEmissionsForElectricityInPresenceOfCHPSystem] = useState(chp?.gHGEmissionsForElectricityInPresenceOfCHPSystem);
    const [annualOperationalEmissionSavings, setAnnualOperationalEmissionSavings] = useState(chp?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAbatementPeriod, setTotalOperationalEmissionSavingsAbatementPeriod] = useState(chp?.totalOperationalEmissionSavingsAbatementPeriod);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriodTon, setTotalOperationalEmissionSavingsAbatementPeriodTon] = useState(chp?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon)
    const [costEffectivenessConsideringOperationalEmissionSavingsOnly, setCostEffectivenessConsideringOperationalEmissionSavingsOnly] = useState(chp?.costEffectivenessConsideringOperationalEmissionSavingsOnly);

    const [headToPowerRatioForCalculation, setHeadToPowerRatioForCalculation] = useState();
    const [installationCost, setInstallationCost] = useState();

    const loadsSupplied = ["Hot water only", "Process heat-Medium pressure steam", "Process heat-high temp heat"];

    useEffect(() => {
        setAverageElectricityLoad((averageAnnualElectricityRequirements * (annualElectricityYouWantToGetFromCHPSystem/100)) / numberOfHoursOfElectricityDemand);
    }, [averageAnnualElectricityRequirements, annualElectricityYouWantToGetFromCHPSystem, numberOfHoursOfElectricityDemand]);
    useEffect(() => {
        setHeatToPowerRatioForSite((averageAnnualGasRequirements * (annualHeatYouWantToGetFromCHPSystem/100) * (existingBoilerEfficiency/100)) / (averageAnnualElectricityRequirements * (annualElectricityYouWantToGetFromCHPSystem/100)));
    }, [averageAnnualGasRequirements, annualHeatYouWantToGetFromCHPSystem, existingBoilerEfficiency, averageAnnualElectricityRequirements, annualElectricityYouWantToGetFromCHPSystem]);
    useEffect(() => {
        setAverageLoadHeatDemand((averageAnnualGasRequirements * (existingBoilerEfficiency/100) * (annualHeatYouWantToGetFromCHPSystem/100)) / numberOfHoursOfHeatDemand);
    }, [averageAnnualGasRequirements, existingBoilerEfficiency, annualHeatYouWantToGetFromCHPSystem, numberOfHoursOfHeatDemand]);
    useEffect(() => {
        setBaseLoadHeatDemand(0.6 * averageLoadHeatDemand)
    }, [averageLoadHeatDemand]);
    useEffect(() => {
        setAnnualDeliveredHeatDemandUsingCHPSystemInsteadOfGridGas(baseLoadHeatDemand * numberOfHoursOfHeatDemand)
    }, [baseLoadHeatDemand, numberOfHoursOfHeatDemand]);
    useEffect(() => {
        setAnnualElectricityDeliveredUsingCHPSystemInsteadOfGridGas(annualDeliveredHeatDemandUsingCHPSystemInsteadOfGridGas / headToPowerRatioForCalculation)
    }, [annualDeliveredHeatDemandUsingCHPSystemInsteadOfGridGas]);
    useEffect(() => {
        setSizeOfCHPSystem(baseLoadHeatDemand / headToPowerRatioForCalculation)
    }, [baseLoadHeatDemand, electricalEfficiency]);
    useEffect(() => {
        setFuelUsage((annualDeliveredHeatDemandUsingCHPSystemInsteadOfGridGas / (thermalEfficiency/100)) + (annualElectricityDeliveredUsingCHPSystemInsteadOfGridGas / (electricalEfficiency/100)))
    }, [annualDeliveredHeatDemandUsingCHPSystemInsteadOfGridGas, thermalEfficiency, annualElectricityDeliveredUsingCHPSystemInsteadOfGridGas, electricalEfficiency]);
    useEffect(() => {
        setInitialInvestmentForCHPSystem(unitInstallationCostOfCHPSystem * sizeOfCHPSystem)
    }, [unitInstallationCostOfCHPSystem, sizeOfCHPSystem]);
    useEffect(() => {
        setAnnualCostOfElectricityInAbsenceOfCHPSystem(unitPriceOfElectricity * averageAnnualElectricityRequirements)
    }, [unitPriceOfElectricity, averageAnnualElectricityRequirements]);
    useEffect(() => {
        setAnnualCostOfGridGasInAbsenceOfCHPSystem(unitPriceOfNaturalGas * averageAnnualGasRequirements)
    }, [unitPriceOfNaturalGas, averageAnnualGasRequirements]);
    useEffect(() => {
        setAnnualCostOfCHPFuel(unitPriceOfNaturalGas * fuelUsage)
    }, [unitPriceOfNaturalGas, fuelUsage]);
    useEffect(() => {
        setAnnualCostOfGridGasInPresenceOfCHPSystem(((averageAnnualGasRequirements - (annualDeliveredHeatDemandUsingCHPSystemInsteadOfGridGas / (existingBoilerEfficiency/100))) * unitPriceOfNaturalGas) + annualCostOfCHPFuel)
    }, [averageAnnualElectricityRequirements, annualDeliveredHeatDemandUsingCHPSystemInsteadOfGridGas, existingBoilerEfficiency, unitPriceOfNaturalGas, annualCostOfCHPFuel]);
    useEffect(() => {
        setAnnualOperationalCostSavings((annualCostOfElectricityInAbsenceOfCHPSystem + annualCostOfGridGasInAbsenceOfCHPSystem) - (annualCostOfGridElectricityInPresenceOfCHPSystem + annualCostOfGridGasInPresenceOfCHPSystem))
    }, [annualCostOfElectricityInAbsenceOfCHPSystem, annualCostOfGridGasInAbsenceOfCHPSystem, annualCostOfGridElectricityInPresenceOfCHPSystem, annualCostOfGridGasInPresenceOfCHPSystem]);
    useEffect(() => {
        setGHGEmissionsForHeatInAbsenceOfCHPSystem(averageAnnualGasRequirements * emissionFactorForGridGas)
    }, [averageAnnualGasRequirements, emissionFactorForGridGas]);
    useEffect(() => {
        setGHGEmissionsForElectricityInAbsenceOfCHPSystem(averageAnnualElectricityRequirements * emissionFactorOfGridElectricity)
    }, [averageAnnualElectricityRequirements, emissionFactorOfGridElectricity]);
    useEffect(() => {
        setGHGEmissionsForElectricityInPresenceOfCHPSystem(emissionFactorForGridGas * fuelUsage);
    }, [emissionFactorForGridGas, fuelUsage]);
    useEffect(() => {
        setAnnualOperationalEmissionSavings(gHGEmissionsForHeatInAbsenceOfCHPSystem + gHGEmissionsForElectricityInAbsenceOfCHPSystem - gHGEmissionsForElectricityInPresenceOfCHPSystem)
    }, [gHGEmissionsForHeatInAbsenceOfCHPSystem, gHGEmissionsForElectricityInAbsenceOfCHPSystem, gHGEmissionsForElectricityInPresenceOfCHPSystem]);
    useEffect(() => {
        setTotalOperationalEmissionSavingsAbatementPeriod(annualOperationalEmissionSavings * economicParameters.yearsOfAbatement)
    }, [annualOperationalEmissionSavings]);
    useEffect(() => {
        setTotalOperationalEmissionSavingsAbatementPeriodTon(totalOperationalEmissionSavingsAbatementPeriod / 1000)
    }, [totalOperationalEmissionSavingsAbatementPeriod]);
    useEffect(()=>{
        setAnnualCostOfGridElectricityInPresenceOfCHPSystem((averageAnnualElectricityRequirements - annualElectricityDeliveredUsingCHPSystemInsteadOfGridGas)* unitPriceOfElectricity);
    },[averageAnnualElectricityRequirements, annualElectricityDeliveredUsingCHPSystemInsteadOfGridGas, unitPriceOfElectricity])
    useEffect(() => {
        setNetPresentValueOfOperationalEnergyCostSavings(((1 - Math.pow(1 + (economicParameters?.discountRate / 100), -economicParameters?.yearsOfAbatement)) / (economicParameters?.discountRate / 100)) * annualOperationalCostSavings);
    }, [annualOperationalCostSavings]);
    useEffect(()=>{
        setCostEffectivenessConsideringOperationalEmissionSavingsOnly((initialInvestmentForCHPSystem - netPresentValueOfOperationalEnergyCostSavings)/totalOperationalEmissionSavingsAcrossAbatementPeriodTon);
    },[initialInvestmentForCHPSystem,netPresentValueOfOperationalEnergyCostSavings,totalOperationalEmissionSavingsAcrossAbatementPeriodTon])

    useEffect(()=>{
        if(loadsAreToBeSupplied == "Hot water only") {
            setCHPSystem("Reciprocating engine");
            setCHPSystemPrimeMoverTechnology("Reciprocating engine");
            if(averageElectricityLoad <= 100) {
                setElectricalEfficiency(29.6);
                setThermalEfficiency(53.2);
                setHeadToPowerRatioForCalculation(1.79);
                setInstallationCost(2900);
            }else if(averageElectricityLoad > 100 && averageElectricityLoad <= 633) {
                setElectricalEfficiency(34.5);
                setThermalEfficiency(45.3);
                setHeadToPowerRatioForCalculation(1.32);
                setInstallationCost(2840);
            }else if(averageElectricityLoad > 633 && averageElectricityLoad <= 1141){
                setElectricalEfficiency(37.6);
                setThermalEfficiency(43.0);
                setHeadToPowerRatioForCalculation(1.15);
                setInstallationCost(2370);
            }else if(averageElectricityLoad > 1141 && averageElectricityLoad <= 3325){
                setElectricalEfficiency(40.9);
                setThermalEfficiency(38.6);
                setHeadToPowerRatioForCalculation(0.94);
                setInstallationCost(1800);
            }else if(averageElectricityLoad > 3325 && averageElectricityLoad <= 9341){
                setElectricalEfficiency(41.9);
                setThermalEfficiency(35.0);
                setHeadToPowerRatioForCalculation(0.83);
                setInstallationCost(1430);
            }
        }else if(loadsAreToBeSupplied == "Process heat-Medium pressure steam") {
            setCHPSystem("Pass out steam turbine");
            setCHPSystemPrimeMoverTechnology("Steam turbine");
            if(averageElectricityLoad <= 500) {
                setElectricalEfficiency(6.30);
                setThermalEfficiency(73.30);
                setHeadToPowerRatioForCalculation(11.6);
                setInstallationCost(1136);
            }else if(averageElectricityLoad > 500 && averageElectricityLoad <= 3000) {
                setElectricalEfficiency(4.90);
                setThermalEfficiency(74.80);
                setHeadToPowerRatioForCalculation(15.2);
                setInstallationCost(682);
            }else if(averageElectricityLoad > 3000 && averageElectricityLoad <= 15000){
                setElectricalEfficiency(7.30);
                setThermalEfficiency(72.40);
                setHeadToPowerRatioForCalculation(9.9);
                setInstallationCost(666);
            }
        }else {
            setCHPSystem("Gas turbine");
            setCHPSystemPrimeMoverTechnology("Gas turbine");
            if(averageElectricityLoad <= 3515) {
                setElectricalEfficiency(23.7);
                setThermalEfficiency(41.1);
                setHeadToPowerRatioForCalculation(1.72);
                setInstallationCost(3320);
            }else if(averageElectricityLoad > 3515 && averageElectricityLoad <= 4600) {
                setElectricalEfficiency(25.0);
                setThermalEfficiency(42.7);
                setHeadToPowerRatioForCalculation(1.72);
                setInstallationCost(2817);
            }else if(averageElectricityLoad > 4600 && averageElectricityLoad <= 7965){
                setElectricalEfficiency(29.2);
                setThermalEfficiency(41.4);
                setHeadToPowerRatioForCalculation(1.43);
                setInstallationCost(2017);
            }else if(averageElectricityLoad > 7965 && averageElectricityLoad <= 11350){
                setElectricalEfficiency(28.0);
                setThermalEfficiency(40.2);
                setHeadToPowerRatioForCalculation(1.43);
                setInstallationCost(1798);
            }else if(averageElectricityLoad > 11350 && averageElectricityLoad <= 21745){
                setElectricalEfficiency(33.1);
                setThermalEfficiency(36.7);
                setHeadToPowerRatioForCalculation(1.11);
                setInstallationCost(1474);
            }else if(averageElectricityLoad > 21745 && averageElectricityLoad <= 43069){
                setElectricalEfficiency(35.5);
                setThermalEfficiency(34.4);
                setHeadToPowerRatioForCalculation(0.97);
                setInstallationCost(1276);
            }
        }
    },[loadsAreToBeSupplied]);

    const onSave = () =>{
        dispatch(updateChp({
            averageAnnualElectricityRequirements,
            numberOfHoursOfElectricityDemand,
            averageAnnualGasRequirements,
            numberOfHoursOfHeatDemand,
            annualElectricityYouWantToGetFromCHPSystem,
            annualHeatYouWantToGetFromCHPSystem,
            loadsAreToBeSupplied,
            cHPFuel,
            cHPSystem,
            cHPSystemPrimeMoverTechnology,
            averageElectricityLoad,
            existingBoilerEfficiency,
            electricalEfficiency,
            thermalEfficiency,
            heatToPowerRatioForSite,
            averageLoadHeatDemand,
            annualDeliveredHeatDemandUsingCHPSystemInsteadOfGridGas,
            baseLoadHeatDemand,
            annualElectricityDeliveredUsingCHPSystemInsteadOfGridGas,
            sizeOfCHPSystem,
            fuelUsage,
            unitInstallationCostOfCHPSystem,
            initialInvestmentForCHPSystem,
            unitPriceOfElectricity,
            annualCostOfElectricityInAbsenceOfCHPSystem,
            unitPriceOfNaturalGas,
            annualCostOfGridGasInAbsenceOfCHPSystem,
            annualCostOfCHPFuel,
            annualCostOfGridElectricityInPresenceOfCHPSystem,
            annualCostOfGridGasInPresenceOfCHPSystem,
            annualOperationalCostSavings,
            netPresentValueOfOperationalEnergyCostSavings,
            emissionFactorForGridGas,
            gHGEmissionsForHeatInAbsenceOfCHPSystem,
            emissionFactorOfGridElectricity,
            gHGEmissionsForElectricityInAbsenceOfCHPSystem,
            gHGEmissionsForElectricityInPresenceOfCHPSystem,
            annualOperationalEmissionSavings,
            totalOperationalEmissionSavingsAbatementPeriod,
            totalOperationalEmissionSavingsAcrossAbatementPeriodTon,
            costEffectivenessConsideringOperationalEmissionSavingsOnly,
            isComplete: true
        }));
        navigate("./../led")
    }

    return (
        <>
            <h2 className="form-heading">CHP</h2>
            <h3 className="form-subheading"></h3>
            <div className="main">
                <div>
                    <h2 className="group-heading">GENERAL</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={averageAnnualElectricityRequirements}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Average Annual Electricity Requirements"
                                disabled={true}
                                subHeading="" />
                            <InputWithSideText value={numberOfHoursOfElectricityDemand}
                                unit="h"
                                type="number"
                                placeholder="Enter value"
                                heading="Number of hours of electricity demand"
                                subHeading="Annual value calculated using daily electricity usage hours."
                                onChange={(event) => { setNumberOfHoursOfElectricityDemand(event.target.value) }}
                            />
                            <InputWithSideText value={baseline?.averageAnnualGasConsumption}
                                unit="kWh"
                                type="text"
                                disabled={true}
                                heading="Enter Your Average Annual Gas Requirements"
                                subHeading=""
                            />
                            <InputWithSideText value={numberOfHoursOfHeatDemand}
                                unit="h"
                                type="text"
                                placeholder="Enter value"
                                heading="Number of hours of heat demand"
                                subHeading="Annual value calculated using daily heating requirement hours."
                                onChange={(event) => { setNumberOfHoursOfHeatDemand(event.target.value) }} />
                            <InputWithSideText value={annualElectricityYouWantToGetFromCHPSystem}
                                unit="%"
                                type="text"
                                placeholder="Enter value"
                                heading="What % of annual electricity you want to get from CHP system?"
                                subHeading=""
                                onChange={(event) => { setAnnualElectricityYouWantToGetFromCHPSystem(event.target.value) }} />
                            <InputWithSideText value={annualHeatYouWantToGetFromCHPSystem}
                                unit="%"
                                type="text"
                                placeholder="Enter value"
                                heading="What % of annual heat you want to get from CHP system?"
                                subHeading=""
                                onChange={(event) => { setAnnualHeatYouWantToGetFromCHPSystem(event.target.value) }} />
                            <InputWithSelect value={loadsAreToBeSupplied}
                                values={loadsSupplied}
                                heading="Which loads are to be supplied?"
                                subHeading=""
                                onChange={(event) => { setLoadsAreToBeSupplied(event.target.value) }} />
                            <InputWithSideText value={cHPFuel}
                                unit=""
                                type="text"
                                heading="CHP fuel"
                                subHeading=""
                            />
                        </div>
                        <div className="calculated-main">

                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">TECHNICAL ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={cHPSystem}
                                unit=""
                                type="text"
                                placeholder="Enter value"
                                heading="CHP System"
                                // auto populate  based on adjoining table                                
                                // disabled={true}
                                subHeading=""
                                onChange={(event) => { setCHPSystem(event.target.value) }} />
                            <InputWithSideText value={cHPSystemPrimeMoverTechnology}
                                unit=""
                                type="text"
                                // auto populate  based on adjoining table                                
                                placeholder="Enter value"
                                heading="CHP System- Prime mover technology"
                                subHeading=""
                                onChange={(event) => { setCHPSystemPrimeMoverTechnology(event.target.value) }} />
                            <InputWithSideText value={averageElectricityLoad}
                                unit="kW"
                                type="number"
                                placeholder="Enter value"
                                heading="Average electricity load"
                                subHeading=""
                                disabled={true}
                                toFixed={true}
                            />
                            <InputWithSideText value={existingBoilerEfficiency}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="Existing boiler efficiency"
                                subHeading=""
                                onChange={(event) => { setExistingBoilerEfficiency(event.target.value) }} />
                            <InputWithSideText value={electricalEfficiency}
                                unit="%"
                                type="number"
                                // auto populate on adjoining table
                                placeholder="Enter value"
                                heading="Electrical efficiency"
                                subHeading=""
                                onChange={(event) => { setElectricalEfficiency(event.target.value) }} />
                            <InputWithSideText value={thermalEfficiency}
                                unit="%"
                                type="number"
                                // auto popluate on adjoining table
                                placeholder="Enter value"
                                heading="Thermal efficiency"
                                subHeading=""
                                onChange={(event) => { setThermalEfficiency(event.target.value) }} />
                            <InputWithSideText value={heatToPowerRatioForSite}
                                unit=""
                                type="number"
                                placeholder="Enter value"
                                heading="Heat to power ratio for site"
                                disabled={true}
                                toFixed={true}
                                subHeading=""
                            />
                            <InputWithSideText value={averageLoadHeatDemand}
                                unit="kWth"
                                type="number"
                                placeholder="Enter value"
                                heading="Average load -heat demand"
                                disabled={true}
                                toFixed={true}
                                subHeading=""
                            />
                            <InputWithSideText value={baseLoadHeatDemand}
                                unit="kWth"
                                type="number"
                                disabled={true}
                                toFixed={true}
                                placeholder="Enter value"
                                heading="Base load -head demand "
                                subHeading=""/>
                            <InputWithSideText value={annualDeliveredHeatDemandUsingCHPSystemInsteadOfGridGas}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                toFixed={true}
                                heading="Annual delivered heat demand using CHP system instead of grid gas"
                                subHeading=""
                            />
                            <InputWithSideText value={annualElectricityDeliveredUsingCHPSystemInsteadOfGridGas}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                toFixed={true}
                                heading="Annual electricity delivered using CHP system instead of grid gas"
                                subHeading=""
                            />


                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Size of CHP System" unit="kWe" value={sizeOfCHPSystem} decimalCount={1}/>
                                <CalculatedData heading="Fuel usage " unit="kWh/year" value={fuelUsage} decimalCount={0}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">ECONOMIC ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={unitInstallationCostOfCHPSystem}
                                unit="£/kW"
                                type="number"
                                // value based on adjoining table
                                placeholder="Enter value"
                                heading="Unit installation cost of CHP system"
                                subHeading=""
                                onChange={(event) => { setUnitInstallationCostOfCHPSystem(event.target.value) }} />
                            <InputWithSideText value={initialInvestmentForCHPSystem}
                                unit="£"
                                type="number"
                                disabled={true}
                                toFixed={true}
                                placeholder="Enter value"
                                heading="Initial investment for CHP system(CAPEX)"
                                subHeading=""
                            />
                            <InputWithSideText value={unitPriceOfElectricity}
                                unit="£/kWh"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                heading="Unit Price of electricity"
                                subHeading=""
                            />
                            <InputWithSideText value={annualCostOfElectricityInAbsenceOfCHPSystem}
                                unit="£"
                                type="number"
                                disabled={true}
                                placeholder="Enter value"
                                heading="Annual cost of electricity in absence of CHP system"
                                subHeading=""
                            />
                            <InputWithSideText value={unitPriceOfNaturalGas}
                                unit="£/kWh"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                heading="Unit Price of natural gas"
                                subHeading=""
                            />
                            <InputWithSideText value={annualCostOfGridGasInAbsenceOfCHPSystem}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                heading="Annual cost of grid gas in absence of CHP system"
                                subHeading=""
                            />
                            <InputWithSideText value={annualCostOfCHPFuel}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual cost of CHP fuel (natural gas)"
                                disabled={true}
                                toFixed={true}
                                subHeading=""
                            />
                            <InputWithSideText value={annualCostOfGridElectricityInPresenceOfCHPSystem}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                toFixed={true}
                                heading="Annual cost of grid electricity in presence of CHP system"
                                subHeading=""
                            />
                            <InputWithSideText value={annualCostOfGridGasInPresenceOfCHPSystem}
                                unit="£/kWh"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                toFixed={true}
                                heading="Annual cost of grid gas in presence of CHP system"
                                subHeading=""/>

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
                            <InputWithSideText value={emissionFactorForGridGas}
                                unit="kgCO2e/kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Emission factor of grid gas (kgCO2e/kWh)"
                                subHeading=""
                                disabled={true} />
                            <InputWithSideText value={gHGEmissionsForHeatInAbsenceOfCHPSystem}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="GHG Emissions for heat in absence of CHP system (kgCO2e)"
                                subHeading=""
                                disabled={true} />
                            <InputWithSideText value={emissionFactorOfGridElectricity}
                                unit="kgCO2e/kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Emission factor of electricity (kgCO2e/kWh)"
                                subHeading=""
                                disabled={true} />
                            <InputWithSideText value={gHGEmissionsForElectricityInAbsenceOfCHPSystem}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="GHG Emissions for electricity in absence of CHP system (kgCO2e)"
                                subHeading=""
                                disabled={true}
                                toFixed={true}
                            />
                            <InputWithSideText value={gHGEmissionsForElectricityInPresenceOfCHPSystem}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="GHG Emissions for electricity and heat in presence of CHP system (kgCO2e)"
                                subHeading=""
                                disabled={true}
                                toFixed={true}
                            />
                            <InputWithSideText value={annualOperationalEmissionSavings}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual operational emission savings (kgCO2e)"
                                subHeading=""
                                disabled={true}
                                toFixed={true} />
                            <InputWithSideText value={totalOperationalEmissionSavingsAbatementPeriod}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="Total operational emission savings across abatement period (kgCO2e)"
                                subHeading=""
                                disabled={true}
                                toFixed={true}
                            />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Total operational emission savings across abatement period" unit="tCO2e" value={totalOperationalEmissionSavingsAcrossAbatementPeriodTon} decimalCount={1}/>
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
export default Chp;
