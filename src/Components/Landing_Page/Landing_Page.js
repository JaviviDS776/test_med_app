// Importar los módulos necesarios de la biblioteca React
import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"; // Importar los estilos CSS para el componente Landing_Page

// Definiendo el componente de función Landing_Page
const Landing_Page = () => {
    return (
        <section className="hero-section">
            <div>
                <div data-aos="fade-up" className="flex-hero">
                    <h1>
                        Your Health<br/>
                        <span className="text-gradient">
                            Our Responsibility
                        </span>
                    </h1>
                    
                    {/* Contenedores de blobs para efectos visuales */}
                    <div className="blob-cont">
                        <div className="blue blob"></div>
                    </div>
                    <div className="blob-cont">
                        <div className="blue1 blob"></div>
                    </div>
                    
                    <h4>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque at quae ducimus. Suscipit omnis quibusdam non cum rem voluptatem! 
                    </h4>
                    
                    {/* Enlace para comenzar - se puede cambiar por una ruta específica */}
                    <a href="#services">
                        <button className="button">Get Started</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

// Exportar el componente Landing_Page para usarlo en otras partes de la aplicación
export default Landing_Page;