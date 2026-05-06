import { Button } from "@/components/ui/button";
import herobg from "../../assets/images/herobg.jpeg";
function Hero() {
  return (
    <section
      className="relative h-[85vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${herobg})`}}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative text-center text-white max-w-2xl px-6">

        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Define Your Style with StyleHub
        </h1>

        <p className="text-gray-200 text-lg mb-8">
          Discover top salons, trending hairstyles, and book your next look effortlessly.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          
          {/* Explore Button */}
          <Button varian="outline" size="lg" className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black hover:scale-105 cursor-pointer">
            Explore Styles
          </Button>

          <Button varian="outline" size="lg" className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black hover:scale-105 cursor-pointer">
            Book Session
          </Button>

        </div>

      </div>
    </section>
  );
}

export default Hero;