// app.js
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const blogIdToUpdate = 1; // Replace with the desired blog ID for testing
const updatedData = {
  title: 'Updated Blog',
  body: 'This blog has been updated.',
};

const updateBlog = async (blogId, updatedData) => {
  const response = await fetch(`${apiUrl}/${blogId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });

  const updatedBlog = await response.json();
  console.log('Blog updated:', updatedBlog);
};

// Example Usage
updateBlog(blogIdToUpdate, updatedData);
