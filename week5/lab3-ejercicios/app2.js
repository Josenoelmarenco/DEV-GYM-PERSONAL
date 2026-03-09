const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const getPosts = async () => {
  try {
    const response = await fetch(apiUrl);

    console.log('status:', response.status);
    console.log('ok:', response.ok);

    if (!response.ok) {
      // Para no tragarte errores silenciosos
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    console.log('count:', data.length);
    console.log('first title:', data[0]?.title);
    console.log('Five titles:', data.slice(0, 5)?.title);
    data.slice(0, 5).forEach((post, i) => {
      console.log(`${i + 1}. ${post.title}`);
    });
  } catch (error) {
    console.error('Error obteniendo posts:', error.message);
  }
};

getPosts();
