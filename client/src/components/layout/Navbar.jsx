import { Link, useLocation } from "react-router-dom";
import Container from "./Container";

function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    `relative pb-1 ${
      location.pathname === path
        ? "text-black after:w-full"
        : "text-gray-600 after:w-0"
    } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <nav className="bg-red shadow-lg border-b border-gray-200">
      <Container className="flex justify-between items-center py-4">       
        {/* Logo */}
        <h1 className="text-xl font-bold">StyleHub</h1>

        {/* Links */}
        <div className="flex gap-8">
          <Link to="/" className={linkClass("/")}>HOME</Link>
          <Link to="/services" className={linkClass("/services")}>SERVICES</Link>
          <Link to="/gallery" className={linkClass("/gallery")}>GALLERY</Link>
          <Link to="/about" className={linkClass("/about")}>ABOUT</Link>
          <Link to="/contact" className={linkClass("/contact")}>CONTACT</Link>
        </div>

        {/* Action */}
        <Link
          to="/login"
          className="border border-black px-4 py-1 rounded hover:bg-black hover:text-white transition"
        >
          BOOK
        </Link>
      </Container> 

    </nav>
  );
}

export default Navbar;