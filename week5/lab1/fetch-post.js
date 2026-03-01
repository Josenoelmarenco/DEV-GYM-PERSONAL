const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const blog = {
  title: 'Mi nuevo Blog',
  body: 'Este es el contenido que estoy creando',
  userId: 1,
};

const addBlog = async () => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Especificamos el tipo de contenido a JSON
    },
    body: JSON.stringify(blog), // Convertimos el const blog objet a JSON string
  });

  const json = await response.json();
  console.log('Nuevo Blog añadido:  ', json);
};

addBlog();
