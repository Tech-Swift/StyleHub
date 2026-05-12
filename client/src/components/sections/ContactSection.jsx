import ContactForm from "../forms/contactForm.jsx";
import ContactInfo from "../cards/infoCard";

export default function ContactSection() {
  return (
    <section className="relative bg-background text-foreground overflow-hidden py-24 px-6 md:px-10 lg:px-20 transition-colors duration-300">
      
      {/* Radial accent background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(201,161,74,0.15),transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ContactInfo />
          <ContactForm />
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="overflow-hidden rounded-3xl border border-border/40 h-[450px] shadow-2xl bg-muted/20">
            <iframe
              title="Salon Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.292807070463!2d36.817223!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d7d3f1b1f7%3A0x7e5f0df4cb5d8f6f!2sNairobi!5e0!3m2!1sen!2ske!4v1710000000000!5m2!1sen!2ske"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}