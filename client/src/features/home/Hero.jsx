import { Button } from "@/components/ui/button";
import herobg from "../../assets/images/herobg.jpeg";

export default function Hero() {
  return (
    <section
      className="relative h-[85vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Container class added here */}
      <div className="container relative mx-auto px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Define Your Style with StyleHub
          </h1>

          <p className="text-gray-200 text-lg mb-8">
            Discover top salons, trending hairstyles, and book your next look effortlessly.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black hover:scale-105 cursor-pointer"
            >
              Explore Styles
            </Button>

            <Button 
              variant="outline" 
              size="lg" 
              className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black hover:scale-105 cursor-pointer"
            >
              Book Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
