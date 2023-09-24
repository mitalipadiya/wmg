import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateLed } from "../../actions/module2";
import { useNavigate } from "react-router-dom";
import InputWithSelect from "../UI/InputWithSelect";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";

const Led = () => {
    const { baseline, economicParameters, led } = useSelector(state => state.module2);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [currentTypeOfLighting, setCurrentTypeOfLighting] = useState(led?.currentTypeOfLighting);
    const [currentLightingPowerRating, setCurrentLightingPowerRating] = useState(led?.currentLightingPowerRating);
    const [numberOfUnits, setNumberOfUnits] = useState(led?.numberOfUnits);
    const [dailyUsage, setDailyUsage] = useState(led?.dailyUsage);
    const [numberOfOperationalDaysInaYear, setNumberOfOperationalDaysInaYear] = useState(led?.numberOfOperationalDaysInaYear);
    const [annualUsage, setAnnualUsage] = useState(led?.annualUsage);
    const [lEDPowerRating, setLEDPowerRating] = useState(led?.lEDPowerRating);
    const [unitCostForLED, setUnitCostForLED] = useState(led?.unitCostForLED);
    const [initialInvestmentForLEDs, setInitialInvestmentForLEDs] = useState(led?.initialInvestmentForLEDs);
    const [costofElectricityWithCurrentLighting, setCostofElectricityWithCurrentLighting] = useState(led?.costofElectricityWithCurrentLighting);
    const [costOfElectricityWithLEDs, setCostOfElectricityWithLEDs] = useState(led?.costOfElectricityWithLEDs);
    const [annualOperationalEmissionSavings, setAnnualOperationalEmissionSavings] = useState(led?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriod, setTotalOperationalEmissionSavingsAcrossAbatementPeriod] = useState(led?.totalOperationalEmissionSavingsAcrossAbatementPeriod);
    const [annualElectricityConsumptionWithCurrentLighting, setAnnualElectricityConsumptionWithCurrentLighting] = useState(led?.annualElectricityConsumptionWithCurrentLighting);
    const [annualElectricityConsumptionWithLEDs, setAnnualElectricityConsumptionWithLEDs] = useState(led?.annualElectricityConsumptionWithLEDs);
    const [annualElectricitySavingsWithLEDs, setAnnualElectricitySavingsWithLEDs] = useState(led?.annualElectricitySavingsWithLEDs);
    const [annualOperationalCostSavings, setAnnualOperationalCostSavings] = useState(led?.annualOperationalCostSavings);
    const [netPresentValueOfOperationalEnergyCostSavings, setNetPresentValueOfOperationalEnergyCostSavings] = useState(led?.netPresentValueOfOperationalEnergyCostSavings);
    const [totalOperationalEmissionSavingsAcrossAbatementPeriodTon, setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon] = useState(led?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon);
    const [costEffectivenessConsideringOperationalEmissionSavingsOnly, setCostEffectivenessConsideringOperationalEmissionSavingsOnly] = useState(led?.costEffectivenessConsideringOperationalEmissionSavingsOnly);

    const lightingTypes = ["Incandescent Bulb", "CFL"];


    useEffect(() => {
        setAnnualUsage(dailyUsage * numberOfOperationalDaysInaYear);
    }, [dailyUsage, numberOfOperationalDaysInaYear])
    useEffect(() => {
        setAnnualElectricityConsumptionWithCurrentLighting(numberOfUnits * currentLightingPowerRating * annualUsage / 1000);
    }, [numberOfUnits, currentLightingPowerRating, annualUsage])
    useEffect(() => {
        setAnnualElectricityConsumptionWithLEDs(lEDPowerRating * numberOfUnits * annualUsage / 1000);
    }, [lEDPowerRating, numberOfUnits, annualUsage])
    useEffect(() => {
        setAnnualElectricitySavingsWithLEDs(annualElectricityConsumptionWithCurrentLighting - annualElectricityConsumptionWithLEDs);
    }, [annualElectricityConsumptionWithCurrentLighting, annualElectricityConsumptionWithLEDs])
    useEffect(() => {
        setInitialInvestmentForLEDs(unitCostForLED * numberOfUnits);
    }, [unitCostForLED, numberOfUnits])
    useEffect(() => {
        setCostofElectricityWithCurrentLighting(annualElectricityConsumptionWithCurrentLighting * economicParameters.unitPriceOfElectricity);
    }, [annualElectricityConsumptionWithCurrentLighting])
    useEffect(() => {
        setCostOfElectricityWithLEDs(annualElectricityConsumptionWithLEDs * economicParameters.unitPriceOfElectricity);
    }, [annualElectricityConsumptionWithLEDs])
    useEffect(() => {
        setAnnualOperationalCostSavings(annualElectricitySavingsWithLEDs * economicParameters.unitPriceOfElectricity);
    }, [annualElectricitySavingsWithLEDs])
    useEffect(() => {
        setAnnualOperationalEmissionSavings(annualElectricitySavingsWithLEDs * baseline.emissionFactorGridElectricity);
    }, [annualElectricitySavingsWithLEDs])
    useEffect(() => {
        setTotalOperationalEmissionSavingsAcrossAbatementPeriod(annualOperationalEmissionSavings * economicParameters.yearsOfAbatement);
    }, [annualOperationalEmissionSavings])
    useEffect(() => {
        setTotalOperationalEmissionSavingsAcrossAbatementPeriodTon(totalOperationalEmissionSavingsAcrossAbatementPeriod / 1000);
    }, [totalOperationalEmissionSavingsAcrossAbatementPeriod])
    useEffect(() => {
        setCostEffectivenessConsideringOperationalEmissionSavingsOnly((initialInvestmentForLEDs - netPresentValueOfOperationalEnergyCostSavings) / totalOperationalEmissionSavingsAcrossAbatementPeriodTon);
    }, [initialInvestmentForLEDs, netPresentValueOfOperationalEnergyCostSavings, totalOperationalEmissionSavingsAcrossAbatementPeriodTon])
    useEffect(() => {
        if (currentTypeOfLighting == "Incandescent Bulb") {
            switch (currentLightingPowerRating) {
                case "40" || 40:
                    setLEDPowerRating(5);
                    break;
                case "60" || 60:
                    setLEDPowerRating(6);
                    break;
                case "75" || 75:
                    setLEDPowerRating(7.5);
                    break;
                case "100" || 100:
                    setLEDPowerRating(10);
                    break;
                case "150" || 150:
                    setLEDPowerRating(15);
                    break;
            }
        } else {
            if (currentLightingPowerRating >= 13 && currentLightingPowerRating <= 18) {
                setLEDPowerRating("6");
            } else if (currentLightingPowerRating > 18 && currentLightingPowerRating <= 22) {
                setLEDPowerRating("7.5");
            } else if (currentLightingPowerRating > 22 && currentLightingPowerRating <= 30) {
                setLEDPowerRating("10");
            } else if (currentLightingPowerRating > 30 && currentLightingPowerRating <= 55) {
                setLEDPowerRating("15");
            }
        }
    }, [currentTypeOfLighting, currentLightingPowerRating])

    useEffect(() => {
        if (currentTypeOfLighting == "Incandescent Bulb") {
            setCurrentLightingPowerRating("60");
        } else {
            setCurrentLightingPowerRating("15");
        }
    }, [currentTypeOfLighting]);

    useEffect(() => {
        setNetPresentValueOfOperationalEnergyCostSavings(((1 - Math.pow(1 + (economicParameters?.discountRate / 100), -economicParameters?.yearsOfAbatement)) / (economicParameters?.discountRate / 100)) * annualOperationalCostSavings);
    }, [annualOperationalCostSavings]);

    const onSave = () => {
        dispatch(updateLed({
            currentTypeOfLighting,
            currentLightingPowerRating,
            numberOfUnits,
            dailyUsage,
            numberOfOperationalDaysInaYear,
            annualUsage,
            lEDPowerRating,
            unitCostForLED,
            initialInvestmentForLEDs,
            costofElectricityWithCurrentLighting,
            costOfElectricityWithLEDs,
            annualOperationalEmissionSavings,
            totalOperationalEmissionSavingsAcrossAbatementPeriod,
            annualElectricityConsumptionWithCurrentLighting,
            annualElectricityConsumptionWithLEDs,
            annualElectricitySavingsWithLEDs,
            annualOperationalCostSavings,
            netPresentValueOfOperationalEnergyCostSavings,
            totalOperationalEmissionSavingsAcrossAbatementPeriodTon,
            costEffectivenessConsideringOperationalEmissionSavingsOnly,
            isComplete: true
        }));
        navigate("./../passive-infrared-sensor")
    }

    return (
        <>
            <div className="tooltip-heading">
                <h2 className="form-heading">LED</h2>
                <OverlayTrigger placement="right" overlay={<Tooltip className="mytooltip">Light Emitting diode is energy efficient technology alternative for lighting.</Tooltip>}>
                    <div className="heading-info">i</div>
                </OverlayTrigger>
            </div>
            {/* <h2 className="form-heading">LED</h2>
            <h3 className="form-subheading">Light Emitting diode is energy efficient technology alternative for lighting.</h3> */}
            <div className="main">
                <div>
                    <h2 className="group-heading">GENERAL</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSelect value={currentTypeOfLighting}
                                values={lightingTypes}
                                heading="Enter current type of lighting"
                                onChange={(event) => { setCurrentTypeOfLighting(event.target.value) }}
                                subHeading="You may wish to change specific type of less efficient lighting units." />
                            <InputWithSideText value={currentLightingPowerRating}
                                unit="W"
                                type="number"
                                placeholder="Enter value"
                                heading="Enter current lighting power rating"
                                subHeading="Check the power rating for the lighting units from your inventory."
                                onChange={(event) => { setCurrentLightingPowerRating(event.target.value) }} />
                            <InputWithSideText value={numberOfUnits}
                                unit=""
                                type="text"
                                placeholder="Select"
                                heading="Number of units"
                                subHeading="Number of units installed in your facility which provide for lighting currently."
                                onChange={(event) => { setNumberOfUnits(event.target.value) }} />
                        </div>
                        <div className="calculated-main">

                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">TECHNICAL ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={dailyUsage}
                                unit="h"
                                type="number"
                                placeholder="Enter value"
                                heading="Daily usage"
                                subHeading="Enter the number of hours the lights are ON in your facility."
                                onChange={(event) => { setDailyUsage(event.target.value) }} />
                            <InputWithSideText value={numberOfOperationalDaysInaYear}
                                unit=""
                                type="number"
                                placeholder="Enter value"
                                heading="Number of operational days in a year"
                                subHeading="Enter the number of days your facility is operational in a year when the lights are ON."
                                onChange={(event) => { setNumberOfOperationalDaysInaYear(event.target.value) }} />
                            <InputWithSideText value={annualUsage}
                                unit="h"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual usage"
                                disabled={true}
                                toFixed={true}
                                subHeading=""
                            />
                            <InputWithSideText value={lEDPowerRating}
                                unit="W"
                                type="number"
                                placeholder="Enter value"
                                heading="LED power rating"
                                subHeading=""
                                onChange={(event) => { setLEDPowerRating(event.target.value) }} />
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Annual electricity consumption with current lighting" unit="kWh" value={annualElectricityConsumptionWithCurrentLighting} />
                                <CalculatedData heading="Annual electricity consumption with LEDs" unit="kWh" value={annualElectricityConsumptionWithLEDs} />
                                <CalculatedData heading="Annual electricity savings with LEDs" unit="kWh" value={annualElectricitySavingsWithLEDs} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">ECONOMIC ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={unitCostForLED}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Unit cost for LED"
                                subHeading=""
                                onChange={(event) => { setUnitCostForLED(event.target.value) }} />
                            <InputWithSideText value={initialInvestmentForLEDs}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Initial investment for LEDs (CAPEX)"
                                subHeading=""
                                disabled={true}
                                toFixed={true} />
                            <InputWithSideText value={costofElectricityWithCurrentLighting}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                toFixed={true}
                                heading="Cost of electricity with current lighting"
                                subHeading="" />

                            <InputWithSideText value={costOfElectricityWithLEDs}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                toFixed={true}
                                heading="Cost of electricity with LEDs"
                                subHeading=""
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
                            <InputWithSideText value={annualOperationalEmissionSavings}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                toFixed={true}
                                heading="Annual operational emission savings"
                                subHeading="" />
                            <InputWithSideText value={totalOperationalEmissionSavingsAcrossAbatementPeriod}
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
                                <CalculatedData heading="Total operational emission savings across abatement period" unit="tCO2e" value={totalOperationalEmissionSavingsAcrossAbatementPeriodTon} decimalCount={1} />

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
export default Led;
