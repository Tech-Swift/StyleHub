import { Link, useLocation } from "react-router-dom";

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
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">StyleHub</h1>

        {/* Links */}
        <div className="flex gap-6">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/salons" className={linkClass("/salons")}>Salons</Link>
          <Link to="/styles" className={linkClass("/styles")}>Styles</Link>
        </div>

        {/* Action */}
        <Link
          to="/login"
          className="border border-black px-4 py-1 rounded hover:bg-black hover:text-white transition"
        >
          Login
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;