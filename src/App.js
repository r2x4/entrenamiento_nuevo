// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './Componentes/inicio';
import CrearCuenta from './Componentes/crearCuenta';
import ClasesMercancias from './Componentes/clasesMercancias';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/crear-cuenta" element={<CrearCuenta />} />
          <Route path="/productos" element={<ClasesMercancias />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;







