import React, {useState, useEffect} from 'react';
import { Chart } from 'react-google-charts';

/**
 * PieChart Component
 * 
 * This component renders a pie chart using Google Charts.
 * It takes data as a prop and transforms it into the format required by Google Charts.
 * 
 */
const PieChart = ({ data }) => {
    // State to hold the transformed data for the chart
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
    }, [data]) // Added data as a dependency
  
    // Configuration options for the chart
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