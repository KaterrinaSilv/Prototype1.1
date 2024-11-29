  import React, { useState } from "react";
import "./HeaderWinSection.css";
import { strings } from "../../assets/strings"; // Импорт строковых ресурсов

function HeaderWinSection() {
  const [title, setTitle] = useState("Новое дело"); // Дефолтное значение

  const handleChange = (e) => {
    setTitle(e.target.value); // Обновляем состояние на основе введенного текста
  };

  return (
    <div className="header-section">
      <div className="logo">
        <div className="rectangle">
          <span role="img" aria-label="profile">👤</span>
        </div>
      </div>
      <div className="text-container">
        {/* Используем input для редактируемого заголовка */}
        <input
          type="text"
          value={title}
          onChange={handleChange} // Обработчик изменения текста
          className="editable-header"
        />
        <p>{strings.newWinPageSubtitle}</p>
        <div className="header-section">
        <button
          className="new-case-btn"
          onClick={() => (window.location.href = `/load`)}
        >
          {strings.uploadDocuments}
        </button>
        <button
          className="save-case-btn"
          onClick={() => (window.location.href = `/`)}
        >
          {strings.saveADraft}
        </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderWinSection;
