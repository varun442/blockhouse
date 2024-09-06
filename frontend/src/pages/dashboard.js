import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CandlestickChart from '@/_components/CandlestickChart';
import LineChart from '@/_components/LineChart';
import BarChart from '@/_components/BarChart';
import PieChart from '@/_components/PieChart';

const Dashboard = () => {
    const [chartData, setChartData] = useState({
        candlestick: null,
        line: null,
        bar: null,
        pie: null, 
    });
    const [errors, setErrors] = useState({
        candlestick: null,
        line: null,
        bar: null,
        pie: null,
    });
    const [selectedChart, setSelectedChart] = useState('candlestick');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const [candlestickRes, lineRes, barRes, pieRes] = await Promise.allSettled([
                    axios.get('http://localhost:8000/api/candlestick-data/'),
                    axios.get('http://localhost:8000/api/line-chart-data/'),
                    axios.get('http://localhost:8000/api/bar-chart-data/'),
                    axios.get('http://localhost:8000/api/pie-chart-data/'),
                ]);

                setChartData({
                    candlestick: candlestickRes.status === 'fulfilled' ? candlestickRes.value.data : null,
                    line: lineRes.status === 'fulfilled' ? lineRes.value.data : null,
                    bar: barRes.status === 'fulfilled' ? barRes.value.data : null,
                    pie: pieRes.status === 'fulfilled' ? pieRes.value.data : null,
                });

                setErrors({
                    candlestick: candlestickRes.status === 'rejected' ? 'Failed to fetch candlestick data' : null,
                    line: lineRes.status === 'rejected' ? 'Failed to fetch line chart data' : null,
                    bar: barRes.status === 'rejected' ? 'Failed to fetch bar chart data' : null,
                    pie: pieRes.status === 'rejected' ? 'Failed to fetch pie chart data' : null,
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const renderSelectedChart = () => {
        if (isLoading) {
            return <div className="text-center py-10">Loading...</div>;
        }

        if (errors[selectedChart]) {
            return (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline"> {errors[selectedChart]}</span>
                </div>
            );
        }

        switch (selectedChart) {
            case 'candlestick':
                return chartData.candlestick && <CandlestickChart data={chartData.candlestick.data} />;
            case 'line':
                return chartData.line && <LineChart data={chartData.line} />;
            case 'bar':
                return chartData.bar && <BarChart data={chartData.bar} />;
            case 'pie':
                return chartData.pie && <PieChart data={chartData.pie} />;
            default:
                return null;
        }
    };

    return (
        <div className="text-black flex flex-col lg:flex-row min-h-screen bg-gray-100">
            <div className="w-full lg:w-64 p-4 lg:p-6 bg-white shadow-md">
                <h2 className="text-xl font-semibold mb-4">Select Chart</h2>
                <select 
                    value={selectedChart} 
                    onChange={(e) => setSelectedChart(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="candlestick">Candlestick Chart</option>
                    <option value="line">Line Chart</option>
                    <option value="bar">Bar Chart</option>
                    <option value="pie">Pie Chart</option>
                </select>
            </div>
            <div className="flex-1 p-4 lg:p-6">
                <h1 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Dashboard</h1>
                <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md">
                    {renderSelectedChart()}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;