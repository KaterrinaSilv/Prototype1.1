// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";  // Убираем BrowserRouter
import HomePage from "./pages/HomePage/HomePage";  // Импортируем HomePage

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />  {/* Главная страница */}
      {/* Другие маршруты */}
    </Routes>
  );
}

export default App;
