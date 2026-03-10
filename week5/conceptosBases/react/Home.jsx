//1) Home.jsx — mostrar todos los blogs
import { useEffect, useState } from 'react';

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>All Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog._id || blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;