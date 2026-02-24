import "./Layout.css";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <main className="page-content">
            <nav className="navbar">
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
            </ul>
            </nav>
  
        <Outlet />
      </main>
    );
};
  
export default Layout;