import React, { useMemo } from "react";
import { Chart } from "react-google-charts";

const BarChartGoogle = ({ barData, hAxisTitle, vAxisTitle }) => {
    console.log(barData);
    const options = useMemo(() => {
        if (hAxisTitle && vAxisTitle) {
            return {
                title: "",
                width: 1000,
                height: 800,
                top: 10,
                bar: { groupWidth: "75%" },
                legend: { position: "none" },
                hAxis: {
                    title: hAxisTitle,
                    minValue: 0,
                    baseline: 0,
                    textStyle: { color: '#383939', fontSize: '12', bold: false }
                },
                vAxis: {
                    title: vAxisTitle,
                    baseline: 0,
                    ticks: ["none"],
                    gridlines: { count: 0 },
                    textStyle: { color: '#383939', fontSize: '12', bold: false },
                },
                colors: ['#4ED8DA'],
                curveType: 'none',
                fontName: 'Manrope',
            }
        }
    })
    return (
        <>
            {barData && barData.length ? <Chart
                chartType="BarChart"
                width="100%"
                height="800px"
                data={barData}
                options={options}
            /> : null}

        </>

    );
}
export default BarChartGoogle;
