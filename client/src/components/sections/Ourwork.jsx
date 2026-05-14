import { useEffect, useState } from "react";

import GalleryCard from "../cards/GalleryCard";

import { getGallery } from "@/api/public/galleryApi";

const OurWork = () => {
  const [gallery, setGallery] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await getGallery();

        setGallery(data);
      } catch (error) {
        setError(
          error.response?.data?.message ||
            "Failed to fetch gallery"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading) {
    return (
      <section className="bg-background py-20 text-foreground text-center">
        Loading...
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-background py-20 text-destructive text-center">
        {error}
      </section>
    );
  }

  return (
    <section className="bg-background py-20 border-t border-border transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="
            text-center
            text-[#d4a24c]
            uppercase
            tracking-[4px]
            text-sm
            mb-14
          "
        >
          Our Work
        </h2>

        <div
          className="
            grid grid-cols-2
            md:grid-cols-3
            lg:grid-cols-6
            gap-4
          "
        >
          {gallery.map((item) => (
            <GalleryCard
              key={item._id}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            className="
              border border-[#d4a24c]
              text-[#d4a24c]
              bg-transparent
              px-8 py-3
              rounded-xl
              font-medium
              transition-all duration-300
              hover:bg-[#d4a24c]
              hover:text-black
              hover:shadow-lg
              cursor-pointer
            "
          >
            View Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurWork;