import { useMemo } from "react"
import "./Module2.css"
import { useDispatch, useSelector } from "react-redux";
import "./EmissionSavings.css"
import { formatValueWithTwoDecimals, formatValueWithoutDecimals } from "../../services/module2.service";
import BarChartGoogle from "../UI/BarChartGoogle";
import { updateEmissionSavings } from "../../actions/module2";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";

const EmissionSavings = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { solarPV, baseline, led, wind, smartMetersElectricity, smartMetersGas, passiveInfraredSensor, voltageOptimisation, energyManagementSystem, technologies, solarPvBess,biomass, solarThermal, industrialHeatPump, chp } = useSelector(state => state.module2);

    const emissionData = useMemo(()=>{
        let data = [];
        if(technologies) {
            if(technologies.solarPV) {
                data.push({
                    technologyOptions: "Solar Photovoltaics (PV)",
                    emissionSavings: formatValueWithTwoDecimals(solarPV?.annualOperationalEmissionSavings, 0),
                    percentSavings: formatValueWithoutDecimals(((solarPV?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions) * 100), 0),
                    color: "#79D4F1"
                })
            }
            if(technologies.wind) {
                data.push({
                    technologyOptions: "Wind",
                    emissionSavings: formatValueWithTwoDecimals(wind?.annualOperationalEmissionSavings, 0),
                    percentSavings: formatValueWithoutDecimals(((wind?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions) * 100), 0),
                    color: "#FBD07B"
                })
            }
            if(technologies.solarPvBess) {
                data.push({
                    technologyOptions: "Solar photovoltaics (PV) & battery energy storage system (BESS)",
                    emissionSavings: formatValueWithTwoDecimals(solarPvBess?.annualOperationalEmissionSavings, 0),
                    percentSavings: formatValueWithoutDecimals(((solarPvBess?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions) * 100), 0),
                    color: "#DFE566"
                })
            }
            if(technologies.led) {
                data.push({
                    technologyOptions: "Light Emitting Diodes (LED)",
                    emissionSavings: formatValueWithTwoDecimals(led?.annualOperationalEmissionSavings, 0),
                    percentSavings: formatValueWithoutDecimals(((led?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions) * 100), 0),
                    color: "#9092BE"
                })
            }
            if(technologies.smartMetersElectricity) {
                data.push({
                    technologyOptions: "Smart meters for electricity",
                    emissionSavings: formatValueWithTwoDecimals(smartMetersElectricity?.annualOperationalEmissionSavings, 0),
                    percentSavings: formatValueWithoutDecimals(((smartMetersElectricity?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions) * 100),0),
                    color: "#F4A3A0"
                })
            }
            if(technologies.passiveInfraredSensor) {
                data.push({
                    technologyOptions: "Passive infrared sensors",
                    emissionSavings: formatValueWithTwoDecimals(passiveInfraredSensor?.annualOperationalEmissionSavings, 0),
                    percentSavings: formatValueWithoutDecimals(((passiveInfraredSensor?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions) * 100), 0),
                    color: "#AC9A81"
                })
            }
            if(technologies.voltageOptimisation) {
                data.push({
                    technologyOptions: "Voltage optimisation",
                    emissionSavings: formatValueWithTwoDecimals(voltageOptimisation?.annualOperationalEmissionSavings, 0),
                    percentSavings: formatValueWithoutDecimals(((voltageOptimisation?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions) * 100), 0),
                    color: "#95E1D2"
                })
            }
            if(technologies.biomass) {
                data.push({
                    technologyOptions: "Biomass",
                    emissionSavings: formatValueWithTwoDecimals(biomass?.annualOperationalEmissionSavings, 0),
                    percentSavings: formatValueWithoutDecimals(((biomass?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions) * 100), 0),
                    color: "#B0E195"
                })
            }
            if(technologies.solarThermal) {
                data.push({
                    technologyOptions: "Solar thermal",
                    emissionSavings: formatValueWithTwoDecimals(solarThermal?.annualOperationalEmissionSavings, 0),
                    percentSavings: formatValueWithoutDecimals(((solarThermal?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions) * 100), 0),
                    color: "#95B2E1"
                })
            }
            if(technologies.industrialHeatPump) {
                data.push({
                    technologyOptions: "Industrial heat pump",
                    emissionSavings: formatValueWithTwoDecimals(industrialHeatPump?.annualOperationalEmissionSavings, 0),
                    percentSavings: formatValueWithoutDecimals(((industrialHeatPump?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions) * 100), 0),
                    color: "#E1BE95"
                })
            }
            if(technologies.smartMetersGas) {
                data.push({
                    technologyOptions: "Smart meter for gas",
                    emissionSavings: formatValueWithTwoDecimals(smartMetersGas?.annualOperationalEmissionSavings, 0),
                    percentSavings: formatValueWithoutDecimals(((smartMetersGas?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions) * 100), 0),
                    color: "#A8A8A9"
                })
            }
            if(technologies.energyManagementSystem) {
                data.push({
                    technologyOptions: "Building energy management system for electricity & gas",
                    emissionSavings: formatValueWithTwoDecimals(energyManagementSystem?.annualOperationalEmissionSavings, 0),
                    percentSavings: formatValueWithoutDecimals(((energyManagementSystem?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions) * 100), 0),
                    color: "#F7A47B"
                })
            }
            if(technologies.chp) {
                data.push({
                    technologyOptions: "Combined heat and power (CHP)",
                    emissionSavings: formatValueWithTwoDecimals(chp?.annualOperationalEmissionSavings, 0),
                    percentSavings: formatValueWithoutDecimals(((chp?.annualOperationalEmissionSavings / baseline?.totalBaselineEmissions) * 100), 0),
                    color: "#E195DE"
                })
            }
        }
        return [...data];
    },[technologies])

    const barData = useMemo(()=>{
        const bData = [];
        if(emissionData.length) {
            for (let i = 0; i < emissionData.length; i++) {
                let dt = [emissionData[i].technologyOptions, emissionData[i].percentSavings, emissionData[i].color, emissionData[i].emissionSavings];
                bData.push(dt);
            }
    
            return [
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
                ...bData.sort( function ( a, b ) { return b[3] - a[3]; } )
    
            ];
        }else {
            return [];
        }
    },[emissionData]);

    const onSave = () => {
        dispatch(updateEmissionSavings({
            isComplete: true
        }));
        navigate("./../macc")
    }
    return <div>
        <h2 className="form-heading">% Emission savings</h2>
        <h3 className="form-subheading"></h3>
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