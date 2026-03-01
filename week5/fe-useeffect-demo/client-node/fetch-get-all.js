const apiUrl = 'http://localhost:4000/api/blogs';

const fetchBlogs = async () => {
  try {
    const response = await fetch(apiUrl); // Sends a GET request to retrieve data
    const data = await response.json(); // Parse the response body as a JavaScript object

    console.log('All Blogs:', data);
  } catch (error) {
    console.error('Error fetching blogs:', error.message);
  }
};

fetchBlogs();
