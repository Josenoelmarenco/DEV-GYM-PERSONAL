const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const blogId = 1;

const updatedBlog = {
  id: blogId,
  title: 'Updated Blog Title',
  body: 'Updated blog content',
  userId: 1,
};

const updateBlog = async (id) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedBlog),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  console.log('Updated Blog:', data);
};

updateBlog(blogId);
