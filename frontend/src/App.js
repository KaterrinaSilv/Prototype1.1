// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";  // Убираем BrowserRouter
import HomePage from "./pages/HomePage/HomePage";  // Импортируем HomePage
import NewWinPage from "./pages/NewWinPage/NewWinPage.js";  // Импортируем HomePage

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />  
      <Route path="/home_page" element={<HomePage />} />  
      <Route path="/new_win" element={<NewWinPage />} /> 
  
    </Routes>
  );
}

export default App;
