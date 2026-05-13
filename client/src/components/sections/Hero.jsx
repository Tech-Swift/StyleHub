import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Lady1 from "@/assets/images/Lady1.jpeg";
import BookButton from "@/components/ui/BookButton";

export default function Hero({ onRequireAuth }) {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-background pt-32 pb-4">

      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      <Container fluid>
        <div className="px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <div className="space-y-8 relative z-10 max-w-2xl">

              <p className="text-sm uppercase tracking-[0.3em] text-[#D4A24C]">
                Executive Grooming Studio
              </p>

              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[0.95] text-foreground">
                Modern Style <br />
                <span className="text-[#D4A24C]">Meets Classic</span>
                <br />
                Confidence
              </h1>

              <p className="text-muted-foreground text-lg xl:text-xl font-light leading-relaxed max-w-xl">
                Experience luxury grooming and premium beauty services
                crafted to elevate your confidence and personal style.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-5">

                <BookButton onRequireAuth={onRequireAuth}>
                  Book Appointment
                </BookButton>

                <Button variant="brandOutline" size="lg">
                  Explore Services
                </Button>

              </div>

              {/* STATS */}
              <div className="flex flex-wrap gap-10 pt-6">

                <div>
                  <h3 className="text-3xl font-bold text-[#D4A24C]">5+</h3>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">
                    Years Experience
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-[#D4A24C]">1000+</h3>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">
                    Happy Clients
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-[#D4A24C]">20+</h3>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">
                    Premium Services
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">
              <div className="absolute w-[350px] h-[350px] bg-[#D4A24C]/20 blur-[100px] rounded-full" />

              <div className="relative overflow-hidden rounded-[32px] border border-border shadow-2xl">
                <img
                  src={Lady1}
                  alt="Luxury Salon"
                  className="w-full max-w-md lg:max-w-lg h-[650px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}