import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList } from 'recharts';

const StackedBarChart = ({ data }) => {
    const [chartHeight, setChartHeight] = useState(300);

    useEffect(() => {
        if (data && data.length) {
            setChartHeight(Math.max(data.length * 50, 300)); 
        }
    }, [data])

    return (
        <>
            {
                data && data.length && chartHeight ? 
                <BarChart width={1000} height={chartHeight} data={data} layout="vertical" margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" margin={{ right: 100 }}/>
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Agriculture" stackId="a" fill="#F7A47B" barSize={50}>
                    </Bar>
                    <Bar dataKey="Transport" stackId="a" fill="#9092BE" barSize={50} />
                    <Bar dataKey="Business services" stackId="a" fill="#79D4F1" barSize={50} />
                    <Bar dataKey="Trade" stackId="a" fill="#B0E195" barSize={50} />
                    <Bar dataKey="NA" stackId="a" fill="#AC9A81" barSize={50} />
                    <Bar dataKey="Manufacturing" stackId="a" fill="#FBD07B" barSize={50}>
                        <LabelList dataKey="cost" position="right" />
                    </Bar>
                </BarChart> : null
            }
        </>


    );
};

export default StackedBarChart;