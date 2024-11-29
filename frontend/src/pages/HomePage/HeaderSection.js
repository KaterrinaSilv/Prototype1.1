import React from "react";
import "./HeaderSection.css";
import { strings } from "../../assets/strings"; // Импорт строковых ресурсов

function HeaderSection() {
  return (
    <div className="header-section">
        <div class="logo">
    <div class="rectangle"></div>
  </div>
      <div className="text-container">
        <h1>{strings.appName}</h1> {/* Здесь ваш заголовок */}
        <p>{strings.homePageSubtitle}</p> {/* Ваш подзаголовок */}
        <button className="new-case-btn" 
        onClick={() => (window.location.href = `/new_win`)}>{strings.newCaseButton}</button>
      </div>
    </div>
  );
}

export default HeaderSection;
