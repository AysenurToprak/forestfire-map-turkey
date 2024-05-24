import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


const CausesChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const causesChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Doğal Sebepler', 'İnsan Nedenleri'],
        datasets: [{
          data: [30, 70],
          backgroundColor: ['#FF5733', '#33FF57']
        }]
      }
    });

    return () => {
      causesChart.destroy();
    };
  }, []);

  return (
    <canvas ref={chartRef} id="causesChart" width="400" height="400"></canvas>
  );
};

export default CausesChart;
