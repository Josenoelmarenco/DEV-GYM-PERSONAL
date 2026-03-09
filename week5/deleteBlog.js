const deleteBlog = async (blogId) => {
  try {
    const response = await fetch(`${apiUrl}/${blogId}`, {
      method: 'DELETE', // HTTP method for deletion
    });

    if (!response.ok) {
      throw new Error('Failed to delete the blog');
    }

    console.log('Blog deleted successfully');
  } catch (error) {
    console.error('Error deleting blog:', error.message);
  }
};

deleteBlog(blogId);
