const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const blogId = 1;

const fetchBlog = async (id) => {
  const response = await fetch(`${apiUrl}/${id}`);
  const data = await response.json();
  console.log('Single Blog:', data);
};

fetchBlog(blogId);
