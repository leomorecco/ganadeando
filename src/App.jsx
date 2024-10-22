import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import Conocenos from './Componentes/Conocenos';
import Contacto from './Componentes/Contacto';
import AnimalBovinos from './Componentes/AnimalBovinos';
import Registro from './Componentes/Registro';
import InicioSesion from './Componentes/inicioSesion';
import './App.css';
import '../src/css/style.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar presente en todas las páginas */}
        <Routes>
          <Route path="/" element={<InicioSesion />} />
          <Route path="/conocenos" element={<Conocenos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/animal-bovinos" element={<AnimalBovinos />} />
          <Route path="/registrarse" element={<Registro />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirecciona a InicioSesion si la ruta no existe */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
