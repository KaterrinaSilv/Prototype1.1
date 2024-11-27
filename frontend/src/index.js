// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";  // Импортируем BrowserRouter
import App from "./App";  // Импортируем App

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Оборачиваем в BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")  // Убедитесь, что id="root" в вашем index.html
);
