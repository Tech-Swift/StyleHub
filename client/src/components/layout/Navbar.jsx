import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Container from "./Container";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const linkClass = (path) =>
    `relative pb-1 transition ${
      location.pathname === path
        ? "text-black after:w-full"
        : "text-gray-600 after:w-0"
    } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <nav className="shadow-lg border-b border-gray-200 bg-white">
      
      <Container className="py-4">

        {/* Navbar Top */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-xl md:text-2xl font-bold">
            StyleHub
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            <Link to="/" className={linkClass("/")}>
              HOME
            </Link>

            <Link to="/services" className={linkClass("/services")}>
              SERVICES
            </Link>

            <Link to="/gallery" className={linkClass("/gallery")}>
              GALLERY
            </Link>

            <Link to="/about" className={linkClass("/about")}>
              ABOUT
            </Link>

            <Link to="/contact" className={linkClass("/contact")}>
              CONTACT
            </Link>
          </div>

          {/* Desktop Button */}
          <Link
            to="/login"
            className="hidden md:block border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition"
          >
            BOOK
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="flex flex-col gap-6 pt-6 md:hidden">

            <Link to="/" className={linkClass("/")}>
              HOME
            </Link>

            <Link to="/services" className={linkClass("/services")}>
              SERVICES
            </Link>

            <Link to="/gallery" className={linkClass("/gallery")}>
              GALLERY
            </Link>

            <Link to="/about" className={linkClass("/about")}>
              ABOUT
            </Link>

            <Link to="/contact" className={linkClass("/contact")}>
              CONTACT
            </Link>

            <Link
              to="/login"
              className="border border-black px-4 py-2 rounded text-center hover:bg-black hover:text-white transition"
            >
              BOOK
            </Link>

          </div>
        )}

      </Container>

    </nav>
  );
}