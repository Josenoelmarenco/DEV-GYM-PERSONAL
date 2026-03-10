const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const getBlogs = async () => {
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const blogs = await response.json();

  console.log('All blogs:', blogs);
  console.log('First blog:', blogs[0]);
};

getBlogs();
