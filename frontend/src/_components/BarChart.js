import React, {useState, useEffect} from 'react';
import { Chart } from "react-google-charts";

const BarChart = ({data}) => {
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
    }, [])
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