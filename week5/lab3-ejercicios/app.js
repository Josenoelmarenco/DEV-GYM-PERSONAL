const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const getPost = async () => {
  try {
    const response = await fetch(apiUrl);

    console.log(response.status);
    console.log('ok: ', response.ok);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    console.log('count: ', data.length);
    console.log('first titlte: ', data[0]?.title);
  } catch (error) {
    console.error('Error obteniendo post', error.message);
  }
};

getPost();
