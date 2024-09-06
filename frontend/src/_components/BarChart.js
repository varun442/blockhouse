import React, {useState, useEffect} from 'react';
import { Chart } from "react-google-charts";

/**
 * BarChart Component
 * 
 * This component renders a bar chart using Google Charts.
 * It takes data as a prop and transforms it into the format required by Google Charts.
 * 
 */
const BarChart = ({data}) => {
    // State to hold the transformed data for the chart
    const [barData, setbarData] = useState([])
    
    useEffect(() => {
        const transformData = (inputData) => {
            const result = [['Product', 'Sales']]
            inputData.labels.forEach((label, index)=>{
                result.push([label, inputData.data[index]]);
            })
            return result;
        }
        setbarData(transformData(data))
    }, [data]) // Added data as a dependency

    // Configuration options for the chart
    const options = {
        title: 'Product Sales',
        chartArea: { width: '50%' },
        hAxis: {
          title: 'Sales',
          minValue: 0,
        },
        vAxis: {
          title: 'Product',
        },
    };
    
    return (
        <Chart
          chartType="BarChart"
          width="100%"
          height="400px"
          data={barData}
          options={options}
        />
    )
}

export default BarChart