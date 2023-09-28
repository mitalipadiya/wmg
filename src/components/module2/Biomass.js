import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBiomass } from "../../actions/module2";
import InputWithSelect from "../UI/InputWithSelect";

const Biomass = () => {
    const { biomass, baseline, economicParameters } = useSelector(state => state.module2);
    const { navigation } = useSelector(state => state.module2);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const wLocation = useLocation();

    const [averageAnnualGasRequirements] = useState(baseline?.averageAnnualGasConsumption);
    const [annualHeatYouWantToGetFromBiomass, setAnnualHeatYouWantToGetFromBiomass] = useState(biomass?.annualHeatYouWantToGetFromBiomass);
    const [whichLoadsAreToBeSupplied, setWhichLoadsAreToBeSupplied] = useState(biomass?.whichLoadsAreToBeSupplied);
    const [biomassBoilerStrategy, setBiomassBoilerStrategy] = useState(biomass?.biomassBoilerStrategy);
    const [capacityFactor, setCapacityFactor] = useState(biomass?.capacityFactor);
    const [biomassFuel, setBiomassFuel] = useState(biomass?.biomassFuel);
    const [existingBoilerEfficiency, setExistingBoilerEfficiency] = useState(biomass?.existingBoilerEfficiency);
    const [hoursOfHeatDemand, setHoursOfHeatDemand] = useState(biomass?.hoursOfHeatDemand);
    const [netCalorificValueOfDryFuel, setNetCalorificValueOfDryFuel] = useState(biomass?.netCalorificValueOfDryFuel);
    const [moistureContent, setMoistureContent] = useState(biomass?.moistureContent);
    const [efficiencyOfBiomassPlant, setEfficiencyOfBiomassPlant] = useState(biomass?.efficiencyOfBiomassPlant);
    const [annualDeliveredHeatDemand, setAnnualDeliveredHeatDemand] = useState(biomass?.annualDeliveredHeatDemand);
    const [averageLoad, setAverageLoad] = useState(biomass?.averageLoad);
    const [peakLoad, setPeakLoad] = useState(biomass?.peakLoad);
    const [annualDeliveredHeatDemandUsingBiomassBoiler, setAnnualDeliveredHeatDemandUsingBiomassBoiler] = useState(biomass?.annualDeliveredHeatDemandUsingBiomassBoiler);
    const [sizeOfBiomassBoiler, setSizeOfBiomassBoiler] = useState(biomass?.sizeOfBiomassBoiler);
    const [netCVOfFuelAsReceived, setNetCVOfFuelAsReceived] = useState(biomass?.netCVOfFuelAsReceived);
    const [deliveredHeatPerUnitMassOfFuel, setDeliveredHeatPerUnitMassOfFuel] = useState(biomass?.deliveredHeatPerUnitMassOfFuel);
    const [fuelUsage, setFuelUsage] = useState(biomass?.fuelUsage)
    const [unitInstallationCostOfBiomassBoiler, setUnitInstallationCostOfBiomassBoiler] = useState(biomass?.unitInstallationCostOfBiomassBoiler);
    const [initialInvestmentForBiomassSystem, setInitialInvestmentForBiomassSystem] = useState(biomass?.initialInvestmentForBiomassSystem);
    const [unitPriceOfFuel, setUnitPriceOfFuel] = useState(biomass?.unitPriceOfFuel);
    const [annualCostOfBiomassFuel, setAnnualCostOfBiomassFuel] = useState(biomass?.annualCostOfBiomassFuel);
    const [unitPriceOfGridGas, setUnitPriceOfGridGas] = useState(economicParameters?.unitPriceOfGas);
    const [annualCostOfGridGasInPresenceOfBiomassBoiler, setAnnualCostOfGridGasInPresenceOfBiomassBoiler] = useState(biomass?.annualCostOfGridGasInPresenceOfBiomassBoiler);
    const [annualCostOfGridGasInAbsenceOfBiomassBoile, setAnnualCostOfGridGasInAbsenceOfBiomassBoile] = useState(biomass?.annualCostOfGridGasInAbsenceOfBiomassBoile);
    const [annualOperationalCostSavings, setAnnualOperationalCostSavings] = useState(biomass?.annualOperationalCostSavings);
    const [netPresentValueOfOperationalEnergyCostSavings, setNetPresentValueOfOperationalEnergyCostSavings] = useState(biomass?.areaOfPVSystem);
    const [emissionFactorOfGridGas, setEmissionFactorOfGridGas] = useState(baseline?.emissionFactorForGridGas);
    const [emissionFactorOfBiomassFuel, setEmissionFactorOfBiomassFuel] = useState(biomass?.emissionFactorOfBiomassFuel);
    const [gHGEmissionsForHeatInAbsenceOfBiomassSystem, setGHGEmissionsForHeatInAbsenceOfBiomassSystem] = useState(biomass?.gHGEmissionsForHeatInAbsenceOfBiomassSystem);
    const [gHGEmissionsForHeatInPresenceOfBiomassSystem, setGHGEmissionsForHeatInPresenceOfBiomassSystem] = useState(biomass?.gHGEmissionsForHeatInPresenceOfBiomassSystem);
    const [annualOperationalEmissionSavings, setAnnualOperationalEmissionSavings] = useState(biomass?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriod, setTotalOperationalEmissionSavingsAcrossAbatementPeriod] = useState(biomass?.totalOperationalEmissionSavingsAcrossAbatementPeriod);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriodTon, setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon] = useState(biomass?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon);
    const [costEffectivenessConsideringOperationalEmissionSavingsOnly, setCostEffectivenessConsideringOperationalEmissionSavingsOnly] = useState(biomass?.costEffectivenessConsideringOperationalEmissionSavingsOnly)
    const loads = ["Space heating", "Hot water", "Process heat"];
    const boilerStrategy = ["Peak load", "Optimum load", "base load"];
    const biomassFuelData = ["Wood chip", "Wood Pellet"];

    useEffect(() => {
        setAnnualDeliveredHeatDemand(averageAnnualGasRequirements * (existingBoilerEfficiency / 100));
    }, [averageAnnualGasRequirements, existingBoilerEfficiency]);
    useEffect(() => {
        if (hoursOfHeatDemand) {
            setAverageLoad(annualDeliveredHeatDemand / hoursOfHeatDemand);
        }
    }, [annualDeliveredHeatDemand, hoursOfHeatDemand]);
    useEffect(() => {
        if (capacityFactor) {
            setPeakLoad(averageLoad / (capacityFactor / 100));
        }
    }, [averageLoad, capacityFactor])
    useEffect(() => {
        setAnnualDeliveredHeatDemandUsingBiomassBoiler(annualDeliveredHeatDemand * (annualHeatYouWantToGetFromBiomass / 100));
    }, [annualDeliveredHeatDemand, annualHeatYouWantToGetFromBiomass])
    useEffect(() => {
        setNetCVOfFuelAsReceived((netCalorificValueOfDryFuel * (1 - (moistureContent / 100))) - (0.68 * (moistureContent / 100)));
    }, [netCalorificValueOfDryFuel, moistureContent])
    useEffect(() => {
        setDeliveredHeatPerUnitMassOfFuel(netCVOfFuelAsReceived * (efficiencyOfBiomassPlant / 100));
    }, [netCVOfFuelAsReceived, efficiencyOfBiomassPlant])
    useEffect(() => {
        if (deliveredHeatPerUnitMassOfFuel) {
            setFuelUsage((annualDeliveredHeatDemandUsingBiomassBoiler / deliveredHeatPerUnitMassOfFuel) / 2000);
        }
    }, [annualDeliveredHeatDemandUsingBiomassBoiler, deliveredHeatPerUnitMassOfFuel])
    useEffect(() => {
        setSizeOfBiomassBoiler(peakLoad);
    }, [peakLoad])
    useEffect(() => {
        setInitialInvestmentForBiomassSystem(unitInstallationCostOfBiomassBoiler * sizeOfBiomassBoiler);
    }, [unitInstallationCostOfBiomassBoiler, sizeOfBiomassBoiler])

    useEffect(() => {
        setAnnualCostOfBiomassFuel(fuelUsage * unitPriceOfFuel);
    }, [fuelUsage, unitPriceOfFuel])
    useEffect(() => {
        setAnnualCostOfGridGasInPresenceOfBiomassBoiler((averageAnnualGasRequirements * (1 - (annualHeatYouWantToGetFromBiomass / 100))) * unitPriceOfGridGas);
    }, [averageAnnualGasRequirements, annualHeatYouWantToGetFromBiomass, unitPriceOfGridGas])
    useEffect(() => {
        setAnnualCostOfGridGasInAbsenceOfBiomassBoile(averageAnnualGasRequirements * unitPriceOfGridGas);
    }, [averageAnnualGasRequirements, unitPriceOfGridGas])
    useEffect(() => {
        setAnnualOperationalCostSavings(annualCostOfGridGasInAbsenceOfBiomassBoile - (annualCostOfGridGasInPresenceOfBiomassBoiler + annualCostOfBiomassFuel));
    }, [annualCostOfGridGasInAbsenceOfBiomassBoile, annualCostOfGridGasInPresenceOfBiomassBoiler, annualCostOfBiomassFuel])
    useEffect(() => {
        setGHGEmissionsForHeatInAbsenceOfBiomassSystem(averageAnnualGasRequirements * emissionFactorOfGridGas);
    }, [averageAnnualGasRequirements, emissionFactorOfGridGas])
    useEffect(() => {
        setGHGEmissionsForHeatInPresenceOfBiomassSystem((averageAnnualGasRequirements * (1 - (annualHeatYouWantToGetFromBiomass / 100)) * emissionFactorOfGridGas) + (averageAnnualGasRequirements * (annualHeatYouWantToGetFromBiomass / 100) * emissionFactorOfBiomassFuel));
    }, [averageAnnualGasRequirements, annualHeatYouWantToGetFromBiomass, emissionFactorOfGridGas, emissionFactorOfBiomassFuel])
    useEffect(() => {
        setAnnualOperationalEmissionSavings(gHGEmissionsForHeatInAbsenceOfBiomassSystem - gHGEmissionsForHeatInPresenceOfBiomassSystem);
    }, [gHGEmissionsForHeatInAbsenceOfBiomassSystem, gHGEmissionsForHeatInPresenceOfBiomassSystem])
    useEffect(() => {
        setTotalOperationalEmissionSavingsAcrossAbatementPeriod(annualOperationalEmissionSavings * economicParameters.yearsOfAbatement);
    }, [annualOperationalEmissionSavings])
    useEffect(() => {
        setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon(totalOperationalEmissionSavingsAcrossAbatementPeriod / 1000);
    }, [totalOperationalEmissionSavingsAcrossAbatementPeriod])
    useEffect(() => {
        if (economicParameters?.discountRate) {
            setNetPresentValueOfOperationalEnergyCostSavings(((1 - Math.pow(1 + (economicParameters?.discountRate / 100), -economicParameters?.yearsOfAbatement)) / (economicParameters?.discountRate / 100)) * annualOperationalCostSavings);
        }
    }, [annualOperationalCostSavings]);
    useEffect(() => {
        if (totalOperationalEmissionSavingsAcrossAbatementPeriodTon) {
            setCostEffectivenessConsideringOperationalEmissionSavingsOnly((initialInvestmentForBiomassSystem - netPresentValueOfOperationalEnergyCostSavings) / totalOperationalEmissionSavingsAcrossAbatementPeriodTon);
        }
    }, [initialInvestmentForBiomassSystem, netPresentValueOfOperationalEnergyCostSavings, totalOperationalEmissionSavingsAcrossAbatementPeriodTon])
    useEffect(() => {
        setNetCalorificValueOfDryFuel(5.25);
        if (biomassFuel == "Wood chip") {
            setMoistureContent(35);
        } else {
            setMoistureContent(8);
        }
    }, [biomassFuel])

    const onSave = () => {
        dispatch(updateBiomass({
            averageAnnualGasRequirements,
            annualHeatYouWantToGetFromBiomass,
            whichLoadsAreToBeSupplied,
            biomassBoilerStrategy,
            capacityFactor,
            biomassFuel,
            existingBoilerEfficiency,
            hoursOfHeatDemand,
            netCalorificValueOfDryFuel,
            moistureContent,
            efficiencyOfBiomassPlant,
            annualDeliveredHeatDemand,
            averageLoad,
            peakLoad,
            annualDeliveredHeatDemandUsingBiomassBoiler,
            sizeOfBiomassBoiler,
            netCVOfFuelAsReceived,
            deliveredHeatPerUnitMassOfFuel,
            fuelUsage,
            unitInstallationCostOfBiomassBoiler,
            initialInvestmentForBiomassSystem,
            unitPriceOfFuel,
            annualCostOfBiomassFuel,
            unitPriceOfGridGas,
            annualCostOfGridGasInPresenceOfBiomassBoiler,
            annualCostOfGridGasInAbsenceOfBiomassBoile,
            annualOperationalCostSavings,
            netPresentValueOfOperationalEnergyCostSavings,
            emissionFactorOfGridGas,
            emissionFactorOfBiomassFuel,
            gHGEmissionsForHeatInAbsenceOfBiomassSystem,
            gHGEmissionsForHeatInPresenceOfBiomassSystem,
            annualOperationalEmissionSavings,
            totalOperationalEmissionSavingsAcrossAbatementPeriod,
            totalOperationalEmissionSavingsAcrossAbatementPeriodTon,
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

    return (
        <>
            <h2 className="form-heading">Biomass</h2>
            <h3 className="form-subheading"></h3>
            <div className="main">
                <div>
                    <h2 className="group-heading">GENERAL</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={baseline.averageAnnualGasConsumption}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Average Annual Gas Requirements"
                                disabled={true}
                                subHeading="" />
                            <InputWithSideText value={annualHeatYouWantToGetFromBiomass}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="What % of annual heat you want to get from Biomass?"
                                subHeading=""
                                onChange={(event) => { setAnnualHeatYouWantToGetFromBiomass(event.target.value) }}
                            />
                            <InputWithSelect value={whichLoadsAreToBeSupplied}
                                values={loads}
                                heading="Which loads are to be supplied?"
                                subHeading=""
                                onChange={(event) => { setWhichLoadsAreToBeSupplied(event.target.value) }} />
                            <InputWithSelect value={biomassBoilerStrategy}
                                values={boilerStrategy}
                                heading="Biomass boiler strategy"
                                subHeading=""
                                onChange={(event) => { setBiomassBoilerStrategy(event.target.value) }} />
                            <InputWithSideText value={capacityFactor}
                                unit="%"
                                type="text"
                                placeholder="Enter the value"
                                heading="Capacity factor"
                                subHeading=""
                                onChange={(event) => { setCapacityFactor(event.target.value) }} />
                            <InputWithSelect value={biomassFuel}
                                values={biomassFuelData}
                                placeholder="Enter the value"
                                heading="Biomass fuel"
                                subHeading=""
                                onChange={(event) => { setBiomassFuel(event.target.value) }} />
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
                            <InputWithSideText value={hoursOfHeatDemand}
                                unit="H"
                                type="number"
                                placeholder="Enter value"
                                heading="Hours of heat demand"
                                subHeading=""
                                onChange={(event) => { setHoursOfHeatDemand(event.target.value) }} />
                            <InputWithSideText value={netCalorificValueOfDryFuel}
                                unit="kWh/kg"
                                type="number"
                                placeholder="Enter value"
                                heading="Net Calorific Value of dry fuel"
                                subHeading=""
                                onChange={(event) => { setNetCalorificValueOfDryFuel(event.target.value) }} />
                            <InputWithSideText value={moistureContent}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="Moisture Content"
                                subHeading=""
                                onChange={(event) => { setMoistureContent(event.target.value) }} />
                            <InputWithSideText value={efficiencyOfBiomassPlant}
                                unit="%"
                                type="number"
                                placeholder="Enter value"
                                heading="Efficiency of biomass plant"
                                subHeading=""
                                onChange={(event) => { setEfficiencyOfBiomassPlant(event.target.value) }} />
                            <InputWithSideText value={annualDeliveredHeatDemand}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual delivered heat demand"
                                disabled={true}
                                toFixed={true}
                                subHeading=""
                            />
                            <InputWithSideText value={averageLoad}
                                unit="kW"
                                type="number"
                                placeholder="Enter value"
                                heading="Average Load"
                                disabled={true}
                                toFixed={true}
                                subHeading=""
                            />
                            <InputWithSideText value={peakLoad}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Peak load"
                                disabled={true}
                                toFixed={true}
                                subHeading=""
                            />
                            <InputWithSideText value={annualDeliveredHeatDemandUsingBiomassBoiler}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual delivered heat demand using biomass boiler instead of grid gas"
                                disabled={true}
                                toFixed={true}
                                subHeading=""
                            />
                            <InputWithSideText value={netCVOfFuelAsReceived}
                                unit="kW/kg"
                                type="number"
                                placeholder="Enter value"
                                heading="Net CV of fuel as received"
                                disabled={true}
                                toFixed={true}
                                subHeading=""
                            />
                            <InputWithSideText value={deliveredHeatPerUnitMassOfFuel}
                                unit="kWh/kg"
                                type="number"
                                placeholder="Enter value"
                                heading="Delivered heat per unit mass of fuel"
                                disabled={true}
                                toFixed={true}
                                subHeading=""
                            />

                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Size of Biomass boiler" unit="kW" value={peakLoad} />
                                <CalculatedData heading="Fuel Usage" unit="tonne/year" value={fuelUsage} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">ECONOMIC ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={unitInstallationCostOfBiomassBoiler}
                                unit="£/kW"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                toFixed={true}
                                heading="Unit installation cost of Biomass boiler"
                                subHeading="" />
                            <InputWithSideText value={initialInvestmentForBiomassSystem}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                toFixed={true}
                                heading="Initial investment for Biomass system (CAPEX)"
                                subHeading=""
                            />
                            <InputWithSideText value={unitPriceOfFuel}
                                unit="£/tonne"
                                type="number"
                                disabled={true}
                                placeholder="Enter value"
                                heading="Unit Price of fuel"
                                subHeading="" />
                            <InputWithSideText value={annualCostOfBiomassFuel}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual cost of biomass fuel"
                                disabled={true}
                                toFixed={true}
                                subHeading=""
                            />
                            <InputWithSideText value={unitPriceOfGridGas}
                                unit="£/kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Unit price of grid gas"
                                subHeading=""
                                disabled={true}
                            />
                            <InputWithSideText value={annualCostOfGridGasInPresenceOfBiomassBoiler}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual cost of grid gas in presence of biomass boiler"
                                subHeading=""
                                disabled={true}
                                toFixed={true} />
                            <InputWithSideText value={annualCostOfGridGasInAbsenceOfBiomassBoile}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual cost of grid gas in absence of biomass boile"
                                subHeading=""
                                disabled={true}
                                toFixed={true}
                            />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Annual operational cost savings" isStart={true} unit="£" value={annualOperationalCostSavings} />
                                <CalculatedData heading="Net Present Value of operational energy cost savings (NPV)" isStart={true} unit="£" value={netPresentValueOfOperationalEnergyCostSavings} />
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
                                disabled={true} />
                            <InputWithSideText value={emissionFactorOfBiomassFuel}
                                unit="kgCO2e/kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Emission factor of biomass fuel"
                                subHeading="" />
                            <InputWithSideText value={gHGEmissionsForHeatInAbsenceOfBiomassSystem}
                                unit="kgCO2e"
                                type="number"
                                disabled={true}
                                toFixed={true}
                                placeholder="Enter value"
                                heading="GHG Emissions for heat in absence of Biomass system"
                                subHeading=""
                            />
                            <InputWithSideText value={gHGEmissionsForHeatInPresenceOfBiomassSystem}
                                unit="kgCO2e"
                                type="number"
                                disabled={true}
                                toFixed={true}
                                placeholder="Enter value"
                                heading="GHG Emissions for heat in presence of Biomass system"
                                subHeading=""
                            />
                            <InputWithSideText value={annualOperationalEmissionSavings}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual operational emission savings"
                                disabled={true}
                                toFixed={true}
                                subHeading="" />
                            <InputWithSideText value={totalOperationalEmissionSavingsAcrossAbatementPeriod}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="Total operational emission savings across abatement period"
                                subHeading=""
                                disabled={true}
                                toFixed={true} />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Total operational emission savings across abatement period" unit="tCO2e" value={totalOperationalEmissionSavingsAcrossAbatementPeriodTon} decimalCount={4} />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="calculated-main calculated-last">
                    <div className="calculated-container">
                        <CalculatedData heading="Cost effectiveness considering operational emission savings only" unit="tCO2e" value={costEffectivenessConsideringOperationalEmissionSavingsOnly} />
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