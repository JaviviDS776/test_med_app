// Importar los módulos necesarios de la biblioteca React
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

// Componente de función para la barra de navegación
const Navbar = () => {
    // Estado para manejar el menú móvil
    const [isActive, setIsActive] = useState(false);
    // Estado para manejar si el usuario está autenticado
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // Estado para almacenar el nombre del usuario
    const [userName, setUserName] = useState('');
    
    // Hook de navegación
    const navigate = useNavigate();
    
    // Función para manejar el clic en el icono del menú
    const handleClick = () => {
        setIsActive(!isActive);
    };

    // useEffect para verificar si el usuario está autenticado
    useEffect(() => {
        const authToken = sessionStorage.getItem("auth-token");
        const userEmail = sessionStorage.getItem("email");
        
        if (authToken && userEmail) {
            setIsLoggedIn(true);
            // Extraer el nombre del usuario del email (parte antes del @)
            const extractedName = userEmail.split('@')[0];
            setUserName(extractedName);
        } else {
            setIsLoggedIn(false);
            setUserName('');
        }
    }, []);

    // Función para manejar el logout
    const handleLogout = () => {
        // Limpiar todos los datos del sessionStorage
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("phone");
        sessionStorage.removeItem("email");
        
        // Actualizar los estados
        setIsLoggedIn(false);
        setUserName('');
        
        // Redirigir a la página de inicio
        navigate("/");
        // Recargar la página para actualizar la interfaz
        window.location.reload();
    };

    return (
        <nav>
            {/* Sección del logo de navegación */}
            <div className="nav__logo">
                {/* Enlace a la página de inicio usando Link de React Router */}
                <Link to="/">
                    StayHealthy 
                    {/* Insertar un icono SVG de un médico con un estetoscopio */}
                    <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 1000 1000" style={{fill:'#3685fb'}}>
                        <title>Icono SVG de Doctor Con Estetoscopio</title>
                        <g>
                            <g>
                                {/* Ruta para el icono del estetoscopio */}
                                <path d="M499.8,10c91.7,0,166,74.3,166,166c0,91.7-74.3,166-166,166c-91.7,0-166-74.3-166-166C333.8,84.3,408.1,10,499.8,10z"></path>
                                {/* Ruta adicional para el icono */}
                                <path d="M499.8,522.8c71.2,0,129.1-58.7,129.1-129.1H370.6C370.6,464.1,428.6,522.8,499.8,522.8z"></path>
                                {/* Otra ruta para el icono */}
                                <path d="M693.2,395c-0.7,94.9-70.3,173.7-160.8,188.9v155.9c0,80.3-60.7,150.8-140.8,155.3c-83,4.7-152.7-58.9-157.6-139.7c-22-12.8-35.6-38.5-30.3-66.7c4.7-25.1,25.5-45.6,50.8-49.9c39.7-6.7,74.1,23.7,74.1,62.1c0,23-12.3,43-30.7,54.1c4.7,45.4,45.1,80.4,92.6,76c44.6-4,77.2-44.6,77.2-90.3v-74.5c-18.4-2.4-36-7.6-52.4-15.2c-80.6-37.3-115.9-132.2-78.6-212.8c37.3-80.6,132.2-115.9,212.8-78.6c36.3,16.8,65.4,45.9,82.2,82.2c37.3,80.6,2,175.5-78.6,212.8c-16.4,7.6-34,12.8-52.4,15.2v74.5c0,123.1-100.1,223.2-223.2,223.2S276.6,797.1,276.6,674c0-80.3,42.9-154.7,112.4-194.4c69.5-39.7,155.4-39.7,224.9,0C683.4,519.3,726.3,593.7,726.3,674z"></path>
                            </g>
                        </g>
                    </svg>
                </Link>
                {/* Un elemento span para fines de estilo */}
                <span>.</span>
            </div>
            
            {/* Sección de icono de navegación con un listener de evento onClick */}
            <div className="nav__icon" onClick={handleClick}>
                {/* Icono de Font Awesome para barras (menú hamburguesa) */}
                <i className="fa fa-times fa fa-bars"></i>
            </div>

            {/* Lista desordenada para enlaces de navegación con clase dinámica */}
            <ul className={`nav__links ${isActive ? 'active' : ''}`}>
                {/* Elemento de lista para el enlace 'Inicio' */}
                <li className="link">
                    <Link to="/">Inicio</Link>
                </li>
                {/* Elemento de lista para el enlace 'Citas' */}
                <li className="link">
                    <Link to="/appointments">Citas</Link>
                </li>
                
                {/* Renderizado condicional basado en el estado de autenticación */}
                {isLoggedIn ? (
                    // Si el usuario está autenticado, mostrar nombre y botón de logout
                    <>
                        {/* Mensaje de bienvenida con nombre del usuario */}
                        <li className="link welcome-user">
                            <span style={{ color: '#0d213f', marginRight: '1rem' }}>
                                Bienvenido, {userName}
                            </span>
                            {/* Menú desplegable opcional */}
                            <ul className="dropdown-menu">
                                <li><Link to="/profile">Mi Perfil</Link></li>
                                <li><Link to="/appointments">Mis Citas</Link></li>
                            </ul>
                        </li>
                        {/* Botón de Cerrar Sesión */}
                        <li className="link">
                            <button className="btn2" onClick={handleLogout}>
                                Cerrar Sesión
                            </button>
                        </li>
                    </>
                ) : (
                    // Si el usuario no está autenticado, mostrar botones de registro y login
                    <>
                        {/* Elemento de lista para el enlace 'Registrarse' con un botón */}
                        <li className="link">
                            <Link to="/sign-up">
                                <button className="btn1">Registrarse</button>
                            </Link>
                        </li>
                        {/* Elemento de lista para el enlace 'Iniciar Sesión' con un botón */}
                        <li className="link">
                            <Link to="/login">
                                <button className="btn1">Iniciar Sesión</button>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

// Exportar el componente Navbar como exportación por defecto
export default Navbar;