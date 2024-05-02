import React from 'react';
import './Header.css'; // Importa los estilos CSS del header

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <h1 className="logo">TECHSTORE</h1>
        <button className="nav">Inicio</button>
        <div className="consultas">
          <a href={`https://wa.me/3364338670`} target="_blank" rel="noopener noreferrer" className="whatsapp-link">
            <button className="boton-whatsapp">
              <img src={process.env.PUBLIC_URL + '/images/whatsapp-logo.png'} alt="WhatsApp" className="whatsapp-logo" />
              <span className="whatsapp-number">3364-338670</span>
            </button>
          </a>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Buscar..." className="search-input" />
          <button className="search-button">Buscar</button>
        </div>
        
      </div>
    </div>
  );
};

export default Header;