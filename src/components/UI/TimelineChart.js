import React from 'react';
import Chart from 'react-google-charts';

const TimelineChart = () => {
 // Sample data for the horizontal stacked chart
 const data = [
    ['Category', 'Building Energy Management System', 'Solar Photovoltaics (PV)', 'Light Emitting Diodes (LED)',
    'Wind','Voltage optimization', 'Passive Infrared Sensors', 'Smart meter for gas', 'Smart meter for electricity'],
    ['', 40, 29, 25, 22, 19, 7, 12, 4], // The first column is empty, and the other columns represent the values
  ];
  const seriesColors = ['#F7A47B', '#79D4F1', '#9092BE','#FBD07B', '#BA80C6', '#AC9A81','#A8A8A9', '#F4A3A0'];
  // Options for the horizontal stacked chart
  const options = {
    displayAnnotations: true,
    height:300,
    title: '',
    hAxis: { title: 'tCO2e' },
    vAxis: { title: '' },
    legend: { position: 'bottom' },
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
      data={data}
      options={options}
    />
  );
};

export default TimelineChart;