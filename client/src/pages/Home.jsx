import Hero from "@/components/sections/Hero";
import ServiceSection from "@/components/sections/ServiceSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import OurWork from "@/components/sections/Ourwork";
import Testimonials from "@/components/sections/TestimonialSection";
import CTA from "@/components/sections/CTA";
import ContactSection from "@/components/sections/ContactSection";

export default function Home({ onRequireAuth }) {
  return (
    <>
      <Hero  onRequireAuth={onRequireAuth}/>
      <ServiceSection />
      <WhyChooseUs />
      <OurWork />
      <Testimonials />
      <CTA />
      <ContactSection />
    </>
  );
}