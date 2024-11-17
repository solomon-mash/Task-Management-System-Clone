import React from 'react';
import './graphical.css';
import { Line } from 'react-chartjs-2';
import 'react-circular-progressbar/dist/styles.css';

import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, 
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';


ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ArcElement
);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Tasks',
      data: [12, 19, 3, 5, 2, 3],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
      tension: 0.4, 
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};


const data2 = {
    labels: ["Total Tasks 1234", "Running 800", "Pending 434"],
    datasets: [
      {
        label: "Total Tasks",
        data: [1234, 20], 
        backgroundColor: ["rgba(75, 192, 192, 1)", "rgba(255, 255, 255, 0)"],
        borderWidth: 0, 
        cutout: "80%",
      },
      {
        label: "Running Tasks",
        data: [800, 35], 
        backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(255, 255, 255, 0)"],
        borderWidth: 0,
        cutout: "65%",
      },
      {
        label: "Pending Tasks",
        data: [434, 50], 
        backgroundColor: ["rgba(153, 102, 255, 1)", "rgba(255, 255, 255, 0)"],
        borderWidth: 0,
        cutout: "50%",
      },
    ],
  };
  
  const options2 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right", 
        labels: {
          color: "#333",
          font: {
            size: 10,
          },
          boxWidth:3, 
          boxHeight: 5,
        },
      },
    },
  }
const Graphs = () => {
  return (
    <div className="graphs-main">
      <div className="total-work">
        <div className="graph-head">
          <p id="chart-header"> Total Work </p>
          <div className="chart-dropbtn">
            <select name="projects-list">
              <option value="option1"> 1 month </option>
              <option value="option2"> 6 months </option>
              <option value="option3"> 1 year </option>
            </select>
          </div>
        </div>
        <div className="graph-body">
          
            <Line data={data} options={options} />
          
        </div>
      </div>
      <div className="task-percentage">
        <div className="taskpercent-titlebar">
          <p id="chart-header"> Task Percentage </p>
        </div>
        <div className="spiral-graph">
        <Doughnut data={data2} options={options2} /> </div>
      </div>
    </div>
  );
};

export default Graphs;
