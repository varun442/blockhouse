import React, {useState, useEffect} from 'react';
import { Chart } from "react-google-charts";

/**
 * CandlestickChart Component
 * 
 * This component renders a candlestick chart using Google Charts.
 * It takes data as a prop and transforms it into the format required by Google Charts.
 * 
 */
const CandlestickChart = ({ data }) => {
  // State to hold the transformed data for the chart
  const [candleData, setcandleData] = useState([])
  
  useEffect(() => {
    const transformData = (inputData) => {
      const result = [["day", "low", "open", "close", "high"]];
      inputData.forEach(item => {
        result.push([
          item.x,
          item.low,
          item.open,
          item.close,
          item.high
        ]);
      });
      return result;
    };

    setcandleData(transformData(data));
    console.log(candleData);
    
  }, [data]); // Added data as a dependency

  // Configuration options for the chart
  const options = {
    legend: 'none',
    bar: { groupWidth: '100%' },
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: '#a52714' },
      risingColor: { strokeWidth: 0, fill: '#0f9d58' }
    },
  };
  
  return (
    <Chart
      chartType="CandlestickChart"
      width="100%"
      height="400px"
      data={candleData}
      options={options}
    />
  );
};

export default CandlestickChart;