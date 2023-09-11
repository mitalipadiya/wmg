import React from 'react';
import Chart from 'react-google-charts';

const TimelineChart = ({chartData}) => {
  console.log("chartData ==>", chartData);
 // Sample data for the horizontal stacked chart
  const seriesColors = ['#F7A47B', '#79D4F1', '#9092BE','#FBD07B', '#BA80C6', '#AC9A81','#A8A8A9', '#F4A3A0'];
  // Options for the horizontal stacked chart
  const options = {
    displayAnnotations: true,
    height:300,
    title: '',
    hAxis: { title: 'tCO2e' },
    vAxis: { title: '' },
    legend: { position: 'bottom', alignment: 'center', maxLines: 2,},
    bars: 'horizontal', // Display bars horizontally
    isStacked: true, // Stack the bars
    animation: {
      duration: 1000, // Optional animation duration
      startup: true,
    },
    colors: seriesColors,
    annotations: {
      stem: {
        color: 'transparent', // Make the stem of the annotation transparent
      },
      textStyle: {
        fontSize: 12,
      },
    },
    bar: { groupWidth: 20 },
    
  };

  return (
    <Chart
      width={'100%'}
      chartType="BarChart"
      data={chartData}
      options={options}
    />
  );
};

export default TimelineChart;