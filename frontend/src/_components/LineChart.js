import React, {useState, useEffect} from 'react';
import { Chart } from 'react-google-charts';

/**
 * LineChart Component
 * 
 * This component renders a line chart using Google Charts.
 * It takes data as a prop and transforms it into the format required by Google Charts.
 * 
 */
const LineChart = ({ data }) => {
    // State to hold the transformed data for the chart
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
    }, [data]) // Added data as a dependency
      
    // Configuration options for the chart
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