import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from 'recharts';
import "./ProgressBar.css";

const colors = ["#DFE566", "#F7A47B", "#79D4F1", "#9092BE", "#FBD07B", "#AC9A81", "#A8A8A9", "#F4A3A0", "#B0E195", "#95B2E1", "#E1BE95", "#E195DE", "#95E1D2", "#C3B9A1"]

const CustomLegend = ({ data }) => {
    return (
      <div className="custom-legend">
        {data.map((entry, index) => (
          <div key={index} className="legend-item">
            <div className="legend-color-box" style={{ backgroundColor: colors[index] }}></div>
            <div className="legend-text" style={{ color: 'black' }}>{entry.key}</div>
          </div>
        ))}
      </div>
    );
  };

export default function ProgressBar({ chartData }) {
    let data = [];
    let values = {task: ""};
    for(let i=0;i<chartData?.length;i++) {
        let newEntry = {};
        newEntry[chartData[i].key] = chartData[i].value;
        values = {...values, ...newEntry };
    }
    data.push(values);
    return (
        <>
            {
                chartData?.length && data.length ? <div className="horizontal-progress-chart">
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart layout="vertical" data={data} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
                            <XAxis type="number" >
                            <Label value="(tCO2e)" position='bottom' offset={0} />
                            </XAxis>
                            <YAxis dataKey="task" type="category" />
                            <Tooltip />

                            {chartData.map((entry, index) => (
                                <Bar key={index} dataKey={entry.key} stackId="status" fill={colors[index]}>
                                </Bar>
                            ))}
                        </BarChart>
                    </ResponsiveContainer>
                    <CustomLegend data={chartData} />

                </div> : null
            }
        </>

    );
}