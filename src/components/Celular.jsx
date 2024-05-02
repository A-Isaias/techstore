import React from 'react';

const Celular = ({ modelo, caracteristicas, precio, whatsapp }) => {
  return (
    <div className="celular">
      <h2>{modelo}</h2>
      <p>{caracteristicas}</p>
      <p>Precio: ${precio}</p>
      <button onClick={() => window.open(`https://wa.me/${whatsapp}`, '_blank')}>
        Consultar por WhatsApp
      </button>
    </div>
  );
};

export default Celular;