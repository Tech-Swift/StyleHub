 import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Container from "./Container";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "GALLERY", path: "/gallery" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  const linkClass = (path) =>
    `transition duration-300 text-sm tracking-[0.2em] ${
      location.pathname === path
        ? "text-[#D4A24C]"
        : "text-white/80 hover:text-[#D4A24C]"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 border-b border-white/10 bg-black">

        <div className="h-24 flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <h1 className="text-4xl font-bold text-[#D4A24C]">
              StyleHub
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={linkClass(link.path)}
              >
                {link.name}
              </Link>
            ))}

          </nav>

          {/* CTA */}
          <div className="hidden lg:block">

            <button className="border border-[#D4A24C] text-[#D4A24C] px-8 py-3 rounded-md hover:bg-[#D4A24C] hover:text-black transition duration-300">

              BOOK NOW

            </button>

          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-black border-t border-white/10">

          

            <div className="flex flex-col gap-8 py-8">

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={linkClass(link.path)}
                >
                  {link.name}
                </Link>
              ))}

              <button className="border border-[#D4A24C] text-[#D4A24C] py-3 rounded-md">

                BOOK NOW

              </button>

            </div>

        </div>
      )}
    </header>
  );
}