import { useState } from "react";

function Registration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const { name, email, phone, password, confirmPassword } = form;

    if (!name || !email || !phone || !password || !confirmPassword) {
      return setError("All fields are required");
    }
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    alert("Registration submitted!");
  };

  return (
    <div className="temp">
      <h1>Registration</h1>
      {error && <p style={{ fontWeight: "bold" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="name" value={form.name} onChange={handleChange} />
        <input name="email" placeholder="email" value={form.email} onChange={handleChange} />
        <input name="phone" placeholder="phone" value={form.phone} onChange={handleChange} />

        <input type="password" name="password" placeholder="password" value={form.password} onChange={handleChange} />
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <button type="submit" className="btn">submit</button>
      </form>
    </div>
  );
}

export default Registration;