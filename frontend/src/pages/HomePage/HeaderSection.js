import React from "react";
import "./HeaderSection.css";

function HeaderSection() {
  return (
    <div className="header-section">
      <div className="logo">
        <img src="path/to/logo.png" alt="Logo" /> {/* Укажите путь к вашему лого */}
      </div>
      <div className="text-container">
        <h1>Заголовок</h1> {/* Здесь ваш заголовок */}
        <p>Подзаголовок, который объясняет что-то важное.</p> {/* Ваш подзаголовок */}
        <button className="new-case-btn">Новое дело</button>
      </div>
    </div>
  );
}

export default HeaderSection;
