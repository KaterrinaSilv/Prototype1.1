import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import Sidebar from "../HomePage/Sidebar";
import "./ResultPage.css";

// Регистрация компонентов Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

function ResultPage() {
  const data = {
    labels: ["Вероятность признания банкротом (29%)"],
    datasets: [
      {
        data: [29, 71],
        backgroundColor: ["#7B6BA7", "#d5d4ea"],
        hoverBackgroundColor: ["#4A4458", "#c4c3d3"],
      },
    ],
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content-load">
        <div className="decorative-banner"></div>
        <div className="results-container">
          <h1>Результаты анализа</h1>
          <div className="chart-text-container">
            <div className="chart-container">
              <Doughnut data={data} />
            </div>
            <p>Тут будут результаты анализа</p>
          </div>
          <button className="download-btn">Скачать отчет</button>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
