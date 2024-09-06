import React, {useState, useEffect} from 'react';
import { Chart } from 'react-google-charts';

const LineChart = ({ data }) => {
    const [lineData, setLineData] = useState([])

    useEffect(() => {
        const transformData = (inputData) => {
            const result = [['Month', 'Value']];
            inputData.labels.forEach((label, index) => {
              result.push([label, inputData.data[index]]);
            });
            return result;
          };
        setLineData(transformData(data))
    }, [])
      
    const options = {
      title: 'Monthly Data',
      curveType: 'function',
      legend: { position: 'bottom' },
      hAxis: {
        title: 'Month',
      },
      vAxis: {
        title: 'Value',
      },
    };
  
    return (
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={lineData}
        options={options}
      />
    );
};
  
  export default LineChart;