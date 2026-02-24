import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* index route = "/" */}
          <Route index element={<Home />} />

          {/* children routes */}
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="tours" element={<Tours />} />

          {/* catch-all dentro del Layout */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;