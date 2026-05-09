import { useEffect, useState } from "react";
import api from "@/api/client";
import ServiceCard from "@/components/cards/ServiceCard";

export default function ServiceSection() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await api.get("/services");
        setServices(res.data);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-[#050505] transition-colors duration-300">
      
      {/* HEADER (Marketplace style) */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
          Discover Premium Services
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mt-3">
          Explore curated beauty and grooming experiences crafted by top professionals.
        </p>

        {/* optional filter row (future upgrade ready) */}
        <div className="flex justify-center gap-3 mt-5 flex-wrap">
          <span className="px-4 py-2 text-xs rounded-full bg-black text-white dark:bg-white dark:text-black">
            All
          </span>
          <span className="px-4 py-2 text-xs rounded-full border border-gray-300 dark:border-gray-700">
            Hair
          </span>
          <span className="px-4 py-2 text-xs rounded-full border border-gray-300 dark:border-gray-700">
            Nails
          </span>
          <span className="px-4 py-2 text-xs rounded-full border border-gray-300 dark:border-gray-700">
            Spa
          </span>
        </div>
      </div>

      {/* CONTENT GRID (Airbnb-style flexible layout) */}
      <div className="max-w-6xl mx-auto px-4">
        
        {loading && (
          <div className="flex flex-wrap justify-center gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-[260px] sm:w-[280px] h-[380px] bg-gray-200 dark:bg-gray-800 animate-pulse rounded-2xl"
              />
            ))}
          </div>
        )}

        {!loading && services.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400">
            No services available at the moment.
          </div>
        )}

        {!loading && services.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}