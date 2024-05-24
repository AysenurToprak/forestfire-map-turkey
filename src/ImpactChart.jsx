import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ImpactChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const impactChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Ekolojik', 'Ekonomik', 'Sağlık'],
        datasets: [{
          label: 'Etki Alanları',
          data: [50, 30, 20],
          backgroundColor: ['#FF5733', '#33FF57', '#3357FF']
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      impactChart.destroy();
    };
  }, []);

  return (
    <div className="chart-impact">
      
    <canvas ref={chartRef} ></canvas>
    </div>
  );
};

export default ImpactChart;
