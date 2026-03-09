const blog = {
  title: 'New Blog',
  body: 'This is the content of the new blog.',
  userId: 1,
};

const addBlog = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST', // HTTP method for creating resources
      body: JSON.stringify(blog), // Converts JavaScript object to JSON string
      headers: {
        'Content-Type': 'application/json', // Specifies the content type as JSON
      },
    });

    if (!response.ok) {
      throw new Error('Failed to add a new blog'); // Handle non-successful responses
    }

    const json = await response.json(); // Parse the response to a JavaScript object
    console.log('New Blog added:', json);
  } catch (error) {
    console.error('Error adding blog:', error.message);
  }
};

addBlog();
