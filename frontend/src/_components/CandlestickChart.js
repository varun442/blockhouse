import React, {useState, useEffect} from 'react';
import { Chart } from "react-google-charts";


const CandlestickChart = ({ data }) => {
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
    
  }, []);

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
      options={{
        legend: "none",
      }}
    />
    // <h1>Hello</h1>
  );
};

export default CandlestickChart;