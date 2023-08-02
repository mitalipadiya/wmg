import { useState } from "react"
import "./Module2.css"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./EmissionSavings.css"
import { formatValueWithTwoDecimals, formatValueWithoutDecimals } from "../../services/module2.service";
import ColumnRecharts from "../UI/ColumnRecharts";
import TimelineChart from "../UI/TimelineChart";

const ParetoOptimisation = () => {
    const [maccData, setMaccData] = useState([]);
    const [chartData, setChartData] = useState();
    const { solarPV, passiveInfraredSensor, smartMetersGas, led, wind, smartMetersElectricity, passiveInfraredSensors, voltageOptimisation, energyManagementSystem } = useSelector(state => state.module2);

    useEffect(() => {
        const data = [{
            technologyOptions: "Light Emitting Diodes (LED)",
            annualOperations: formatValueWithTwoDecimals(led?.annualOperationalCostSavings),
            netPresent: formatValueWithTwoDecimals(led?.netPresentValueOfOperationalEnergyCostSavings),
            totalOperational: formatValueWithoutDecimals(led?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 4),
            costEffectiveness: formatValueWithTwoDecimals(led?.costEffectivenessConsideringOperationalEmissionSavingsOnly),
            color: '#9092BE'
        },
        {
            technologyOptions: "Smart meter for electricity",
            annualOperations: formatValueWithTwoDecimals(smartMetersElectricity?.annualOperationalCostSavings),
            netPresent: formatValueWithTwoDecimals(smartMetersElectricity?.netPresentValueOfOperationalEnergyCostSavings),
            totalOperational: formatValueWithoutDecimals(smartMetersElectricity?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 4),
            costEffectiveness: formatValueWithTwoDecimals(smartMetersElectricity?.costEffectivenessConsideringOperationalEmissionSavingsOnly),
            color: '#F4A3A0'
        },
        {
            technologyOptions: "Wind",
            annualOperations: formatValueWithTwoDecimals(wind?.annualOperationalCost),
            netPresent: formatValueWithTwoDecimals(wind?.netPresentValueOperationalEnergyCostSavings),
            totalOperational: formatValueWithoutDecimals(wind?.totalOperationalEmissionSavingsAbatementPeriodTon, 4),
            costEffectiveness: formatValueWithTwoDecimals(wind?.costEffectivenessConsideringOperationalEmissionSavings),
            color: '#FBD07B'
        },
        {
            technologyOptions: "Passive Infrared Sensors",
            annualOperations: formatValueWithTwoDecimals(passiveInfraredSensor?.annualOperationalCostSavings),
            netPresent: formatValueWithTwoDecimals(passiveInfraredSensor?.netPresentValueOfOperationalEnergyCostSaings),
            totalOperational: formatValueWithoutDecimals(passiveInfraredSensor?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 4),
            costEffectiveness: formatValueWithTwoDecimals(passiveInfraredSensor?.costEffectivenessConsideringOperationalEmissionSavingsOnly),
            color: '#AC9A81'
        },
        {
            technologyOptions: "Solar PhotoVoltaics(PV)",
            annualOperations: formatValueWithTwoDecimals(solarPV?.annualOperationalCostSavings),
            netPresent: formatValueWithTwoDecimals(solarPV?.netPresentValueOperationalEnergy),
            totalOperational: formatValueWithoutDecimals(solarPV?.totalOperationalEmissionSavingsAbatementPeriodInTon, 4),
            costEffectiveness: formatValueWithTwoDecimals(solarPV?.costEffectivenessOperationalEmission),
            color: '#79D4F1'
        },
        {
            technologyOptions: "Building energy management system",
            annualOperations: formatValueWithTwoDecimals(energyManagementSystem?.totalAnnualOperationalCostSavings),
            netPresent: formatValueWithTwoDecimals(energyManagementSystem?.netPresentValueOfOperationalEnergyCostSavings),
            totalOperational: formatValueWithoutDecimals(energyManagementSystem?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 4),
            costEffectiveness: formatValueWithTwoDecimals(energyManagementSystem?.costEffectivenessConsideringOperationalEmissionSavingsOnly),
            color: '#F7A47B'
        },
        {
            technologyOptions: "Voltage Optimisation",
            annualOperations: formatValueWithTwoDecimals(voltageOptimisation?.annualOperationalCostSavings),
            netPresent: formatValueWithTwoDecimals(voltageOptimisation?.netPresentValueOfOperationalEnergyCostSavings),
            totalOperational: formatValueWithoutDecimals(voltageOptimisation?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 4),
            costEffectiveness: formatValueWithTwoDecimals(voltageOptimisation?.costEffectivenessConsideringOperationalEmissionSavingsOnly),
            color: '#BA80C6'
        },
        {
            technologyOptions: "Smart Meters for Gas",
            annualOperations: formatValueWithTwoDecimals(smartMetersGas?.annualOperationalCostSavings),
            netPresent: formatValueWithTwoDecimals(smartMetersGas?.netPresentValueOfOperationalEnergyCostSavings),
            totalOperational: formatValueWithoutDecimals(smartMetersGas?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 4),
            costEffectiveness: formatValueWithTwoDecimals(smartMetersGas?.costEffectivenessConsideringOperationalEmissionSavingsOnly),
            color: '#A8A8A9'
        }
        ]
        let allCategories = [];
        let categoryData = [];
        for(let i=0;i<data.length;i++) {
            allCategories.push(data[i].technologyOptions);
            categoryData.push(data[i].totalOperational);
        }
        let chartDt = [
            ['Category', ...allCategories],
            ['', ...categoryData], // The first column is empty, and the other columns represent the values
          ]
          setChartData(chartDt);
        setMaccData(data);
    }, [])
    return <div>
        <h2 className="form-heading">Marginal Abatement Cost Curve (MACC)</h2>
        <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
        <div className="main">
            <div>
                <div className="group-heading">TABULAR VIEW</div>
                <table className="table">
                    <thead className="table-heading-box">
                        <tr>
                            <th></th>
                            <th >Annual operational cost savings (£)</th>
                            <th >Net Present Value of operational energy cost savings (NPV) (£)</th>
                            <th>Total operational emission savings across abatement period (tCO2e) </th>
                            <th>Cost effectiveness considering operational emission savings only (i.e. without embodied emissions) (£/tCO2e)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            maccData.map((data, index) => {

                                return <tr className="table-data">
                                    <td>{data.technologyOptions} </td>
                                    <td> {data.annualOperations}</td>
                                    <td>{data.netPresent}</td>
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
                <TimelineChart chartData={chartData}/>
            </div>
        </div>
    </div>
}
export default ParetoOptimisation;