import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
//   import faker from 'faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };
  
   const labels = [2840, 2130, 2453, 397, 1134, 681, 1846, 3972];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 2',
        data: [7,5,6,1,3,2,5,10],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: [
            '#F7A47B',
            '#79D4F1',
            '#9092BE',
            '#FBD07B',
            '#BA80C6',
            '#A8A8A9',
            '#AC9A81',
            '#F4A3A0'
          ],
          borderColor: '#fff',
          borderWidth: 1
      },
    ],
  };
  
  const BarChart = () => {
    return <Bar options={options} data={data} />;
  }
  export default BarChart;
  