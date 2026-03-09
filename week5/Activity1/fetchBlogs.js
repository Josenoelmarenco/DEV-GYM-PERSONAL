// app.js
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const fetchBlogs = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log('All Blogs:', data);
};

// Example Usage
fetchBlogs();
