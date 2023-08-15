import { useMemo, useState } from "react"
import "./Module2.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./EmissionSavings.css"
import { formatValueWithTwoDecimals } from "../../services/module2.service";
import ColumnRecharts from "../UI/ColumnRecharts";
import { updateMacc } from "../../actions/module2";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import BarChartGoogle from "../UI/BarChartGoogle";

const Macc = () => {
    const [maccData, setMaccData] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { solarPV, passiveInfraredSensor, smartMetersGas, led, wind, smartMetersElectricity, voltageOptimisation, energyManagementSystem } = useSelector(state => state.module2);

    useEffect(() => {
        const data = [{
            technologyOptions: "Light Emitting Diodes (LED)",
            annualOperations: formatValueWithTwoDecimals(led?.annualOperationalCostSavings, 1),
            netPresent: formatValueWithTwoDecimals(led?.netPresentValueOfOperationalEnergyCostSavings, 1),
            totalOperational: formatValueWithTwoDecimals(led?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon,1),
            costEffectiveness: formatValueWithTwoDecimals(led?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 1),
            color: '#9092BE'
        },
        {
            technologyOptions: "Smart meter for electricity",
            annualOperations: formatValueWithTwoDecimals(smartMetersElectricity?.annualOperationalCostSavings, 1),
            netPresent: formatValueWithTwoDecimals(smartMetersElectricity?.netPresentValueOfOperationalEnergyCostSavings, 1),
            totalOperational: formatValueWithTwoDecimals(smartMetersElectricity?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 1),
            costEffectiveness: formatValueWithTwoDecimals(smartMetersElectricity?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 1),
            color: '#F4A3A0'
        },
        {
            technologyOptions: "Wind",
            annualOperations: formatValueWithTwoDecimals(wind?.annualOperationalCost, 1),
            netPresent: formatValueWithTwoDecimals(wind?.netPresentValueOperationalEnergyCostSavings, 1),
            totalOperational: formatValueWithTwoDecimals(wind?.totalOperationalEmissionSavingsAbatementPeriodTon, 1),
            costEffectiveness: formatValueWithTwoDecimals(wind?.costEffectivenessConsideringOperationalEmissionSavings, 1),
            color: '#FBD07B'
        },
        {
            technologyOptions: "Passive Infrared Sensors",
            annualOperations: formatValueWithTwoDecimals(passiveInfraredSensor?.annualOperationalCostSavings, 1),
            netPresent: formatValueWithTwoDecimals(passiveInfraredSensor?.netPresentValueOfOperationalEnergyCostSaings, 1),
            totalOperational: formatValueWithTwoDecimals(passiveInfraredSensor?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 1),
            costEffectiveness: formatValueWithTwoDecimals(passiveInfraredSensor?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 1),
            color: '#AC9A81'
        },
        {
            technologyOptions: "Solar PhotoVoltaics(PV)",
            annualOperations: formatValueWithTwoDecimals(solarPV?.annualOperationalCostSavings, 1),
            netPresent: formatValueWithTwoDecimals(solarPV?.netPresentValueOperationalEnergy, 1),
            totalOperational: formatValueWithTwoDecimals(solarPV?.totalOperationalEmissionSavingsAbatementPeriodInTon, 1),
            costEffectiveness: formatValueWithTwoDecimals(solarPV?.costEffectivenessOperationalEmission, 1),
            color: '#79D4F1'
        },
        {
            technologyOptions: "Building energy management system",
            annualOperations: formatValueWithTwoDecimals(energyManagementSystem?.totalAnnualOperationalCostSavings, 1),
            netPresent: formatValueWithTwoDecimals(energyManagementSystem?.netPresentValueOfOperationalEnergyCostSavings, 1),
            totalOperational: formatValueWithTwoDecimals(energyManagementSystem?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 1),
            costEffectiveness: formatValueWithTwoDecimals(energyManagementSystem?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 1),
            color: '#F7A47B'
        },
        {
            technologyOptions: "Voltage Optimisation",
            annualOperations: formatValueWithTwoDecimals(voltageOptimisation?.annualOperationalCostSavings, 1),
            netPresent: formatValueWithTwoDecimals(voltageOptimisation?.netPresentValueOfOperationalEnergyCostSavings, 1),
            totalOperational: formatValueWithTwoDecimals(voltageOptimisation?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 1),
            costEffectiveness: formatValueWithTwoDecimals(voltageOptimisation?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 1),
            color: '#BA80C6'
        },
        {
            technologyOptions: "Smart Meters for Gas",
            annualOperations: formatValueWithTwoDecimals(smartMetersGas?.annualOperationalCostSavings, 1),
            netPresent: formatValueWithTwoDecimals(smartMetersGas?.netPresentValueOfOperationalEnergyCostSavings, 1),
            totalOperational: formatValueWithTwoDecimals(smartMetersGas?.totalOperationalEmissionSavingsAcrossAbatementPeriodTon, 1),
            costEffectiveness: formatValueWithTwoDecimals(smartMetersGas?.costEffectivenessConsideringOperationalEmissionSavingsOnly, 1),
            color: '#A8A8A9'
        }
        ]
        console.log(data);

        setMaccData(data.sort( function ( a, b ) { return a.costEffectiveness - b.costEffectiveness; } ));
    }, [])

    const barData = useMemo(()=>{
        const bData = [];
        for (let i = 0; i < maccData.length; i++) {
            let dt = [maccData[i].technologyOptions, maccData[i].costEffectiveness, maccData[i].color, maccData[i].totalOperational];
            bData.push(dt);
        }

        return [
            [
                "Element",
                "CO2 emissions savings (tCO2e)",
                { role: "style" },
                {
                    sourceColumn: 0,
                    role: "annotation",
                    type: "string",
                    calc: "stringify",
                },
            ],
            ...bData.sort( function ( a, b ) { return b[1] - a[1]; } )

        ];
    },[maccData]);

    const onSave = () => {
        dispatch(updateMacc({
            isComplete: true
        }));
        navigate("./../pareto-optimisation")
    }
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
                {/* <ColumnRecharts data={maccData}/> */}
                <BarChartGoogle barData={barData} hAxisTitle="£/tCO2e" vAxisTitle=" " />

            </div>
        </div>
        <div className="btn-div">
            <Button value="Next" onClick={onSave} />
        </div>
    </div>
}
export default Macc;