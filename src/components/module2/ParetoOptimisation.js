import { useState } from "react"
import "./Module2.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./EmissionSavings.css"
import { formatValueWithTwoDecimals, formatValueWithoutDecimals } from "../../services/module2.service";
import TimelineChart from "../UI/TimelineChart";
import ProgressBar from "../UI/ProgressBar";

const ParetoOptimisation = () => {
    const [maccData, setMaccData] = useState([]);
    const [chartData, setChartData] = useState();
    const { solarPV, solarPvBess, passiveInfraredSensor, smartMetersGas, led, wind, smartMetersElectricity, voltageOptimisation, biomass, solarThermal, industrialHeatPump, energyManagementSystem, chp } = useSelector(state => state.module2);

    useEffect(() => {
        const data = [
            {
                technologyOptions: "Solar PhotoVoltaics(PV)",
                initialInvestment: formatValueWithTwoDecimals(solarPV?.initialInvestmentPVSystem, 1),
                annualOperations: formatValueWithTwoDecimals(solarPV?.annualOperationalCostSavings, 1),
                netPresent: formatValueWithTwoDecimals(solarPV?.netPresentValueOperationalEnergy, 1),
                netSavings: formatValueWithTwoDecimals(solarPV?.initialInvestmentPVSystem - solarPV?.netPresentValueOperationalEnergy, 1),
                totalOperational: formatValueWithoutDecimals(solarPV?.totalOperationalEmissionSavingsAbatementPeriodInTon, 1),
                costEffectiveness: formatValueWithTwoDecimals(solarPV?.costEffectivenessOperationalEmission, 1),
                color: '#79D4F1'
            },
            {
                technologyOptions: "Wind",
                initialInvestment: formatValueWithTwoDecimals(wind?.initialInvestmentWindSystem, 1),
                annualOperations: formatValueWithTwoDecimals(wind?.annualOperationalCost, 1),
                netPresent: formatValueWithTwoDecimals(wind?.netPresentValueOperationalEnergyCostSavings, 1),
                netSavings: formatValueWithTwoDecimals(wind?.initialInvestmentWindSystem - wind?.netPresentValueOperationalEnergyCostSavings, 1),
                totalOperational: formatValueWithoutDecimals(wind?.totalOperationalEmissionSavingsAbatementPeriodTon, 1),
                costEffectiveness: formatValueWithTwoDecimals(wind?.costEffectivenessConsideringOperationalEmissionSavings, 1),
                color: '#FBD07B'
            },
            {
                technologyOptions: "Solar Photovoltaics+Battery Energy Storage System",
                initialInvestment: formatValueWithTwoDecimals(solarPvBess?.initialInvestmentPVSystem + solarPvBess?.initialInvestmentForBESSSystem, 1),
                annualOperations: formatValueWithTwoDecimals(solarPvBess?.annualOperationalCostSavings, 1),
                netPresent: formatValueWithTwoDecimals(solarPvBess?.netPresentValueOfOperationalEnergyCostSavings, 1),
                netSavings: formatValueWithTwoDecimals(solarPvBess?.initialInvestmentPVSystem + solarPvBess?.initialInvestmentForBESSSystem - solarPvBess?.netPresentValueOfOperationalEnergyCostSavings, 1),
                totalOperational: formatValueWithoutDecimals(solarPvBess?.totalOperationalEmissionSavingsAbatementPeriodTon, 1),
                costEffectiveness: formatValueWithTwoDecimals(solarPvBess?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 1),
                color: '#FBD07B'
            },
            {
            technologyOptions: "Light Emitting Diodes (LED)",
            initialInvestment: formatValueWithTwoDecimals(led?.initialInvestmentForLEDs, 1),
            annualOperations: formatValueWithTwoDecimals(led?.annualOperationalCostSavings, 1),
            netPresent: formatValueWithTwoDecimals(led?.netPresentValueOfOperationalEnergyCostSavings, 1),
            netSavings: formatValueWithTwoDecimals(led?.initialInvestmentForLEDs - led?.netPresentValueOfOperationalEnergyCostSavings, 1),
            totalOperational: formatValueWithoutDecimals(led?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 1),
            costEffectiveness: formatValueWithTwoDecimals(led?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 1),
            color: '#9092BE'
        },
        {
            technologyOptions: "Smart meter for electricity",
            initialInvestment: formatValueWithTwoDecimals(smartMetersElectricity?.initialInvestmentForElectricitySmartMeter, 1),
            annualOperations: formatValueWithTwoDecimals(smartMetersElectricity?.annualOperationalCostSavings, 1),
            netPresent: formatValueWithTwoDecimals(smartMetersElectricity?.netPresentValueOfOperationalEnergyCostSavings, 1),
            netSavings: formatValueWithTwoDecimals(smartMetersElectricity?.initialInvestmentForElectricitySmartMeter - smartMetersElectricity?.netPresentValueOfOperationalEnergyCostSavings, 1),
            totalOperational: formatValueWithoutDecimals(smartMetersElectricity?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 1),
            costEffectiveness: formatValueWithTwoDecimals(smartMetersElectricity?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 1),
            color: '#F4A3A0'
        },

        {
            technologyOptions: "Passive Infrared Sensors",
            initialInvestment: formatValueWithTwoDecimals(passiveInfraredSensor?.initialInvestmentForPir, 1),
            annualOperations: formatValueWithTwoDecimals(passiveInfraredSensor?.annualOperationalCostSavings, 1),
            netPresent: formatValueWithTwoDecimals(passiveInfraredSensor?.netPresentValueOfOperationalEnergyCostSaings, 1),
            netSavings: formatValueWithTwoDecimals(passiveInfraredSensor?.initialInvestmentForPir - passiveInfraredSensor?.netPresentValueOfOperationalEnergyCostSaings, 1),
            totalOperational: formatValueWithoutDecimals(passiveInfraredSensor?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 1),
            costEffectiveness: formatValueWithTwoDecimals(passiveInfraredSensor?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 1),
            color: '#AC9A81'
        },
        {
            technologyOptions: "Voltage Optimisation",
            initialInvestment: formatValueWithTwoDecimals(voltageOptimisation?.initialInvestmentForVoltageOptimisation, 1),
            annualOperations: formatValueWithTwoDecimals(voltageOptimisation?.annualOperationalCostSavings, 1),
            netPresent: formatValueWithTwoDecimals(voltageOptimisation?.netPresentValueOfOperationalEnergyCostSavings, 1),
            netSavings: formatValueWithTwoDecimals(voltageOptimisation?.initialInvestmentForVoltageOptimisation - voltageOptimisation?.netPresentValueOfOperationalEnergyCostSavings, 1),
            totalOperational: formatValueWithoutDecimals(voltageOptimisation?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 1),
            costEffectiveness: formatValueWithTwoDecimals(voltageOptimisation?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 1),
            color: '#BA80C6'
        },
        {
            technologyOptions: "Biomass",
            initialInvestment: formatValueWithTwoDecimals(biomass?.initialInvestmentForBiomassSystem, 1),
            annualOperations: formatValueWithTwoDecimals(biomass?.annualOperationalCostSavings, 1),
            netPresent: formatValueWithTwoDecimals(biomass?.netPresentValueOfOperationalEnergyCostSavings, 1),
            netSavings: formatValueWithTwoDecimals(biomass?.initialInvestmentForBiomassSystem - biomass?.netPresentValueOfOperationalEnergyCostSavings, 1),
            totalOperational: formatValueWithoutDecimals(biomass?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 1),
            costEffectiveness: formatValueWithTwoDecimals(biomass?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 1),
            color: '#BA80C6'
        },
        {
            technologyOptions: "Solar thermal",
            initialInvestment: formatValueWithTwoDecimals(solarThermal?.initialInvestmentForSolarThermalSystem, 1),
            annualOperations: formatValueWithTwoDecimals(solarThermal?.annualOperationalCostSavings, 1),
            netPresent: formatValueWithTwoDecimals(solarThermal?.netPresentValueOfOperationalEnergyCostSavings, 1),
            netSavings: formatValueWithTwoDecimals(solarThermal?.initialInvestmentForSolarThermalSystem - solarThermal?.netPresentValueOfOperationalEnergyCostSavings, 1),
            totalOperational: formatValueWithoutDecimals(solarThermal?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 1),
            costEffectiveness: formatValueWithTwoDecimals(solarThermal?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 1),
            color: '#BA80C6'
        },
        {
            technologyOptions: "Industrial heat pump (IHP)",
            initialInvestment: formatValueWithTwoDecimals(industrialHeatPump?.initialInvestmentForIHP1 + industrialHeatPump?.initialInvestmentForIHP2, 1),
            annualOperations: formatValueWithTwoDecimals(industrialHeatPump?.annualOperationalCostSavings, 1),
            netPresent: formatValueWithTwoDecimals(industrialHeatPump?.netPresentValueOfOperationalEnergyCostSavings, 1),
            netSavings: formatValueWithTwoDecimals(industrialHeatPump?.initialInvestmentForIHP1 + industrialHeatPump?.initialInvestmentForIHP2 - industrialHeatPump?.netPresentValueOfOperationalEnergyCostSavings, 1),
            totalOperational: formatValueWithoutDecimals(industrialHeatPump?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 1),
            costEffectiveness: formatValueWithTwoDecimals(industrialHeatPump?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 1),
            color: '#BA80C6'
        },
        {
            technologyOptions: "Smart Meters for Gas",
            initialInvestment: formatValueWithTwoDecimals(smartMetersGas?.initialInvestmentForGasSmartMeter, 1),
            annualOperations: formatValueWithTwoDecimals(smartMetersGas?.annualOperationalCostSavings, 1),
            netPresent: formatValueWithTwoDecimals(smartMetersGas?.netPresentValueOfOperationalEnergyCostSavings, 1),
            netSavings: formatValueWithTwoDecimals(smartMetersGas?.initialInvestmentForGasSmartMeter - smartMetersGas?.netPresentValueOfOperationalEnergyCostSavings, 1),
            totalOperational: formatValueWithoutDecimals(smartMetersGas?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 1),
            costEffectiveness: formatValueWithTwoDecimals(smartMetersGas?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 1),
            color: '#A8A8A9'
        },
        {
            technologyOptions: "Building energy management system",
            initialInvestment: formatValueWithTwoDecimals(energyManagementSystem?.initialInvestmentForBEMS, 1),
            annualOperations: formatValueWithTwoDecimals(energyManagementSystem?.totalAnnualOperationalCostSavings, 1),
            netPresent: formatValueWithTwoDecimals(energyManagementSystem?.netPresentValueOfOperationalEnergyCostSavings, 1),
            netSavings: formatValueWithTwoDecimals(energyManagementSystem?.initialInvestmentForBEMS - energyManagementSystem?.netPresentValueOfOperationalEnergyCostSavings, 1),
            totalOperational: formatValueWithoutDecimals(energyManagementSystem?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 1),
            costEffectiveness: formatValueWithTwoDecimals(energyManagementSystem?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 1),
            color: '#F7A47B'
        },
        {
            technologyOptions: "Combined Heat and power (CHP)",
            initialInvestment: formatValueWithTwoDecimals(chp?.initialInvestmentForCHPSystem, 1),
            annualOperations: formatValueWithTwoDecimals(chp?.annualOperationalCostSavings, 1),
            netPresent: formatValueWithTwoDecimals(chp?.netPresentValueOfOperationalEnergyCostSavings, 1),
            netSavings: formatValueWithTwoDecimals(chp?.initialInvestmentForCHPSystem - chp?.netPresentValueOfOperationalEnergyCostSavings, 1),
            totalOperational: formatValueWithoutDecimals(chp?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 1),
            costEffectiveness: formatValueWithTwoDecimals(chp?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 1),
            color: '#F7A47B'
        },


        ]
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
        <h2 className="form-heading">Pareto optimisation</h2>
        <h3 className="form-subheading">It is also called Pareto efficiency or Pareto optimality and is named after Vilfredo Pareto. The concept is a state of allocation of resources in which it is impossible to make any one individual better off without making at least one individual worse off. It is employed when a solution is required in the midst of conflicting objectives where solutions are chosen such that there are reasonable trade-offs among different objectives. With the Pareto Optimisation scheme, rather than generating a single optimal solution, a myriad of solutions are generated that satisfy Pareto Optimality criterion. The criterion is such that a solution point P is accepted only if there are no solutions better than P with respect to all the objectives.</h3>
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
                {/* <ColumnChartGoogle chartData={chartData} hAxisTitle="% Savings with reference to Baseline" vAxisTitle="kgCO2e"/> */}
                <ProgressBar chartData={chartData}/>
            </div>
        </div>
    </div>
}
export default ParetoOptimisation;