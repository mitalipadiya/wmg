import { useState } from "react"
import "./Module2.css"
import { useEffect } from "react";
import { useSelector } from "react-redux";

const EmissionSavings = () => {
    const [emissionData,setEmissionData]=useState([]);
    const { solavPV, baseline, economicParameters, led,wind,smartMetersElectricity,smartMetersGas } = useSelector(state => state.module2);

    useEffect(()=>{
        const data = [{
            technologyOptions: "Solar Photovoltaics (PV)",
            emissionSavings: solavPV.annualOperationalEmissionSavings,
            percentSavings: (solavPV.annualOperationalEmissionSavings / baseline.totalBaselineEmissions)
        },
        {
            technologyOptions: "Wind",
            emissionSavings: wind.annualOperationalEmissionSavings,
            percentSavings: wind.annualOperationalEmissionSavings/baseline.totalBaselineEmissions,
        },
        {
            technologyOptions: "Light Emitting Diodes (LED)",
            emissionSavings: led.annualOperationalEmissionSavings,
            percentSavings: led.annualOperationalEmissionSavings/baseline.totalBaselineEmissions,
        },
        {
            technologyOptions: "Smart meter for electricity",
            emissionSavings: smartMetersElectricity.annualOperationalEmissionSavings,
            percentSavings: smartMetersElectricity.annualOperationalEmissionSavings/baseline.totalBaselineEmissions,
        },
        {
            technologyOptions: "Smart meter for gas",
            emissionSavings: smartMetersGas.annualOperationalEmissionSavings,
            percentSavings: smartMetersGas.annualOperationalEmissionSavings/baseline.totalBaselineEmissions,
        },
        {
            technologyOptions: "Passive Infrared Sensors",
            emissionSavings: "2840",
            percentSavings: "7"
        },
        {
            technologyOptions: "Voltage optimisation",
            emissionSavings: "2840",
            percentSavings: "7"
        },
        {
            technologyOptions: "Building energy management system",
            emissionSavings: "2840",
            percentSavings: "7"
        }
       
    ]
        setEmissionData(data);
    },[])
    return <div>
        <h2 className="form-heading">% Emission savings</h2>
        <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
        <div className="main">
            <div>
                <div className="group-heading">TABULAR VIEW</div>
                <table>
                    <tr>
                        <th>Technology options</th>
                        <th>Emission Savings (kgCO2e)</th>
                        <th>% Savings with reference to Baseline</th>
                    </tr>
                    {
                        emissionData.map((data, index) => {

                            return <tr>
                                <td>{data.technologyOptions} </td>
                                <td> {data.emissionSavings}</td>
                                <td>{data.percentSavings}</td>
                            </tr>
                        })
                    }

                </table>
            </div>
        </div>
    </div>
}
export default EmissionSavings;