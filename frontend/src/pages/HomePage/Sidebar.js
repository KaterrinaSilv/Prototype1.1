import React, { useState } from "react";
import { strings } from "../../assets/strings";  // Импортируем строковые ресурсы
import "./Sidebar.css";

function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={expanded ? "sidebar expanded" : "sidebar"}>
      <button className="expand-btn" onClick={() => setExpanded(!expanded)}>
        ☰
      </button>
      <nav>
        <a href="/person_page">
          <img src={strings.iconPaths.profile} alt="Профиль" className="sidebar-icon" />
          {expanded && strings.buttons.profile}
        </a>
        <a href="/new_win">
          <img src={strings.iconPaths.newCase} alt="Новое дело" className="sidebar-icon" />
          {expanded && strings.buttons.newCase}
        </a>
        <a href="/home_page">
          <img src={strings.iconPaths.homePage} alt="Домашняя страница" className="sidebar-icon" />
          {expanded && strings.buttons.homePage}
        </a>
        <a href="/all_win">
          <img src={strings.iconPaths.allCases} alt="Все дела" className="sidebar-icon" />
          {expanded && strings.buttons.allCases}
        </a>
        <a href="/search">
          <img src={strings.iconPaths.search} alt="Поиск" className="sidebar-icon" />
          {expanded && strings.buttons.search}
        </a>
        <a href="/auth">
          <img src={strings.iconPaths.logout} alt="Выход" className="sidebar-icon" />
          {expanded && strings.buttons.logout}
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;
