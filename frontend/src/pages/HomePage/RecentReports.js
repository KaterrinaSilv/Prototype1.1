import React from "react";
import "./RecentReports.css";

const dummyReports = [
  {
    id: 1,
    name: "Иван Иванов",
    created: "01.11.2024",
    updated: "15.11.2024",
  },
  {
    id: 2,
    name: "Анна Петрова",
    created: "10.11.2024",
    updated: "20.11.2024",
  },
];

function RecentReports() {
  return (
    <div className="recent-reports">
      <h2>Последние отчеты:</h2>
      <ul>
        {dummyReports.map((report) => (
          <li key={report.id} className="report-item">
            <div className="avatar">👤</div>
            <div className="report-info">
              <h3>{report.name}</h3>
              <p>Создано: {report.created}</p>
              <p>Изменено: {report.updated}</p>
            </div>
            <button
              className="details-btn"
              onClick={() => (window.location.href = `/profile/${report.id}`)}
            >
              ▶
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentReports;
