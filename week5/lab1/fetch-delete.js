const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

const deleteBlog = async () => {
  const response = await fetch(apiUrl, {
    method: 'DELETE',
  });
  if (response.ok) {
    console.log('!Blog eliminado!');
  } else {
    console.log('Hubo un error al eliminar');
  }
};

deleteBlog();
