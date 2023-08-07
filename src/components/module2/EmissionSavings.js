import { useState } from "react"
import "./Module2.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./EmissionSavings.css"
import { formatValueWithTwoDecimals, formatValueWithoutDecimals } from "../../services/module2.service";
import BarChartGoogle from "../UI/BarChartGoogle";
import { updateEmissionSavings } from "../../actions/module2";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";

const EmissionSavings = () => {
    const [emissionData, setEmissionData] = useState([]);
    const [barData, setBarData] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { solarPV, baseline, led, wind, smartMetersElectricity, smartMetersGas, passiveInfraredSensor, voltageOptimisation, energyManagementSystem } = useSelector(state => state.module2);

    useEffect(() => {
        const data = [{
            technologyOptions: "Solar Photovoltaics (PV)",
            emissionSavings: formatValueWithTwoDecimals(solarPV?.annualOperationalEmissionSavings),
            percentSavings: formatValueWithoutDecimals((solarPV?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions) * 100),
            color: "#79D4F1"
        },
        {
            technologyOptions: "Wind",
            emissionSavings: formatValueWithTwoDecimals(wind?.annualOperationalEmissionSavings),
            percentSavings: formatValueWithoutDecimals((wind?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions) * 100),
            color: "#FBD07B"
        },
        {
            technologyOptions: "Light Emitting Diodes (LED)",
            emissionSavings: formatValueWithTwoDecimals(led?.annualOperationalEmissionSavings),
            percentSavings: formatValueWithoutDecimals((led?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions) * 100),
            color: "#9092BE"
        },
        {
            technologyOptions: "Smart meter for electricity",
            emissionSavings: formatValueWithTwoDecimals(smartMetersElectricity?.annualOperationalEmissionSavings),
            percentSavings: formatValueWithoutDecimals((smartMetersElectricity?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions) * 100),
            color: "#F4A3A0"
        },
        {
            technologyOptions: "Smart meter for gas",
            emissionSavings: formatValueWithTwoDecimals(smartMetersGas?.annualOperationalEmissionSavings),
            percentSavings: formatValueWithoutDecimals((smartMetersGas?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions) * 100),
            color: "#A8A8A9"
        },
        {
            technologyOptions: "Passive Infrared Sensors",
            emissionSavings: formatValueWithTwoDecimals(passiveInfraredSensor?.annualOperationalEmissionSavings),
            percentSavings: formatValueWithoutDecimals((passiveInfraredSensor?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions) * 100),
            color: "#AC9A81"
        },
        {
            technologyOptions: "Voltage optimisation",
            emissionSavings: formatValueWithTwoDecimals(voltageOptimisation?.annualOperationalEmissionSavings),
            percentSavings: formatValueWithoutDecimals((voltageOptimisation?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions) * 100),
            color: "#BA80C6"
        },
        {
            technologyOptions: "Building energy management system",
            emissionSavings: formatValueWithTwoDecimals(energyManagementSystem?.annualOperationalEmissionSavings),
            percentSavings: formatValueWithoutDecimals((energyManagementSystem?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions) * 100),
            color: "#F7A47B"
        }

        ]
        const barData = [];

        for (let i = 0; i < data.length; i++) {
            let dt = [data[i].technologyOptions, data[i].percentSavings, data[i].color, data[i].emissionSavings];
            barData.push(dt);
        }

        setBarData([
            [
                "Element",
                "% Savings with reference to Baseline",
                { role: "style" },
                {
                    sourceColumn: 0,
                    role: "annotation",
                    type: "string",
                    calc: "stringify",
                },
            ],
            ...barData

        ]);
        setEmissionData(data);
    }, [])

    const onSave = () => {
        dispatch(updateEmissionSavings({
            isComplete: true
        }));
        navigate("./../macc")
    }
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
            <div>
                <div className="group-heading">GRAPHICAL VIEW</div>
                <BarChartGoogle barData={barData} hAxisTitle="% Savings with reference to Baseline" vAxisTitle="kgCO2e" />
            </div>
        </div>
        <div className="btn-div">
            <Button value="Next" onClick={onSave} />
        </div>
    </div>
}
export default EmissionSavings;