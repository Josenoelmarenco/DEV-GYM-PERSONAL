import { Link } from "react-router-dom";

function Navbar({ isAuthenticated, setIsAuthenticated }) {

  const handleClick = () => {
    // Logout: two steps mirror what login/signup did in reverse
    localStorage.removeItem("user"); // 1. clear the token from storage
    setIsAuthenticated(false);        // 2. update React state → triggers re-render
  };

  return (
    <nav>
      {/* Branch 1: user IS logged in */}
      {isAuthenticated && (
        <div>
          <span>Welcome</span>
          <button onClick={handleClick}>Log out</button>
        </div>
      )}

      {/* Branch 2: user is NOT logged in */}
      {!isAuthenticated && (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;