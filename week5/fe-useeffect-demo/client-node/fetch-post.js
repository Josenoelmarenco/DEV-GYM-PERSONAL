const apiUrl = 'http://localhost:4000/api/blogs';

const blog = {
  title: 'Good day 2026-11-18',
  body: 'here is the body',
  author: 'Sami',
};

const addBlog = async () => {
  try {
    //! 1 - await fetch (url, option)
    const response = await fetch(apiUrl, {
      method: 'POST', // HTTP method for creating resources
      body: JSON.stringify(blog), // Converts JavaScript object to JSON string
      headers: {
        'Content-Type': 'application/json', // Specifies the content type as JSON
      },
    });

    //! 2 - response.ok verificamos si salió bien
    if (!response.ok) {
      throw new Error('Failed to add a new blog'); // Handle non-successful responses
    }

    //! 3 - obtenemos data y convertimos a objeto con response.json
    const json = await response.json(); // Parse the response to a JavaScript object
    console.log('New Blog added:', json);
  } catch (error) {
    console.error('Error adding blog:', error.message);
  }
};

addBlog();
