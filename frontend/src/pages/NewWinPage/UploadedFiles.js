import React, { useState } from "react";
import "./UploadedFiles.css";  

function UploadedFiles() {
  console.log("Rendering UploadedFiles");

  // Тестовые данные
  const [files, setFiles] = useState([
    { id: 1, name: "Заявление о банкротстве.pdf" },
    { id: 2, name: "Опись имущества.pdf" },
  ]);

  // Функция для удаления файла
  const handleDelete = (id) => {
    setFiles(files.filter(file => file.id !== id)); // Удаляем файл по id
  };

  return (
    <div className="main-section">
      <div className="files">
        <h2>Загруженные файлы</h2>
        
        {/* Список файлов */}
        <div className="file-list">
          {files.map((file) => (
            <div key={file.id} className="file-item">
              <span>{file.name}</span>
              <button 
                className="delete-btn"
                onClick={() => handleDelete(file.id)}
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
        
        {/* Кнопка загрузки */}
        <button className="upload-btn">
          Загрузить
        </button>
        
        {/* Информация о работе с системой */}
        <div className="info-section">
          <div className="info-icon">i</div>
          <div className="info-text">
            <h3>Как работать в системе?</h3>
            <p>Пройдите быстрое обучение и пользуйтесь всеми удобствами системы.</p>
            <button className="training-btn">
              Пройти обучение
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadedFiles;
