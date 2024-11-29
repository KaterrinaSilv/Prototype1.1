// src/pages/NewWinPage/NewWinPage.js
import React from "react";
import Sidebar from "../HomePage/Sidebar";
import HeaderWinSection from "./HeaderWinSection";     
import UploadedFiles from "./UploadedFiles";  
import "./NewWinPage.css";  
 
function NewWinPage() {
  console.log("Rendering NewWinPage");
  return (

    <div className="app">
      <Sidebar />
        <div className="main-content">
        <div className="decorative-banner"></div> 
        <HeaderWinSection />
        <UploadedFiles />
      </div>
    </div>
  );
}

export default NewWinPage;
