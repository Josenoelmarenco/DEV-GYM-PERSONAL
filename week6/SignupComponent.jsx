import { useState } from "react";
import { useNavigate } from "react-router-dom";

// setIsAuthenticated is passed down from App.jsx (see §6 Prop Drilling)
const SignupComponent = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // programmatic navigation after signup

  const handleSignup = async () => {
    try {
      const response = await fetch("/api/user/signup", {  // relative URL — Vite proxies to :4000
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
        const user = await response.json();
        // user = { email: "...", token: "eyJhbGci..." }

        // Step 1 — Persist the token so it survives a page refresh
        localStorage.setItem("user", JSON.stringify(user));

        // Step 2 — Tell App.jsx that we are now authenticated
        //          This triggers a re-render: the router redirects, the navbar updates
        setIsAuthenticated(true);

        // Step 3 — Navigate to the home page
        navigate("/");
        } else {
            console.error("Signup failed");
        }
        } catch (error) {
        console.error("Error during signup:", error);
        }
    };

    return (
        <div className="form-container">
        <h2>Sign Up</h2>
        <label>
            Email:
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            />
        </label>
        <label>
            Password:
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            />
        </label>
        <button className="signup-button" onClick={handleSignup}>Sign Up</button>
        </div>
    );
};

export default SignupComponent;