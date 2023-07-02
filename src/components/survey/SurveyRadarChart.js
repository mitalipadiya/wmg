import React, { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import { RadarOptions } from './RadarConfig';
import './SurveyRadarChart.css';

const SurveyRadarChart = (props) => {
  const [radarData, setRadarData] = useState(null);
  const [isDataReady, setIsDataReady] = useState(false);
  const [radarOptions, setRadarOptions] = useState({...RadarOptions});
  useEffect(() => {

    if (props.chartData && !isDataReady) {
      let labels = [];
      let crl = [];
      let iarl = [];
      let mrl = [];
      let lrl = [];
      if (!props.isOverall) {
        for (let i = 0; i < props.chartData.questions.length; i++) {
          labels.push(formatLabel(props.chartData.questions[i].heading, 30));
          mrl.push(props.chartData.questions[i].mrl ? props.chartData.questions[i].mrl : 4);
          lrl.push(props.chartData.questions[i].lrl ? props.chartData.questions[i].lrl : 1);
          iarl.push(props.chartData.questions[i].iarl ? props.chartData.questions[i].iarl : 3);
          if (props.chartData.questions[i].selectedOption < 4) {
            crl.push(props.chartData.questions[i].selectedOption + 1);
          } else {
            crl.push(0);
          }
        }
      } else {
        for (let i = 0; i < props.chartData.length; i++) {
          labels.push(props.chartData[i].category);
          let crlTotal = 0;
          let iarlTotal = 0;
          let mrlTotal = 0;
          let lrlTotal = 0;
          for (let j = 0; j < props.chartData[i].questions.length; j++) {
            iarlTotal += parseInt(props.chartData[i].questions[j].iarl);
            mrlTotal += parseInt(props.chartData[i].questions[j].mrl);
            lrlTotal += parseInt(props.chartData[i].questions[j].lrl);
            if (props.chartData[i].questions[j].selectedOption < 4) {
              crlTotal += props.chartData[i].questions[j].selectedOption + 1;
            } else {
              crlTotal += 0;
            }
          }
          crl.push(crlTotal/props.chartData[i].questions.length);
          mrl.push(mrlTotal/props.chartData[i].questions.length);
          lrl.push(lrlTotal/props.chartData[i].questions.length);
          iarl.push(iarlTotal/props.chartData[i].questions.length);
        }
      }
      let dataSetLabels = [{name: "Company readiness level (CRL)", color: "#27272A"},
      {name: "Industry average readiness level (IARL)", color: "#79D4F1"},
      {name: "Maximum readiness level (MRL)", color: "#CAD401"},
      {name: "Lowest readiness level (LRL)", color: "#F9B123"}
    ]
      let datasets = [];
      
      for(let i=0;i<dataSetLabels.length;i++) {
        datasets.push({
          label: dataSetLabels[i].name,
          backgroundColor: "transparent",
          borderColor: dataSetLabels[i].color,
          pointBackgroundColor: dataSetLabels[i].color,
          poingBorderColor: dataSetLabels[i].color,
          pointHoverBackgroundColor: dataSetLabels[i].color,
          pointHoverBorderColor: dataSetLabels[i].color,
          data: i == 0 ? [...crl] : (i==1 ? [...iarl] : (i == 2 ? [...mrl] : (i == 3 ? [...lrl] : []))),
          borderWidth: 1,
        })
      }
      let radarDt = {
        labels: labels,
        datasets: datasets
      }
      setIsDataReady(prev => {
        setRadarOptions (prev => {
          prev.plugins = {
            legend: {
              position: 'left',
              align:  'center'
            },
            title: {
              display: true,
              text: props?.isOverall ? "Overall summary" : props.chartData.category,
              position: 'top',
              align: 'start',
              color: '#27272A',
              font: {
                size: 24,
                family: 'Manrope'
            }
            },
            subtitle: {
              display: true,
              text: ['Aut quia odit quae maiores fuga delectus. Voluptates id consectetur quam fuga.', 'Reiciendis nesciunt sunt non. Labore odit iste eius eaque numquam eaque.'],
              align: 'start',
              color: '#7D7D7F',
              font: {
                size: 16,
                family: 'Manrope'
            }
          }
          };
          return {...prev}
        })
        setRadarData(prev => {
          return radarDt;
        })
        return true;
      })

    }

  }, [props.chartData]);
  const formatLabel = (str, maxwidth) => {
    var sections = [];
    var words = str.split(" ");
    var temp = "";
  
    words.forEach(function(item, index){
      if(temp.length > 0)
      {
        var concat = temp + ' ' + item;
  
        if(concat.length > maxwidth){
          sections.push(temp);
          temp = "";
        }
        else{
          if(index == (words.length-1)) {
            sections.push(concat);
            return;
          }
          else {
            temp = concat;
            return;
          }
        }
      }
  
      if(index == (words.length-1)) {
        sections.push(item);
        return;
      }
  
      if(item.length < maxwidth) {
        temp = item;
      }
      else {
        sections.push(item);
      }
  
    });
  
    return sections;
  }

  return (
    <>
      {isDataReady ? <div className='radar-chart-div'>
        <Radar data={radarData} options={radarOptions} width={300} height={300} />
      </div> : null}
    </>
  );
}

export default SurveyRadarChart;