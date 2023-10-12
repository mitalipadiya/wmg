import { useMemo, useState } from "react"
import "./Module2.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./EmissionSavings.css"
import { formatValueWithTwoDecimals } from "../../services/module2.service";
import { updateMacc } from "../../actions/module2";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import BarChartGoogle from "../UI/BarChartGoogle";
import TwoSidedChart from "../UI/TwoSidedChart";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";

const Macc = () => {
    const [maccData, setMaccData] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { solarPV, passiveInfraredSensor, smartMetersGas, led, wind, smartMetersElectricity, voltageOptimisation, energyManagementSystem, technologies, solarPvBess, biomass, solarThermal, industrialHeatPump, chp } = useSelector(state => state.module2);

    useEffect(()=>{
        let data = [];
        if(technologies) {
            if(technologies.solarPV) {
                data.push({
                    technologyOptions: "Solar PhotoVoltaics(PV)",
                    annualOperations: formatValueWithTwoDecimals(solarPV?.annualOperationalCostSavings, 0),
                    netPresent: formatValueWithTwoDecimals(solarPV?.netPresentValueOperationalEnergy, 0),
                    totalOperational: formatValueWithTwoDecimals(solarPV?.totalOperationalEmissionSavingsAbatementPeriodInTon, 0),
                    costEffectiveness: formatValueWithTwoDecimals(solarPV?.costEffectivenessOperationalEmission, 0),
                    color: '#79D4F1'
                })
            }
            if(technologies.wind) {
                data.push({
                    technologyOptions: "Wind",
                    annualOperations: formatValueWithTwoDecimals(wind?.annualOperationalCost, 0),
                    netPresent: formatValueWithTwoDecimals(wind?.netPresentValueOperationalEnergyCostSavings, 0),
                    totalOperational: formatValueWithTwoDecimals(wind?.totalOperationalEmissionSavingsAbatementPeriodTon, 0),
                    costEffectiveness: formatValueWithTwoDecimals(wind?.costEffectivenessConsideringOperationalEmissionSavings, 0),
                    color: '#FBD07B'
                })
            }
            if(technologies.solarPvBess) {
                data.push({
                    technologyOptions: "Solar PV+BESS",
                    annualOperations: formatValueWithTwoDecimals(solarPvBess?.annualOperationalCostSavings, 0),
                    netPresent: formatValueWithTwoDecimals(solarPvBess?.netPresentValueOfOperationalEnergyCostSavings, 0),
                    totalOperational: formatValueWithTwoDecimals(solarPvBess?.totalOperationalEmissionSavingsAbatementPeriodTon, 0),
                    costEffectiveness: formatValueWithTwoDecimals(solarPvBess?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 0),
                    color: '#DFE566'
                })
            }
            if(technologies.led) {
                data.push({
                    technologyOptions: "Light Emitting Diodes (LED)",
                    annualOperations: formatValueWithTwoDecimals(led?.annualOperationalCostSavings, 0),
                    netPresent: formatValueWithTwoDecimals(led?.netPresentValueOfOperationalEnergyCostSavings, 0),
                    totalOperational: formatValueWithTwoDecimals(led?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 0),
                    costEffectiveness: formatValueWithTwoDecimals(led?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 0),
                    color: '#9092BE'
                })
            }
            if(technologies.smartMetersElectricity) {
                data.push({
                    technologyOptions: "Smart meter for electricity",
                    annualOperations: formatValueWithTwoDecimals(smartMetersElectricity?.annualOperationalCostSavings, 0),
                    netPresent: formatValueWithTwoDecimals(smartMetersElectricity?.netPresentValueOfOperationalEnergyCostSavings, 0),
                    totalOperational: formatValueWithTwoDecimals(smartMetersElectricity?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 0),
                    costEffectiveness: formatValueWithTwoDecimals(smartMetersElectricity?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 0),
                    color: '#F4A3A0'
                })
            }
            if(technologies.passiveInfraredSensor) {
                data.push({
                    technologyOptions: "Passive Infrared Sensors",
                    annualOperations: formatValueWithTwoDecimals(passiveInfraredSensor?.annualOperationalCostSavings, 0),
                    netPresent: formatValueWithTwoDecimals(passiveInfraredSensor?.netPresentValueOfOperationalEnergyCostSaings, 0),
                    totalOperational: formatValueWithTwoDecimals(passiveInfraredSensor?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 0),
                    costEffectiveness: formatValueWithTwoDecimals(passiveInfraredSensor?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 0),
                    color: '#AC9A81'
                })
            }
            if(technologies.voltageOptimisation) {
                data.push({
                    technologyOptions: "Voltage Optimisation",
                    annualOperations: formatValueWithTwoDecimals(voltageOptimisation?.annualOperationalCostSavings, 0),
                    netPresent: formatValueWithTwoDecimals(voltageOptimisation?.netPresentValueOfOperationalEnergyCostSavings, 0),
                    totalOperational: formatValueWithTwoDecimals(voltageOptimisation?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 0),
                    costEffectiveness: formatValueWithTwoDecimals(voltageOptimisation?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 0),
                    color: '#BA80C6'
                })
            }
            if(technologies.biomass) {
                data.push({
                    technologyOptions: "Biomass",
                    annualOperations: formatValueWithTwoDecimals(biomass?.annualOperationalCostSavings, 0),
                    netPresent: formatValueWithTwoDecimals(biomass?.netPresentValueOfOperationalEnergyCostSavings, 0),
                    totalOperational: formatValueWithTwoDecimals(biomass?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 0),
                    costEffectiveness: formatValueWithTwoDecimals(biomass?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 0),
                    color: '#B0E195'
                })
            }
            if(technologies.solarThermal) {
                data.push({
                    technologyOptions: "Solar thermal",
                    annualOperations: formatValueWithTwoDecimals(solarThermal?.annualOperationalCostSavings, 0),
                    netPresent: formatValueWithTwoDecimals(solarThermal?.netPresentValueOfOperationalEnergyCostSavings, 0),
                    totalOperational: formatValueWithTwoDecimals(solarThermal?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 0),
                    costEffectiveness: formatValueWithTwoDecimals(solarThermal?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 0),
                    color: '#95B2E1'
                })
            }
            if(technologies.industrialHeatPump) {
                data.push({
                    technologyOptions: "Industrial heat pump",
                    annualOperations: formatValueWithTwoDecimals(industrialHeatPump?.annualOperationalCostSavings, 0),
                    netPresent: formatValueWithTwoDecimals(industrialHeatPump?.netPresentValueOfOperationalEnergyCostSavings, 0),
                    totalOperational: formatValueWithTwoDecimals(industrialHeatPump?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 0),
                    costEffectiveness: formatValueWithTwoDecimals(industrialHeatPump?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 0),
                    color: '#E1BE95'
                })
            }
            if(technologies.smartMetersGas) {
                data.push({
                    technologyOptions: "Smart Meters for Gas",
                    annualOperations: formatValueWithTwoDecimals(smartMetersGas?.annualOperationalCostSavings, 0),
                    netPresent: formatValueWithTwoDecimals(smartMetersGas?.netPresentValueOfOperationalEnergyCostSavings, 0),
                    totalOperational: formatValueWithTwoDecimals(smartMetersGas?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 0),
                    costEffectiveness: formatValueWithTwoDecimals(smartMetersGas?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 0),
                    color: '#A8A8A9'
                })
            }
            if(technologies.energyManagementSystem) {
                data.push({
                    technologyOptions: "Building energy management system",
                    annualOperations: formatValueWithTwoDecimals(energyManagementSystem?.totalAnnualOperationalCostSavings, 0),
                    netPresent: formatValueWithTwoDecimals(energyManagementSystem?.netPresentValueOfOperationalEnergyCostSavings, 0),
                    totalOperational: formatValueWithTwoDecimals(energyManagementSystem?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 0),
                    costEffectiveness: formatValueWithTwoDecimals(energyManagementSystem?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 0),
                    color: '#F7A47B'
                })
            }
            if(technologies.chp) {
                data.push({
                    technologyOptions: "CHP",
                    annualOperations: formatValueWithTwoDecimals(chp?.annualOperationalCostSavings, 0),
                    netPresent: formatValueWithTwoDecimals(chp?.netPresentValueOfOperationalEnergyCostSavings, 0),
                    totalOperational: formatValueWithTwoDecimals(chp?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 0),
                    costEffectiveness: formatValueWithTwoDecimals(chp?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 0),
                    color: '#E195DE'
                })
            }
        }
        setMaccData(data.sort(function (a, b) { return a.costEffectiveness - b.costEffectiveness; }));
    },[technologies])

    const onSave = () => {
        dispatch(updateMacc({
            isComplete: true
        }));
        navigate("./../pareto-optimisation")
    }
    return <div>
        <div className="tooltip-heading">
            <h2 className="form-heading">Marginal Abatement Cost Curve (MACC)</h2>
            <OverlayTrigger placement="right" overlay={<Tooltip className="mytooltip">Marginal Abatement Cost (MAC) expressed in cost per tonne of GHG emissions saved, is the additional cost of abating an additional tonne of GHG above what would be achieved in a ‘business as usual’ context. A Marginal Abatement Cost Curve therefore is a graphical device that combines the MACs of available low carbon technology abatement options to facilitate decision making. MACCs are a useful tool to identify options which deliver the most economically efficient reductions in GHG and prioritize mitigation options based on certain criteria.</Tooltip>}>
                <div className="heading-info">i</div>
            </OverlayTrigger>
        </div>
        {/* <h2 className="form-heading">Marginal Abatement Cost Curve (MACC)</h2>
        <h3 className="form-subheading">Marginal Abatement Cost (MAC) expressed in cost per tonne of GHG emissions saved, is the additional cost of abating an additional tonne of GHG above what would be achieved in a ‘business as usual’ context. A Marginal Abatement Cost Curve therefore is a graphical device that combines the MACs of available low carbon technology abatement options to facilitate decision making. MACCs are a useful tool to identify options which deliver the most economically efficient reductions in GHG and prioritize mitigation options based on certain criteria.</h3> */}
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
                {/* <ColumnRecharts data={maccData}/> */}
                {/* <BarChartGoogle barData={barData} hAxisTitle="£/tCO2e" vAxisTitle=" " /> */}
                <TwoSidedChart data={maccData} />

            </div>
        </div>
        <div className="btn-div">
            <Button value="Next" onClick={onSave} />
        </div>
    </div>
}
export default Macc;