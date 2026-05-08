import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
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
    `relative transition duration-300 text-sm tracking-[0.2em] cursor-pointer
     text-foreground hover:text-[#D4A24C]
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-[2px] after:w-0 after:bg-[#D4A24C]
     after:transition-all after:duration-300
     hover:after:w-full
     ${location.pathname === path ? "text-[#D4A24C] after:w-full" : ""}`;

return (
  <header className="fixed top-0 left-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="h-24 grid grid-cols-3 items-center">

        {/* LEFT - LOGO */}
        <div className="flex justify-start">
          <Link to="/">
            <h1 className="text-3xl font-bold text-primary">
              StyleHub
            </h1>
          </Link>
        </div>

        {/* CENTER - NAV LINKS */}
        <nav className="hidden lg:flex justify-center items-center gap-12">
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

        {/* RIGHT - CTA + ICON */}
        <div className="flex justify-end items-center gap-4">

          <ThemeToggle />

          <button className="border border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-primary-foreground transition cursor-pointer">
            BOOK NOW
          </button>

          {/* Mobile toggle only visible on small screens */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-foreground cursor-pointer"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>
    </div>

    {/* MOBILE MENU */}
    {open && (
      <div className="lg:hidden border-t border-border bg-background">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col gap-6 py-8">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={linkClass(link.path)}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <button className="border border-primary text-primary py-3 rounded-md hover:bg-primary hover:text-primary-foreground transition cursor-pointer">
              BOOK NOW
            </button>

          </div>

        </div>

      </div>
    )}

  </header>
);
}