const updateBlog = async (blogId, updatedData) => {
  try {
    const response = await fetch(`${apiUrl}/${blogId}`, {
      method: 'PUT', // HTTP method for updating a resource
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData), // Convert the updated data to a JSON string
    });

    if (!response.ok) {
      throw new Error('Failed to update the blog');
    }

    const updatedBlog = await response.json(); // Parse the server's response
    console.log('Blog updated:', updatedBlog);
  } catch (error) {
    console.error('Error updating blog:', error.message);
  }
};

updateBlog(blogId, {
  title: 'Updated Blog',
  body: 'This blog has been updated.',
});
