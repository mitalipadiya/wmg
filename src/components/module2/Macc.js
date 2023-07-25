import { useState } from "react"
import "./Module2.css"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./EmissionSavings.css"

const Macc = () => {
    const [maccData, setMaccData] = useState([]);
    const { solavPV, baseline, economicParameters, led, wind, smartMetersElectricity, smartMetersGas, passiveInfraredSensors, voltageOptimisation, energyManagementSystem } = useSelector(state => state.module2);

    useEffect(() => {
        const data = [{
            technologyOptions: "Light Emitting Diodes (LED)",
            annualOperations: led?.annualOperationalEmissionSavings,
            netPresent: led?.netPresentValueOperationalEnergyCostSavings,
            totalOperational: led?.totalOperationalEmissionSavingsAbatementPeriodTon,
            costEffectiveness: led?.costEffectivenessConsideringOperationalEmissionSavingsOnly,
        },
        {
            technologyOptions: "Smart meter for electricity",
            annualOperations: smartMetersElectricity?.annualOperationalEmissionSavings,
            netPresent: smartMetersElectricity?.netPresentValueOperationalEnergyCostSavings,
            totalOperational: smartMetersElectricity?.totalOperationalEmissionSavingsAbatementPeriodTon,
            costEffectiveness: smartMetersElectricity?.costEffectivenessConsideringOperationalEmissionSavingsOnly,
        },
        {
            technologyOptions: "Wind",
            annualOperations: wind?.annualOperationalEmissionSavings,
            netPresent: wind?.netPresentValueOperationalEnergyCostSavings,
            totalOperational: wind?.totalOperationalEmissionSavingsAbatementPeriodTon,
            costEffectiveness: wind?.costEffectivenessConsideringOperationalEmissionSavingsOnly,
        },
        {
            technologyOptions: "Passive Infrared Sensors",
            annualOperations: solavPV?.annualOperationalEmissionSavings,
            netPresent: solavPV?.netPresentValueOperationalEnergyCostSavings,
            totalOperational: solavPV?.totalOperationalEmissionSavingsAbatementPeriodTon,
            costEffectiveness: solavPV?.costEffectivenessConsideringOperationalEmissionSavingsOnly,
        },
        {
            technologyOptions: "Smart meter for gas",
            annualOperations: solavPV?.annualOperationalEmissionSavings,
            netPresent: solavPV?.netPresentValueOperationalEnergyCostSavings,
            totalOperational: solavPV?.totalOperationalEmissionSavingsAbatementPeriodTon,
            costEffectiveness: solavPV?.costEffectivenessConsideringOperationalEmissionSavingsOnly,
        },
        {
            technologyOptions: "Passive Infrared Sensors",
            annualOperations: passiveInfraredSensors?.annualOperationalEmissionSavings,
            netPresent: passiveInfraredSensors?.netPresentValueOperationalEnergyCostSavings,
            totalOperational: passiveInfraredSensors?.totalOperationalEmissionSavingsAbatementPeriodTon,
            costEffectiveness: passiveInfraredSensors?.costEffectivenessConsideringOperationalEmissionSavingsOnly,
        },
        {
            technologyOptions: "Solar PhotoVoltaics(PV)",
            annualOperations: solavPV?.annualOperationalEmissionSavings,
            netPresent: solavPV?.netPresentValueOperationalEnergy,
            totalOperational: solavPV?.totalOperationalEmissionSavingsAbatementPeriodInTon,
            costEffectiveness: solavPV?.costEffectivenessOperationalEmission,
        },
        {
            technologyOptions: "Building energy management system",
            annualOperations: energyManagementSystem?.annualOperationalEmissionSavings,
            netPresent: energyManagementSystem?.netPresentValueOperationalEnergyCostSavings,
            totalOperational: energyManagementSystem?.totalOperationalEmissionSavingsAbatementPeriodTon,
            costEffectiveness: energyManagementSystem?.costEffectivenessConsideringOperationalEmissionSavingsOnly,
        },
        {
            technologyOptions: "Voltage Optimisation",
            annualOperations: voltageOptimisation?.annualOperationalEmissionSavings,
            netPresent: voltageOptimisation?.netPresentValueOperationalEnergyCostSavings,
            totalOperational: voltageOptimisation?.totalOperationalEmissionSavingsAbatementPeriodTon,
            costEffectiveness: voltageOptimisation?.costEffectivenessConsideringOperationalEmissionSavingsOnly,
        },
        {
            technologyOptions: "Smart Meters for Gas",
            annualOperations: smartMetersGas?.annualOperationalEmissionSavings,
            netPresent: smartMetersGas?.netPresentValueOperationalEnergyCostSavings,
            totalOperational: smartMetersGas?.totalOperationalEmissionSavingsAbatementPeriodTon,
            costEffectiveness: smartMetersGas?.costEffectivenessConsideringOperationalEmissionSavingsOnly,
        }


        ]
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
        </div>
    </div>
}
export default Macc;