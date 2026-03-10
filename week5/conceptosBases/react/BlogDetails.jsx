//3) BlogDetails.jsx — traer uno y borrarlo
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function BlogDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
        const response = await fetch(`/api/blogs/${id}`);
        const data = await response.json();
        setBlog(data);
        };

        fetchBlog();
    }, [id]);

    const handleDelete = async () => {
        await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
        });

        navigate('/');
    };

    return (
        <div>
        {blog && (
            <>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
        <button onClick={handleDelete}>Delete</button>
            </>
        )}
        </div>
    );
}

export default BlogDetails;