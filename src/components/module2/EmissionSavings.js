import { useState } from "react"
import "./Module2.css"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import"./EmissionSavings.css"

const EmissionSavings = () => {
    const [emissionData, setEmissionData] = useState([]);
    const { solavPV, baseline, economicParameters, led, wind, smartMetersElectricity, smartMetersGas, passiveInfraredSensors, voltageOptimisation, energyManagementSystem } = useSelector(state => state.module2);

    useEffect(() => {
        const data = [{
            technologyOptions: "Solar Photovoltaics (PV)",
            emissionSavings: solavPV?.annualOperationalEmissionSavings,
            percentSavings: (solavPV?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions)
        },
        {
            technologyOptions: "Wind",
            emissionSavings: wind?.annualOperationalEmissionSavings,
            percentSavings: wind?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions,
        },
        {
            technologyOptions: "Light Emitting Diodes (LED)",
            emissionSavings: led?.annualOperationalEmissionSavings,
            percentSavings: led?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions,
        },
        {
            technologyOptions: "Smart meter for electricity",
            emissionSavings: smartMetersElectricity?.annualOperationalEmissionSavings,
            percentSavings: smartMetersElectricity?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions,
        },
        {
            technologyOptions: "Smart meter for gas",
            emissionSavings: smartMetersGas?.annualOperationalEmissionSavings,
            percentSavings: smartMetersGas?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions,
        },
        {
            technologyOptions: "Passive Infrared Sensors",
            emissionSavings: passiveInfraredSensors?.annualOperationalEmissionSavings,
            percentSavings: passiveInfraredSensors?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions,
        },
        {
            technologyOptions: "Voltage optimisation",
            emissionSavings: voltageOptimisation?.annualOperationalEmissionSavings,
            percentSavings: voltageOptimisation?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions,
        },
        {
            technologyOptions: "Building energy management system",
            emissionSavings: energyManagementSystem?.annualOperationalEmissionSavings,
            percentSavings: energyManagementSystem?.annualOperationalEmissionSavings / baseline?.annualOperationalEmissionSavings,
        }

        ]
        setEmissionData(data);
    }, [])
    return <div>
        <h2 className="form-heading">% Emission savings</h2>
        <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
        <div className="main">
            <div>
                <div className="group-heading">TABULAR VIEW</div>
                <table className="table">
                    <thead className="table-heading-box">
                        <tr>
                            <th className="table-heading">Technology options</th>
                            <th className="table-heading">Emission Savings (kgCO2e)</th>
                            <th className="table-heading">% Savings with reference to Baseline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            emissionData.map((data, index) => {

                                return <tr className="table-data">
                                    <td>{data.technologyOptions} </td>
                                    <td> {data.emissionSavings}</td>
                                    <td>{data.percentSavings}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}
export default EmissionSavings;