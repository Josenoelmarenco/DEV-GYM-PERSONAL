//login
const apiUrl = 'http://localhost:4000/api/user/login';

const user = {
  email: 'matti@example.com',
  password: 'R3g5T7#gh',
};

const login = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    const json = await response.json();
    console.log('Login successful:', json);
    // json looks like: { email: "matti@example.com", token: "eyJhbGci..." }
  } catch (error) {
    console.error('Error:', error.message);
  }
};

login();
