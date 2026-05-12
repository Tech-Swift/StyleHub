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

export default function ContactInfo() {
  return (
    <div className="space-y-8 text-foreground transition-colors duration-300">

      {/* Header */}
      <div>
        <p className="text-[#c9a14a] uppercase tracking-[4px] text-sm mb-3">
          Contact Us
        </p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Let’s Talk Beauty
        </h2>

        <p className="text-muted-foreground mt-4 max-w-md leading-relaxed">
          Ready for your next transformation? Reach out to us and book your
          premium salon experience today.
        </p>
      </div>

      {/* Info List */}
      <div className="space-y-6">

        <div className="flex items-start gap-4">
          <FaMapMarkerAlt className="text-[#c9a14a] text-xl mt-1" />

          <div>
            <h4 className="font-semibold mb-1">Location</h4>
            <p className="text-muted-foreground">
              123 Beauty Street,<br />
              Nairobi, Kenya
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaPhoneAlt className="text-[#c9a14a] text-xl mt-1" />

          <div>
            <h4 className="font-semibold mb-1">Phone</h4>
            <p className="text-muted-foreground">+254 700 000 000</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaEnvelope className="text-[#c9a14a] text-xl mt-1" />

          <div>
            <h4 className="font-semibold mb-1">Email</h4>
            <p className="text-muted-foreground">hello@glamoursalon.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaClock className="text-[#c9a14a] text-xl mt-1" />

          <div>
            <h4 className="font-semibold mb-1">Working Hours</h4>
            <p className="text-muted-foreground">
              Mon - Sun : 9:00 AM - 8:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-4 pt-4">

        {[
          FaInstagram,
          FaFacebookF,
          FaTiktok,
          FaWhatsapp,
        ].map((Icon, i) => (
          <button
            key={i}
            className="w-11 h-11 rounded-full border border-border/40 flex items-center justify-center
                       text-foreground hover:bg-[#c9a14a] hover:text-black
                       transition-all duration-300"
          >
            <Icon />
          </button>
        ))}

      </div>
    </div>
  );
}