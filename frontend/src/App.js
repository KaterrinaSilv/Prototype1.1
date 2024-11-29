// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";  // Убираем BrowserRouter
import HomePage from "./pages/HomePage/HomePage";  // Импортируем HomePage
import NewWinPage from "./pages/NewWinPage/NewWinPage.js";  
import LoadPage from "./pages/LoadPage/LoadPage.js";  
import ResultPage from "./pages/ResultPage/ResultPage.js";  
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />  
      <Route path="/home_page" element={<HomePage />} />  
      <Route path="/new_win" element={<NewWinPage />} /> 
      <Route path="/load" element={<LoadPage />} /> 
      <Route path="result_page" element={<ResultPage />} /> 
  
    </Routes>
  );
}

export default App;
