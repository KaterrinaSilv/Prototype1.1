// src/pages/HomePage/HomePage.js
import React from "react";
import Sidebar from "./Sidebar";   
import HeaderSection from "./HeaderSection";  
import RecentReports from "./RecentReports";  
import "./HomePage.css";  
 
function HomePage() {
  console.log("Rendering HomePage");
  return (

    <div className="app">
      <Sidebar />
        <div className="main-content">
        <div className="decorative-banner"></div> {/* Прямоугольник */}
        <HeaderSection />
        <RecentReports />
      </div>
    </div>
  );
}

export default HomePage;
