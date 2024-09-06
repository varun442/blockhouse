import React, {useState, useEffect} from 'react';
import { Chart } from 'react-google-charts';

const PieChart = ({ data }) => {
    const [pieData, setpieData] = useState([])
  
  

  useEffect(() => {
    const transformData = (inputData) => {
        const result = [['Color', 'Value']];
        inputData.labels.forEach((label, index) => {
          result.push([label, inputData.data[index]]);
        });
        return result;
      };
    setpieData(transformData(data))    
    }, [])
  

  const options = {
    title: 'Color Distribution',
    is3D: true,
    responsive: true,
    legend: { position: 'top' },
    slices: {
      0: { color: 'red' },
      1: { color: 'blue' },
      2: { color: 'yellow' }
    },
    chartArea: { width: '100%', height: '80%' },
  };

  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={pieData}
      options={options}
    />
  );
};

export default PieChart;

