import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Paginacelulares.css'; // Importa los estilos CSS
import Header from './Header'; // Importa el componente Header

const PaginaCelulares = () => {
  const [celulares, setCelulares] = useState([]);

  // Función para cargar los datos desde el archivo JSON
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('./data/celulares.json');
        setCelulares(response.data);
      } catch (error) {
        console.error('Error al cargar datos desde el archivo JSON:', error);
      }
    };

    fetchData();
  }, []);

  // Función para guardar los cambios en el archivo JSON
  const guardarCambios = async () => {
    try {
      console.log('Cambios guardados correctamente en el archivo JSON');
    } catch (error) {
      console.error('Error al guardar cambios en el archivo JSON:', error);
    }
  };

  // Renderiza los celulares
  return (
    <div>
      {/* Agrega el componente Header aquí */}
      <Header />
      <div className="contenedor">
        {celulares.map((celular, index) => (
          <div key={index} className="celular">
          <img className="celular-img" src={celular.imagen} alt={celular.modelo} />
          <h2 className="celular-titulo">{celular.modelo}</h2>
          <p className="celular-caracteristicas">{celular.caracteristicas}</p>
          <p className="celular-precio">Precio: <span className="precio-rojo">${celular.precio}</span></p>
          <button className="celular-boton-whatsapp" onClick={() => window.open(`https://wa.me/${celular.whatsapp}`, '_blank')}>
            Consultar por WhatsApp
          </button>
        </div>
        ))}
        <button onClick={guardarCambios}>Guardar Cambios</button>
      </div>
    </div>
  );
};

export default PaginaCelulares;
