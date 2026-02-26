const fetchBlog = async (id) => {
  try {
    const response = await fetch(`${apiUrl}/${id}`); // URL parameter to fetch a specific post
    const data = await response.json();

    console.log('Single Blog:', data);
  } catch (error) {
    console.error('Error fetching a blog:', error.message);
  }
};

const blogId = 1;
fetchBlog(blogId);
