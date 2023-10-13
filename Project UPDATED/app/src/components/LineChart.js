import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

function LineChart({ ChartData }) {
    
    return (
        <Line data={ChartData} />
    );
}

export default LineChart