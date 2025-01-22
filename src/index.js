import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './CSS/inicio.css';  
import { BrowserRouter } from 'react-router-dom';  
import App from './App';  // Importa App

const root = ReactDOM.createRoot(document.getElementById('root'));  // Usar createRoot en lugar de render
root.render(
  <BrowserRouter>  {/* Envuelve App con BrowserRouter */}
    <App />
  </BrowserRouter>
);






