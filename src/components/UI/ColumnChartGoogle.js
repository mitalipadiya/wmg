import { Chart } from "react-google-charts";

const ColumnChartGoogle = ({chartData}) => {
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
        if(data) {
            const widths = data.slice(1).map((row) => {
                const scalingFactor = 1;
                return Math.abs(row[0]) * scalingFactor;
            });
            return widths;
        }

    };

    // Get the incremental widths and set the bar option
    options.bar = {
        groupWidth: '100%', // Set the group width to fill the available space for each group of bars
        bars: calculateBarWidths(chartData),
    }

    return (
        <Chart
            width={'100%'}
            chartType="ColumnChart"
            data={chartData}
            options={options}
        />
    );
};
export default ColumnChartGoogle;