import { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Cell,
    LabelList
} from "recharts";
import "./ComparePortfolios.scss";

const ComparePortfolios = ({ data, currency }) => {
    const [chartHeight, setChartHeight] = useState(300);
    const [minEmission, setMinEmission] = useState();
    const [maxEmission, setMaxEmission] = useState();
    const [minCost, setMinCost] = useState();
    const [maxCost, setMaxCost] = useState();

    useEffect(() => {
        if (data && data.length) {
            setChartHeight(Math.max(data.length * 50, 300));
            let minEmissionVal = data[0].emission;
            let maxEmissionVal = data[0].emission;
            let minCostVal = data[0].cost;
            let maxCostVal = data[0].cost;
            setMinEmission(data[0]);
            setMaxEmission(data[0]);
            setMinCost(data[0]);
            setMaxCost(data[0]);
            for(let i=1;i<data.length;i++) {
                if (minEmissionVal > data[i].emission) {
                    minEmissionVal = data[i].emission;
                    setMinEmission(data[i]);
                }
                if (maxEmissionVal < data[i].emission) {
                    maxEmissionVal = data[i].emission;
                    setMaxEmission(data[i]);
                }
                if (minCostVal > data[i].emission) {
                    minCostVal = data[i].emission;
                    setMinCost(data[i]);
                }
                if (maxCostVal < data[i].emission) {
                    maxCostVal = data[i].emission;
                    setMaxCost(data[i]);
                }
            }            
        }
    }, [data])

    return (
        <>
            {
                data && data.length ?
                    <div className="bar-div">
                        <h3 style={{ margin: "20px" }} className="group-heading">GRAPHICAL VIEW</h3>
                        <BarChart width={1000} height={chartHeight}
                            data={data} layout="vertical"
                            margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" />
                            <Tooltip />
                            <Bar dataKey="emission" fill="#8884d8" barSize={50} >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                                <LabelList dataKey="cost" position="right" fill="#000" />
                            </Bar>
                        </BarChart>
                        <div>
                            <h3 style={{ margin: "20px" }} className="group-heading">EMISSIONS AND COST BREAKDOWN</h3>
                            <div className="summary-div">
                                <div className="summary-div-child">
                                    <p className="heading comp-main">Total embodied emissions breakdown (kgCO2)</p>
                                    <div className="comp-div">
                                        <div className="heading-div">
                                            <span className="heading-span"></span>
                                            <p className="heading">{maxEmission?.name}</p>
                                            <p className="heading-data">{maxEmission?.emission} kgCO2</p>
                                        </div>
                                        <p className="sub-heading">Highest total embodied emissions</p>
                                        <hr />
                                    </div>
                                    <div className="comp-div">
                                        <div className="heading-div">
                                            <span className="heading-span"></span>
                                            <p className="heading">{minEmission?.name}</p>
                                            <p className="heading-data">{minEmission?.emission} kgCO2</p>
                                        </div>
                                        <p className="sub-heading">Lowest total embodied emissions</p>
                                        <hr />
                                    </div>
                                </div>
                                <div className="summary-div-child">
                                    <p className="heading comp-main">Total cost breakdown ({currency})</p>
                                    <div className="comp-div">
                                        <div className="heading-div">
                                            <span className="heading-span"></span>
                                            <p className="heading">{maxCost?.name}</p>
                                            <p className="heading-data">{`${currency} ${maxCost?.cost}`}</p>
                                        </div>
                                        <p className="sub-heading">Highest total cost</p>
                                        <hr />
                                    </div>
                                    <div className="comp-div">
                                        <div className="heading-div">
                                            <span className="heading-span"></span>
                                            <p className="heading">{minCost?.name}</p>
                                            <p className="heading-data">{`${currency} ${minCost?.cost}`}</p>
                                        </div>
                                        <p className="sub-heading">Lowest total cost</p>
                                        <hr />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : null
            }
        </>


    );
}
export default ComparePortfolios;