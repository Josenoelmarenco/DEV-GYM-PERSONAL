const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

const fetchBlog = async () => {
  // 1. Hacemos la petición
  const response = await fetch(apiUrl);

  // 2. Desempacamos la respuesta en formato JSON
  const data = await response.json();

  // 3. Mostramos el resultado
  console.log('Mi primer dato: ', data);
};

fetchBlog();
