import React, { useState } from 'react';

const Buscador = ({ adopcionApi, setadopcionFiltrados }) => {
  const [busqueda, setBusqueda] = useState('');
  const handleInputChange = event => {
    const inputValue = event.target.value;
    setBusqueda(inputValue);
    
    const filteredData = adopcionApi.filter(adopcion =>
        adopcion.comuna.toLowerCase().includes(inputValue.toLowerCase()));
    setadopcionFiltrados(filteredData);
  };

  return (
    <div className="barraInput">
      <input
        className='barraEscritura'
        type="text"
        placeholder="Escribe tu Comuna"
        value={busqueda}
        onChange={handleInputChange}
      />
    </div>
  );
};
export default Buscador