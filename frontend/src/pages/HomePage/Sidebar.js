import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={expanded ? "sidebar expanded" : "sidebar"}>
      <button className="expand-btn" onClick={() => setExpanded(!expanded)}>
        ☰
      </button>
      <nav>
        <a href="/person_page">Аккаунт</a>
        <a href="/new_win">Новое дело</a>
        <a href="/all_win">Все дела</a>
        <a href="/search">Поиск</a>
        <a href="/auth">Выход</a>
      </nav>
    </div>
  );
}

export default Sidebar;
