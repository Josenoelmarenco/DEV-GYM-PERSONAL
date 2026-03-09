const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [author, setAuthor] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();

  const blog = { title, body, author };

  const response = await fetch('/api/blogs', {
    method: 'POST',
    body: JSON.stringify(blog),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    console.log('Error');
    return;
  }

  const json = await response.json();
  console.log('new blog added:', json);
};
