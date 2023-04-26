import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
  SubTitle,
} from 'chart.js';
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
  SubTitle
);
export const RadarOptions = {
  maintainAspectRatio: false ,
  layout: {
    padding: {
      top: 20
    }
  }, 
  responsive: true,

  scale: {
    min: 0,
    max: 4,
    stepSize: 1,
    beginAtZero: true,

    ticks: {
      showLabelBackdrop: false,
      backdropColor: "rgba(203, 197, 11, 1)",
    },
    angleLines: {
      color: "rgba(255, 255, 255, .3)",
      lineWidth: 1
    },
    gridLines: {
      color: "rgba(255, 255, 255, .3)",
      circular: false
    }
  }
};