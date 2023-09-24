import { useState } from 'react';
import { useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, Text } from 'recharts';

// const formatLabel = (str) => {
//   let maxwidth = 10;
//   var sections = [];
//   var words = str.split(" ");
//   var temp = "";

//   words.forEach(function (item, index) {
//     if (temp.length > 0) {
//       var concat = temp + ' ' + item;

//       if (concat.length > maxwidth) {
//         sections.push(temp);
//         temp = "";
//       }
//       else {
//         if (index == (words.length - 1)) {
//           sections.push(concat);
//           return;
//         }
//         else {
//           temp = concat;
//           return;
//         }
//       }
//     }

//     if (index == (words.length - 1)) {
//       sections.push(item);
//       return;
//     }

//     if (item.length < maxwidth) {
//       temp = item;
//     }
//     else {
//       sections.push(item);
//     }

//   });

//   return sections;
// }
const truncateLabel = (label, maxLength) => {
  if (label.length > maxLength) {
    const words = label.split(' ');
    let result = '';
    let line = '';

    for (const word of words) {
      if (line.length + word.length <= maxLength) {
        line += (line.length > 0 ? ' ' : '') + word;
      } else {
        result += (result.length > 0 ? '\n' : '') + line;
        line = word;
      }
    }

    result += (result.length > 0 ? '\n' : '') + line;
    return result;
  }
  return label;
};

const RadarChartSurvey = ({ data, isOverall }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data != null || data != undefined) {
      if (!isOverall) {
        let categoryData = [];
        for (let i = 0; i < data.questions.length; i++) {
          let temp = {
            category: data.questions[i].heading,
            mrl: data.questions[i].mrl ? data.questions[i].mrl : 4,
            lrl: data.questions[i].lrl ? data.questions[i].lrl : 1,
            iarl: data.questions[i].iarl ? data.questions[i].iarl : 3,
            crl: data.questions[i].selectedOption < 4 ? data.questions[i].selectedOption + 1 : 0
          }
          categoryData.push(temp);
        }
        setChartData(prev => [...categoryData]);
      } else {
        let categoryData = [];
        for (let i = 0; i < data.length; i++) {
          let crlTotal = 0;
          let iarlTotal = 0;
          let mrlTotal = 0;
          let lrlTotal = 0;
          for (let j = 0; j < data[i].questions.length; j++) {
            iarlTotal += parseInt(data[i].questions[j].iarl);
            mrlTotal += parseInt(data[i].questions[j].mrl);
            lrlTotal += parseInt(data[i].questions[j].lrl);
            if (data[i].questions[j].selectedOption < 4) {
              crlTotal += data[i].questions[j].selectedOption + 1;
            } else {
              crlTotal += 0;
            }
          }
          let temp = {
            category: data[i].category,
            mrl: mrlTotal / data[i].questions.length,
            lrl: lrlTotal / data[i].questions.length,
            iarl: iarlTotal / data[i].questions.length,
            crl: crlTotal / data[i].questions.length
          }
          categoryData.push(temp);
        }
        setChartData(prev => [...categoryData]);
      }
    }
  }, [data, isOverall])
  return (
    <>
      {
        chartData?.length ? <RadarChart width={1000} height={450} data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="category"  axisLine={false} tickLine={false} orientation="outer" tick={{ fontSize: 16, fontFamily: "Manrope", fontWeight: 'bold', color: "#A8A8A9"}}/>
          <PolarRadiusAxis angle={90} axisLine={false} tick={{ fill: "#000", fontSize: 16 }}        />
          <Radar name="Company readiness level (CRL)" dataKey="crl" stroke="#27272A" strokeWidth="2" fill="#27272A" fillOpacity={0} dot={{ fill: "#27272A", r: 2 }} />
          <Radar name="Industry average readiness level (IARL)" dataKey="iarl" stroke="#79D4F1" strokeWidth="2" fill="#79D4F1" fillOpacity={0} dot={{ fill: "#79D4F1", r: 2 }} />
          <Radar name="Maximum readiness level (MRL)" dataKey="mrl" stroke="#CAD401" strokeWidth="2" fill="#CAD401" fillOpacity={0} dot={{ fill: "#CAD401", r: 2 }} />
          <Radar name="Lowest readiness level (LRL)" dataKey="lrl" stroke="#F9B123" strokeWidth="2" fill="#F9B123" fillOpacity={0} dot={{ fill: "#F9B123", r: 2 }} />
          {/* <Legend align="left" verticalAlign="middle" layout="vertical" /> */}
        </RadarChart> : null
      }
    </>

  );
}
export default RadarChartSurvey;
