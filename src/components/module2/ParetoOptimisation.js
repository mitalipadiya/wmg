import { useState } from "react"
import "./Module2.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./EmissionSavings.css"
import { formatValueWithTwoDecimals, formatValueWithoutDecimals } from "../../services/module2.service";
import TimelineChart from "../UI/TimelineChart";
import ProgressBar from "../UI/ProgressBar";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";

const ParetoOptimisation = () => {
    const [maccData, setMaccData] = useState([]);
    const [chartData, setChartData] = useState();
    const { solarPV, solarPvBess, passiveInfraredSensor, smartMetersGas, led, wind, smartMetersElectricity, voltageOptimisation, biomass, solarThermal, industrialHeatPump, energyManagementSystem, chp, technologies } = useSelector(state => state.module2);

    useEffect(() => {
        let data = [];
        if(technologies) {
            if(technologies.solarPV) {
                let costEffectiveness = formatValueWithTwoDecimals(solarPV?.costEffectivenessOperationalEmission, 0);
                if(costEffectiveness < 0) {
                    data.push({
                        technologyOptions: "Solar PhotoVoltaics(PV)",
                        initialInvestment: formatValueWithTwoDecimals(solarPV?.initialInvestmentPVSystem, 0),
                        annualOperations: formatValueWithTwoDecimals(solarPV?.annualOperationalCostSavings, 0),
                        netPresent: formatValueWithTwoDecimals(solarPV?.netPresentValueOperationalEnergy, 0),
                        netSavings: formatValueWithTwoDecimals(solarPV?.initialInvestmentPVSystem - solarPV?.netPresentValueOperationalEnergy, 0),
                        totalOperational: formatValueWithoutDecimals(solarPV?.totalOperationalEmissionSavingsAbatementPeriodInTon, 0),
                        costEffectiveness: costEffectiveness,
                        color: '#79D4F1'
                    })
                }
            }
            if(technologies.wind) {
                let costEffectiveness = formatValueWithTwoDecimals(wind?.costEffectivenessConsideringOperationalEmissionSavings, 0);
                if(costEffectiveness < 0) {
                    data.push({
                        technologyOptions: "Wind",
                        initialInvestment: formatValueWithTwoDecimals(wind?.initialInvestmentWindSystem, 0),
                        annualOperations: formatValueWithTwoDecimals(wind?.annualOperationalCost, 0),
                        netPresent: formatValueWithTwoDecimals(wind?.netPresentValueOperationalEnergyCostSavings, 0),
                        netSavings: formatValueWithTwoDecimals(wind?.initialInvestmentWindSystem - wind?.netPresentValueOperationalEnergyCostSavings, 0),
                        totalOperational: formatValueWithoutDecimals(wind?.totalOperationalEmissionSavingsAbatementPeriodTon, 0),
                        costEffectiveness: costEffectiveness,
                        color: '#FBD07B'
                    })
                }
            }
            if(technologies.solarPvBess) {
                let costEffectiveness = formatValueWithTwoDecimals(solarPvBess?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 0);
                if(costEffectiveness < 0) {
                    data.push({
                        technologyOptions: "Solar Photovoltaics+Battery Energy Storage System",
                        initialInvestment: formatValueWithTwoDecimals(solarPvBess?.initialInvestmentPVSystem + solarPvBess?.initialInvestmentForBESSSystem, 0),
                        annualOperations: formatValueWithTwoDecimals(solarPvBess?.annualOperationalCostSavings, 0),
                        netPresent: formatValueWithTwoDecimals(solarPvBess?.netPresentValueOfOperationalEnergyCostSavings, 0),
                        netSavings: formatValueWithTwoDecimals(solarPvBess?.initialInvestmentPVSystem + solarPvBess?.initialInvestmentForBESSSystem - solarPvBess?.netPresentValueOfOperationalEnergyCostSavings, 0),
                        totalOperational: formatValueWithoutDecimals(solarPvBess?.totalOperationalEmissionSavingsAbatementPeriodTon, 0),
                        costEffectiveness: costEffectiveness,
                        color: '#DFE566'
                    })
                }
            }
            if(technologies.led) {
                let costEffectiveness = formatValueWithTwoDecimals(led?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 0);
                if(costEffectiveness < 0) {
                    data.push({
                        technologyOptions: "Light Emitting Diodes (LED)",
                        initialInvestment: formatValueWithTwoDecimals(led?.initialInvestmentForLEDs, 0),
                        annualOperations: formatValueWithTwoDecimals(led?.annualOperationalCostSavings, 0),
                        netPresent: formatValueWithTwoDecimals(led?.netPresentValueOfOperationalEnergyCostSavings, 0),
                        netSavings: formatValueWithTwoDecimals(led?.initialInvestmentForLEDs - led?.netPresentValueOfOperationalEnergyCostSavings, 0),
                        totalOperational: formatValueWithoutDecimals(led?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 0),
                        costEffectiveness: costEffectiveness,
                        color: '#9092BE'
                    })
                }
            }
            if(technologies.smartMetersElectricity) {
                let costEffectiveness = formatValueWithTwoDecimals(smartMetersElectricity?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 0);
                if(costEffectiveness < 0) {
                    data.push({
                        technologyOptions: "Smart meter for electricity",
                        initialInvestment: formatValueWithTwoDecimals(smartMetersElectricity?.initialInvestmentForElectricitySmartMeter, 0),
                        annualOperations: formatValueWithTwoDecimals(smartMetersElectricity?.annualOperationalCostSavings, 0),
                        netPresent: formatValueWithTwoDecimals(smartMetersElectricity?.netPresentValueOfOperationalEnergyCostSavings, 0),
                        netSavings: formatValueWithTwoDecimals(smartMetersElectricity?.initialInvestmentForElectricitySmartMeter - smartMetersElectricity?.netPresentValueOfOperationalEnergyCostSavings, 0),
                        totalOperational: formatValueWithoutDecimals(smartMetersElectricity?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 0),
                        costEffectiveness: costEffectiveness,
                        color: '#F4A3A0'
                    })
                }
            }
            if(technologies.passiveInfraredSensor) {
                let costEffectiveness = formatValueWithTwoDecimals(passiveInfraredSensor?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 0);
                if(costEffectiveness < 0) {
                    data.push({
                        technologyOptions: "Passive Infrared Sensors",
                        initialInvestment: formatValueWithTwoDecimals(passiveInfraredSensor?.initialInvestmentForPir, 0),
                        annualOperations: formatValueWithTwoDecimals(passiveInfraredSensor?.annualOperationalCostSavings, 0),
                        netPresent: formatValueWithTwoDecimals(passiveInfraredSensor?.netPresentValueOfOperationalEnergyCostSaings, 0),
                        netSavings: formatValueWithTwoDecimals(passiveInfraredSensor?.initialInvestmentForPir - passiveInfraredSensor?.netPresentValueOfOperationalEnergyCostSaings, 0),
                        totalOperational: formatValueWithoutDecimals(passiveInfraredSensor?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 0),
                        costEffectiveness: costEffectiveness,
                        color: '#AC9A81'
                    })
                }
            }
            if(technologies.voltageOptimisation) {
                let costEffectiveness = formatValueWithTwoDecimals(voltageOptimisation?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 0);
                if(costEffectiveness < 0) {
                    data.push({
                        technologyOptions: "Voltage Optimisation",
                        initialInvestment: formatValueWithTwoDecimals(voltageOptimisation?.initialInvestmentForVoltageOptimisation, 0),
                        annualOperations: formatValueWithTwoDecimals(voltageOptimisation?.annualOperationalCostSavings, 0),
                        netPresent: formatValueWithTwoDecimals(voltageOptimisation?.netPresentValueOfOperationalEnergyCostSavings, 0),
                        netSavings: formatValueWithTwoDecimals(voltageOptimisation?.initialInvestmentForVoltageOptimisation - voltageOptimisation?.netPresentValueOfOperationalEnergyCostSavings, 0),
                        totalOperational: formatValueWithoutDecimals(voltageOptimisation?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 0),
                        costEffectiveness: costEffectiveness,
                        color: '#BA80C6'
                    })
                }
            }
            if(technologies.biomass) {
                let costEffectiveness = formatValueWithTwoDecimals(biomass?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 0);
                if(costEffectiveness < 0) {
                    data.push({
                        technologyOptions: "Biomass",
                        initialInvestment: formatValueWithTwoDecimals(biomass?.initialInvestmentForBiomassSystem, 0),
                        annualOperations: formatValueWithTwoDecimals(biomass?.annualOperationalCostSavings, 0),
                        netPresent: formatValueWithTwoDecimals(biomass?.netPresentValueOfOperationalEnergyCostSavings, 0),
                        netSavings: formatValueWithTwoDecimals(biomass?.initialInvestmentForBiomassSystem - biomass?.netPresentValueOfOperationalEnergyCostSavings, 0),
                        totalOperational: formatValueWithoutDecimals(biomass?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 0),
                        costEffectiveness: costEffectiveness,
                        color: '#B0E195'
                    })
                }
            }
            if(technologies.solarThermal) {
                let costEffectiveness = formatValueWithTwoDecimals(solarThermal?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 0);
                if(costEffectiveness < 0) {
                    data.push({
                        technologyOptions: "Solar thermal",
                        initialInvestment: formatValueWithTwoDecimals(solarThermal?.initialInvestmentForSolarThermalSystem, 0),
                        annualOperations: formatValueWithTwoDecimals(solarThermal?.annualOperationalCostSavings, 0),
                        netPresent: formatValueWithTwoDecimals(solarThermal?.netPresentValueOfOperationalEnergyCostSavings, 0),
                        netSavings: formatValueWithTwoDecimals(solarThermal?.initialInvestmentForSolarThermalSystem - solarThermal?.netPresentValueOfOperationalEnergyCostSavings, 0),
                        totalOperational: formatValueWithoutDecimals(solarThermal?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 0),
                        costEffectiveness: costEffectiveness,
                        color: '#95B2E1'
                    })
                }
            }
            if(technologies.industrialHeatPump) {
                let costEffectiveness = formatValueWithTwoDecimals(industrialHeatPump?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 0);
                if(costEffectiveness < 0) {
                    data.push({
                        technologyOptions: "Industrial heat pump (IHP)",
                        initialInvestment: formatValueWithTwoDecimals(industrialHeatPump?.initialInvestmentForIHP1 + industrialHeatPump?.initialInvestmentForIHP2, 0),
                        annualOperations: formatValueWithTwoDecimals(industrialHeatPump?.annualOperationalCostSavings, 0),
                        netPresent: formatValueWithTwoDecimals(industrialHeatPump?.netPresentValueOfOperationalEnergyCostSavings, 0),
                        netSavings: formatValueWithTwoDecimals(industrialHeatPump?.initialInvestmentForIHP1 + industrialHeatPump?.initialInvestmentForIHP2 - industrialHeatPump?.netPresentValueOfOperationalEnergyCostSavings, 0),
                        totalOperational: formatValueWithoutDecimals(industrialHeatPump?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 0),
                        costEffectiveness: costEffectiveness,
                        color: '#E1BE95'
                    })
                }
            }
            if(technologies.smartMetersGas) {
                let costEffectiveness = formatValueWithTwoDecimals(smartMetersGas?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 0);
                if(costEffectiveness < 0) {
                    data.push({
                        technologyOptions: "Smart Meters for Gas",
                        initialInvestment: formatValueWithTwoDecimals(smartMetersGas?.initialInvestmentForGasSmartMeter, 0),
                        annualOperations: formatValueWithTwoDecimals(smartMetersGas?.annualOperationalCostSavings, 0),
                        netPresent: formatValueWithTwoDecimals(smartMetersGas?.netPresentValueOfOperationalEnergyCostSavings, 0),
                        netSavings: formatValueWithTwoDecimals(smartMetersGas?.initialInvestmentForGasSmartMeter - smartMetersGas?.netPresentValueOfOperationalEnergyCostSavings, 0),
                        totalOperational: formatValueWithoutDecimals(smartMetersGas?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 0),
                        costEffectiveness: costEffectiveness,
                        color: '#A8A8A9'
                    })
                }

            }
            if(technologies.energyManagementSystem) {
                let costEffectiveness = formatValueWithTwoDecimals(energyManagementSystem?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 0);
                if(costEffectiveness < 0) {
                    data.push({
                        technologyOptions: "Building energy management system",
                        initialInvestment: formatValueWithTwoDecimals(energyManagementSystem?.initialInvestmentForBEMS, 0),
                        annualOperations: formatValueWithTwoDecimals(energyManagementSystem?.totalAnnualOperationalCostSavings, 0),
                        netPresent: formatValueWithTwoDecimals(energyManagementSystem?.netPresentValueOfOperationalEnergyCostSavings, 0),
                        netSavings: formatValueWithTwoDecimals(energyManagementSystem?.initialInvestmentForBEMS - energyManagementSystem?.netPresentValueOfOperationalEnergyCostSavings, 0),
                        totalOperational: formatValueWithoutDecimals(energyManagementSystem?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 0),
                        costEffectiveness: costEffectiveness,
                        color: '#F7A47B'
                    })
                }
            }
            if(technologies.chp) {
                let costEffectiveness = formatValueWithTwoDecimals(chp?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 0);
                if(costEffectiveness < 0) {
                    data.push({
                        technologyOptions: "Combined Heat and power (CHP)",
                        initialInvestment: formatValueWithTwoDecimals(chp?.initialInvestmentForCHPSystem, 0),
                        annualOperations: formatValueWithTwoDecimals(chp?.annualOperationalCostSavings, 0),
                        netPresent: formatValueWithTwoDecimals(chp?.netPresentValueOfOperationalEnergyCostSavings, 0),
                        netSavings: formatValueWithTwoDecimals(chp?.initialInvestmentForCHPSystem - chp?.netPresentValueOfOperationalEnergyCostSavings, 0),
                        totalOperational: formatValueWithoutDecimals(chp?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 0),
                        costEffectiveness: costEffectiveness,
                        color: '#E195DE'
                    })
                }
            }
        }
        let categoryData = [];
        for(let i=0;i<data.length;i++) {
            if(data[i].netSavings < 0) {
                let newEntry = {
                    key: data[i].technologyOptions,
                    value: data[i].totalOperational
                };
                categoryData.push(newEntry);
            }
        }
        setChartData([...categoryData.sort( function ( a, b ) { return b.value - a.value; } )]);
        setMaccData(data);
    }, [])
    return <div>
        <div className="tooltip-heading">
            <h2 className="form-heading">Pareto optimisation</h2>
            <OverlayTrigger placement="right" overlay={<Tooltip className="mytooltip">It is also called Pareto efficiency or Pareto optimality and is named after Vilfredo Pareto. The concept is a state of allocation of resources in which it is impossible to make any one individual better off without making at least one individual worse off. It is employed when a solution is required in the midst of conflicting objectives where solutions are chosen such that there are reasonable trade-offs among different objectives. With the Pareto Optimisation scheme, rather than generating a single optimal solution, a myriad of solutions are generated that satisfy Pareto Optimality criterion. The criterion is such that a solution point P is accepted only if there are no solutions better than P with respect to all the objectives.</Tooltip>}>
                <div className="heading-info">i</div>
            </OverlayTrigger>
        </div>
        {/* <h2 className="form-heading">Pareto optimisation</h2>
        <h3 className="form-subheading">It is also called Pareto efficiency or Pareto optimality and is named after Vilfredo Pareto. The concept is a state of allocation of resources in which it is impossible to make any one individual better off without making at least one individual worse off. It is employed when a solution is required in the midst of conflicting objectives where solutions are chosen such that there are reasonable trade-offs among different objectives. With the Pareto Optimisation scheme, rather than generating a single optimal solution, a myriad of solutions are generated that satisfy Pareto Optimality criterion. The criterion is such that a solution point P is accepted only if there are no solutions better than P with respect to all the objectives.</h3> */}
        <div className="main">
            <div>
                <div className="group-heading">TABULAR VIEW</div>
                <table className="table">
                    <thead className="table-heading-box">
                        <tr>
                            <th></th>
                            <th>Initial investment (Capital cost) (£)</th>
                            <th>Annual Oprational Cost Savings (£)</th>
                            <th>Net Present Value of operational cost savings (£)</th>
                            <th>Net Savings or Net Cost (£)</th>
                            <th>Total operational emission savings across abatement period (tCO2e) </th>
                            <th>Cost effectiveness considering operational emission savings only (i.e. without embodied emissions) (£/tCO2e)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            maccData.map((data, index) => {

                                return <tr className="table-data">
                                    <td>{data.technologyOptions} </td>
                                    <td>{data.initialInvestment}</td>
                                    <td> {data.annualOperations}</td>
                                    <td>{data.netPresent}</td>
                                    <td>{data.netSavings}</td>
                                    <td>{data.totalOperational}</td>
                                    <td>{data.costEffectiveness}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <div className="group-heading">GRAPHICAL VIEW</div>
                <ProgressBar chartData={chartData}/>
            </div>
        </div>
    </div>
}
export default ParetoOptimisation;