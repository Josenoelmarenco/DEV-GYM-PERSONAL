import { useState, useEffect } from 'react';

// Este componente recibe el ID del blog que queremos ver
const DetalleBlog = ({ idDelBlog }) => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      // Inyectamos el ID directamente en la URL del mesero (Fetch)
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${idDelBlog}`,
      );
      const data = await response.json();
      setBlog(data);
    };

    fetchBlog();
  }, [idDelBlog]); // <--- ¡Aquí está nuestra "caja" vigilando el ID!

  return <div>{blog ? <h1>{blog.title}</h1> : <p>Cargando...</p>}</div>;
};
