import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Используем useNavigate
import Sidebar from "../HomePage/Sidebar";
import "./LoadPage.css";

function LoadPage() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); // Заменяем useHistory на useNavigate

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 1);
      }, 100);
      return () => clearInterval(interval);
    } else {
      setIsLoading(false);
    }
  }, [progress]);

  const handleContinue = () => {
    navigate("/results"); // Используем navigate для перехода
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
              <div className="decorative-banner"></div> 
        <div className="loading-container">
          <div className="loading-box">
            <h1>Пожалуйста подождите</h1>
            <p>Выполняется анализ данных</p>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="buttons-container">
              <button className="cancel-btn">Отмена</button>
              <button className="pause-btn"
              onClick={() => (window.location.href = `/result_page`)}>
                {isLoading ? "Пауза" : "Продолжить"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadPage;
