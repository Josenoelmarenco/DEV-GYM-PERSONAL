//muestra cómo OBTENER (leer) todos los blogs con un clic de botón (sin usar useEffect())

import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const fetchData = async () => {
    const res = await fetch("/api/blogs");
    const data = await res.json();
    setBlogs(data);
    console.log(data);
  };

  return (
    <div className="home">
      <button onClick={fetchData}>Cargar Blogs</button>

      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
