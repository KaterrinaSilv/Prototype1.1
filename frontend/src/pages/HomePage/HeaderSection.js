import React from "react";
import "./HeaderSection.css";

function HeaderSection() {
  return (
    <div className="header-section">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Логотип" />
        <h1>Название приложения</h1>
      </div>
      <p>Описание приложения. Слоган или объяснение.</p>
      <button className="new-case-btn" onClick={() => (window.location.href = "/new_win")}>
        Новое дело
      </button>
    </div>
  );
}

export default HeaderSection;
