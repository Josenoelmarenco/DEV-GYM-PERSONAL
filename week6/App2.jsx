import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import SignupComponent from "./pages/SignupComponent";
import LoginComponent  from "./pages/LoginComponent";
import Home   from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );

  return (
    <BrowserRouter>
      {/* Navbar is outside <Routes> so it always renders */}
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />

      <div className="pages">
        <Routes>

          {/* ── Protected route (/): only for logged-in users ───────── */}
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/signup" />}
          />
          {/*
            If authenticated  → render <Home />
            If NOT authenticated → redirect to /signup immediately
          */}

          {/* ── Guest-only route (/login): only for logged-out users ── */}
          <Route
            path="/login"
            element={
              !isAuthenticated
                ? <LoginComponent setIsAuthenticated={setIsAuthenticated} />
                : <Navigate to="/" />
            }
          />
          {/*
            If NOT authenticated → render the login form
            If authenticated     → redirect to / (already logged in)
          */}

          {/* ── Guest-only route (/signup) ────────────────────────────*/}
          <Route
            path="/signup"
            element={
              !isAuthenticated
                ? <SignupComponent setIsAuthenticated={setIsAuthenticated} />
                : <Navigate to="/" />
            }
          />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;