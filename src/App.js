// Importar los módulos necesarios de la biblioteca React
import React from 'react';
// Importar componentes para enrutamiento de la biblioteca react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importar el componente Navbar personalizado
import Navbar from './Components/Navbar/Navbar';
// Importar el componente Landing_Page
import Landing_Page from './Components/Landing_Page/Landing_Page';

// Componente de función para la aplicación principal
function App() {
  // Renderizar el componente principal de la aplicación
  return (
    <div className="App">
      {/* Configurar BrowserRouter para el enrutamiento */}
      <BrowserRouter>
        {/* Mostrar el componente Navbar */}
        <Navbar/>
        {/* Configurar las Rutas para diferentes páginas */}
        <Routes>
          {/* Ruta principal - Landing Page */}
          <Route path="/" element={<Landing_Page/>}/>
          <Route path="/appointments" element={<div>Citas - Temporal</div>}/>
          <Route path="/sign-up" element={<div>Registro - Temporal</div>}/>
          <Route path="/login" element={<div>Iniciar Sesión - Temporal</div>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Exportar el componente App como la exportación por defecto
export default App;