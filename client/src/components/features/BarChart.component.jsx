import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
    )

function BarChart() {
  return (
    <div>BarChart
        <Bar
            height={ 400}
        />
    </div>
    // <Bar 
    // data={}
    // height={ 400}
    // options = {}
    // />
  )
}

export default BarChart