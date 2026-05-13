import { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import { Menu, X } from "lucide-react";

import { ThemeToggle } from "../ui/ThemeToggle";

import Container from "./Container";

import BookButton from "@/components/ui/BookButton";

import AuthModal from "@/components/cards/authModal";

export default function Navbar() {
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const [showAuth, setShowAuth] = useState(false);

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
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <Container fluid>
          <div className="h-24 flex items-center justify-between">

            {/* LOGO */}
            <Link to="/">
              <h1 className="text-3xl font-bold text-primary">
                StyleHub
              </h1>
            </Link>

            {/* NAV LINKS */}
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

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">

              <ThemeToggle />

              {/* Desktop Book Button */}
              <BookButton
                onRequireAuth={() => setShowAuth(true)}
              >
                BOOK NOW
              </BookButton>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden text-foreground cursor-pointer"
              >
                {open ? <X size={28} /> : <Menu size={28} />}
              </button>

            </div>
          </div>
        </Container>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden fixed top-24 left-0 w-full border-t border-border bg-background z-40">
          <Container fluid>
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

              {/* Mobile Book Button */}
              <BookButton
                onRequireAuth={() => setShowAuth(true)}
              >
                BOOK NOW
              </BookButton>

            </div>
          </Container>
        </div>
      )}

      {/* AUTH MODAL */}
      <AuthModal
        open={showAuth}
        onClose={() => setShowAuth(false)}
      />
    </>
  );
}