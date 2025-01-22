// src/index.js (con React 18 y posterior)
import React from 'react';
import ReactDOM from 'react-dom/client';  // Cambiar la importación
import './CSS/inicio.css';  // Si tienes un archivo de estilos globales
import { BrowserRouter } from 'react-router-dom';  // Asegúrate de importar BrowserRouter
import App from './App';  // Importa App

const root = ReactDOM.createRoot(document.getElementById('root'));  // Usar createRoot en lugar de render
root.render(
  <BrowserRouter>  {/* Envuelve App con BrowserRouter */}
    <App />
  </BrowserRouter>
);






