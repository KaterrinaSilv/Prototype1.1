import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPlus, faHome, faFileAlt, faSearch, faSignOutAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import { strings } from "../../assets/strings"; // Импорт строковых ресурсов
import "./Sidebar.css";
import { colors } from "../../assets/colors"; // Импорт цветов

function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={expanded ? "sidebar expanded" : "sidebar"}>
      <button className="expand-btn" onClick={() => setExpanded(!expanded)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav>
        <a href="/person_page">
          <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
          {expanded && strings.buttons.profile}
        </a>
        <a href="/new_win">
          <FontAwesomeIcon icon={faPlus} className="sidebar-icon" />
          {expanded && strings.buttons.newCase}
        </a>
        <a href="/home_page">
          <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
          {expanded && strings.buttons.homePage}
        </a>
        <a href="/all_win">
          <FontAwesomeIcon icon={faFileAlt} className="sidebar-icon" />
          {expanded && strings.buttons.allCases}
        </a>
        <a href="/search">
          <FontAwesomeIcon icon={faSearch} className="sidebar-icon" />
          {expanded && strings.buttons.search}
        </a>
      </nav>
    <a href="/auth" className="logout-btn">
        <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: "8px" }} />
        {expanded && strings.buttons.logout}
      </a>
    </div>
  );
}

export default Sidebar;
