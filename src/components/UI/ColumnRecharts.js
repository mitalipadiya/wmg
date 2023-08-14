import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Cell,
    Label
} from "recharts";

export default function ColumnRecharts({ data }) {
    console.log("chart data ==>", data);
    let legendItems = [];
    if(data) {
        legendItems =  data.map((entry) => ({
            value: entry.technologyOptions,
            color: entry.color,
        }));
    }
    return (
        <>
            {data && <BarChart
                width={800}
                height={600}
                data={data}
                layout="horizontal"
                margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="totalOperational" type="number" orientation="top" domain={[0, 'auto']}>
                    <Label value="CO2 emissions savings (tCO2e)" position='insideTopRight' offset={-8} />
                </XAxis>

                <YAxis dataKey="costEffectiveness" type="number" orientation="left" domain={[0, 'auto']}>
                    <Label value='£/tCO2e' angle={-90} position='insideLeft' />
                </YAxis>
                <Tooltip />
                <Legend iconType="rect" iconSize={14} payload={legendItems} margin={{ top: 20, right: 0, left: 0, bottom: 20 }} />
                <Bar dataKey="costEffectiveness">
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Bar>
            </BarChart>}
        </>


    );
}
