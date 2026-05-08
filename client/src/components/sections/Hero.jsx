import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Lady1 from "@/assets/images/Lady1.jpeg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-10">
      
      <Container>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center -translate-y-10">

          {/* Left Content */}
          <div className="space-y-6">

            <p className="text-sm uppercase tracking-widest text-gray-500">
              Executive Grooming Studio
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Modern Style Meets Classic Confidence
            </h1>

            <p className="text-gray-600 text-lg">
              Experience world-class grooming and redefine your personal style
              with our professional services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">

              <Button className="px-6 py-6 text-base">
                Book Appointment
              </Button>

              <Button variant="outline" className="px-6 py-6 text-base">
                Explore Services
              </Button>

            </div>

          </div>

          {/* Right Image */}
          <div>
            <img
              src={Lady1}
              alt="Hero"
              className="w-full max-w-lg h-[500px] object-cover rounded-2xl mx-auto"
            />
          </div>

        </div>

      </Container>

    </section>
  );
}