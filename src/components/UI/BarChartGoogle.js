import React from "react";
import { Chart } from "react-google-charts";

export const data = [
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
    ["Building energy management system", 10, "#F7A47B", 3972],
    ["Solar Photovoltaics (PV)", 7, "#79D4F1", 2840],
    ["Light Emitting Diodes (LED)", 6, "#9092BE", 2453],
    ["Wind", 5, "#FBD07B", 2130],
    ["Voltage optimisation", 5, "#BA80C6", 1846],
    ["Smart meter for gas", 3, "#A8A8A9", 1134],
    ["Passive Infrared Sensors", 2, "#AC9A81", 681],
    ["Smart meter for electricity", 1, "#F4A3A0", 397],

];

export const options = {
    title: "",
    width: 1000,
    height: 800,
    top: 10,
    bar: { groupWidth: "75%" },
    legend: { position: "none" },
    hAxis: {
        title: "% Savings with reference to Baseline",
        minValue: 0,
        maxValue: 12,
        baseline: 0,
        textStyle: { color: '#383939', fontSize: '12', bold: false }
    },
    vAxis: {
        title: "kgCO2e",
        baseline: 0,
        ticks: ["none"],
        gridlines: { count: 0 },
        textStyle: { color: '#383939', fontSize: '12', bold: false },
    },
    colors: ['#4ED8DA'],
    curveType: 'none',
    fontName: 'Manrope',
};

const BarChartGoogle = () => {
    return (
        <Chart
            chartType="BarChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}
export default BarChartGoogle;
