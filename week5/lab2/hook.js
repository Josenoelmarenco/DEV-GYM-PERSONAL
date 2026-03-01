import { useState } from 'react';

const CrearBlog = () => {
  // Creamos un estado para guardar el título, inicialmente vacío
  const [titulo, setTitulo] = useState('');

  return (
    <form>
      <label>Título del Blog:</label>
      <input
        type='text'
        value={titulo}
        onChange={(evento) => setTitulo(evento.target.value)}
      />
    </form>
  );
};
