// src/pages/HomePage/HomePage.js
import React from "react";
import Sidebar from "./Sidebar";   // Убедитесь, что Sidebar существует и правильно импортирован
import HeaderSection from "./HeaderSection";  // Убедитесь, что HeaderSection существует и правильно импортирован
import RecentReports from "./RecentReports";  // Убедитесь, что RecentReports существует и правильно импортирован
import "../../App.css";  // Убедитесь, что App.css существует
 
function HomePage() {
  console.log("Rendering HomePage");
  return (

    <div className="app">
      <Sidebar />
      <div className="main-content">
        <HeaderSection />
        <RecentReports />
      </div>
    </div>
  );
}

export default HomePage;
