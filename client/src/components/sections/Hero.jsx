import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Lady1 from "@/assets/images/Lady1.jpeg";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#050505] pt-32 pb-20">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      <Container>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8 relative z-10 max-w-2xl">

            {/* Small Text */}
            <p className="text-sm uppercase tracking-[0.3em] text-[#D4A24C]">
              Executive Grooming Studio
            </p>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[0.95] text-white">

              Modern Style <br />

              <span className="text-[#D4A24C]">
                Meets Classic
              </span>

              <br />
              Confidence

            </h1>

            {/* Paragraph */}
            <p className="text-gray-400 text-lg xl:text-xl font-light leading-relaxed max-w-xl">
              Experience luxury grooming and premium beauty services
              crafted to elevate your confidence and personal style.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">

              <Button className="bg-[#D4A24C] hover:bg-[#c89235] text-black font-semibold px-8 py-7 text-base rounded-md transition duration-300">
                Book Appointment
              </Button>

              <Button
                variant="outline"
                className="border border-[#D4A24C] bg-transparent text-[#D4A24C] hover:bg-[#D4A24C] hover:text-black px-8 py-7 text-base rounded-md transition duration-300"
              >
                Explore Services
              </Button>

            </div>
            {/* Stats */}
            <div className="flex flex-wrap gap-10 pt-6">

              <div>
                <h3 className="text-3xl font-bold text-[#D4A24C]">
                  5+
                </h3>

                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#D4A24C]">
                  1000+
                </h3>

                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  Happy Clients
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#D4A24C]">
                  20+
                </h3>

                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  Premium Services
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">

            {/* Gold Glow */}
            <div className="absolute w-[350px] h-[350px] bg-[#D4A24C]/20 blur-[100px] rounded-full" />

            {/* Image Card */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-2xl">

              <img
                src={Lady1}
                alt="Luxury Salon"
                className="w-full max-w-md lg:max-w-lg h-[650px] object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}