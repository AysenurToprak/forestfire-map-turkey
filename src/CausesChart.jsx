import React from 'react';
import { Pie } from 'react-chartjs-2';

const CausesChart = () => {
  const data = {
    labels: ['Yıldırım-Şimşek', 'Volkanik Patlamalar', 'Kamp Ateşi', 'Sigara', 'Kundaklama', 'İklim Değişiklikleri'],
    datasets: [{
      data: [25, 5, 20, 10, 20, 20],
      backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff', '#ff9f40']
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    }
  };

  return(
<div className="chart-causes" >
<Pie data={data} options={options} />
</div>

  );
  
};

export default CausesChart;
