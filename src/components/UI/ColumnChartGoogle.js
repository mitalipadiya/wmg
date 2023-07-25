import { Chart } from "react-google-charts";

const ColumnChartGoogle = () => {
    // Sample data for the chart
    const data = [
        ['X-Axis Value', 'Y-Axis Value', { role: 'style' }, { role: 'annotation' }],
        ['25', -656, '#9092BE', 'Light Emitting Diodes (LED)'],
        ['4', -641, '#F4A3A0', 'Smart meter for electricity'],
        ['22', -491, '#FBD07B', 'Wind'],
        ['7', -466, '#AC9A81', 'Passive Infrared Sensors'],
        ['29', -345, '#79D4F1', 'Solar Photovoltaics (PV)'],
        ['40', -312, '#F7A47B', 'Building Energy Management System'],
        ['19', -269, '#BA80C6', 'Voltage optimization'],
        ['12', -247, '#A8A8A9', 'Smart meter for gas'],

    ];

    // Options for the chart
    const options = {
        height: 800,
        title: '',
        vAxis: {
            title: '£/tCO2e',
            minValue: 0,
            baseline: 0,
        },
        hAxis: {
            title: 'CO2 emissions savings (tCO2e)',
            baseline: 0,
        },
        legend: { position: 'none' }
    };

    const calculateBarWidths = (data) => {
        const widths = data.slice(1).map((row) => {
            const scalingFactor = 1;
            return Math.abs(row[0]) * scalingFactor;
        });
        return widths;
    };

    // Get the incremental widths and set the bar option
    options.bar = {
        groupWidth: '100%', // Set the group width to fill the available space for each group of bars
        bars: calculateBarWidths(data),
    }

    return (
        <Chart
            width={'100%'}
            chartType="ColumnChart"
            data={data}
            options={options}
        />
    );
};
export default ColumnChartGoogle;