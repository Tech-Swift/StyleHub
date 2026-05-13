import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/20 bg-background overflow-hidden">

      {/* Luxury Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,161,74,0.10),transparent_65%)] pointer-events-none" />
    <Container fluid>
      <div className="py-14">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">

              {/* Logo */}
              <div className="w-12 h-12 rounded-full border border-[#c9a14a]/60 bg-[#c9a14a]/5 flex items-center justify-center">
                <span className="text-[#c9a14a] text-xl font-bold">
                  S
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  StyleHub
                </h2>

                <p className="text-xs tracking-[4px] uppercase text-[#c9a14a]">
                  Beauty Salon
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Premium salon and beauty experiences crafted to elevate confidence,
              elegance, and modern style.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4 pt-7">

              {[
                FaInstagram,
                FaFacebookF,
                FaTiktok,
                FaWhatsapp,
              ].map((Icon, i) => (
                <button
                  key={i}
                  className="
                    w-11 h-11 rounded-full
                    border border-border/40
                    bg-background/40
                    flex items-center justify-center
                    text-foreground
                    hover:bg-[#c9a14a]
                    hover:text-black
                    hover:border-[#c9a14a]
                    transition-all duration-300
                    cursor-pointer
                  "
                >
                  <Icon className="text-sm" />
                </button>
              ))}

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {[
                "Home",
                "Services",
                "Gallery",
                "About Us",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="
                      text-muted-foreground
                      hover:text-[#c9a14a]
                      transition-colors duration-300
                      text-sm
                    "
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Services
            </h3>

            <ul className="space-y-4">
              {[
                "Hair Styling",
                "Braiding",
                "Nail Care",
                "Makeup",
                "Facials",
              ].map((service) => (
                <li
                  key={service}
                  className="
                    text-sm text-muted-foreground
                    hover:text-[#c9a14a]
                    transition-colors duration-300
                    cursor-pointer
                  "
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#c9a14a] text-lg mt-1" />

                <p className="text-sm text-muted-foreground leading-relaxed">
                  123 Beauty Street,
                  <br />
                  Nairobi, Kenya
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-[#c9a14a] text-lg mt-1" />

                <p className="text-sm text-muted-foreground">
                  +254 700 000 000
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-[#c9a14a] text-lg mt-1" />

                <p className="text-sm text-muted-foreground">
                  hello@stylehub.com
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaClock className="text-[#c9a14a] text-lg mt-1" />

                <p className="text-sm text-muted-foreground">
                  Mon - Sun : 9:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/20 mt-14 pt-6 flex flex-col md:flex-row items-center justify-center gap-4">

          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} StyleHub. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-6 w-full md:w-auto">
            <a
              href="#"
              className="
                text-sm text-muted-foreground
                hover:text-[#c9a14a]
                transition-colors duration-300
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                text-sm text-muted-foreground
                hover:text-[#c9a14a]
                transition-colors duration-300
              "
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </Container>
    </footer>
  );
}