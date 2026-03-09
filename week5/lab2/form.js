import { useState } from 'react';

const CrearBlog = () => {
  const [titulo, setTitulo] = useState('');

  const manejarEnvio = async (evento) => {
    // 1. Detenemos el comportamiento por defecto del navegador
    evento.preventDefault();

    // 2. Preparamos nuestro paquete con la variable de estado
    const blog = { title: titulo, body: 'Contenido...', userId: 1 };

    // 3. Llamamos al mesero (Fetch POST) como hicimos al principio
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    });

    console.log('¡Blog enviado sin recargar la página!');
  };

  return (
    <form onSubmit={manejarEnvio}>
      <label>Título del Blog:</label>
      <input
        type='text'
        value={titulo}
        onChange={(evento) => setTitulo(evento.target.value)}
      />
      <button type='submit'>Crear</button>
    </form>
  );
};
