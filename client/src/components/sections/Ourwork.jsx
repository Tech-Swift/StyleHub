import { useEffect, useState } from "react";

import GalleryCard from "../cards/GalleryCard";

import { getGallery } from "../../api/galleryApi";

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
      <section className="bg-black py-20 text-white text-center">
        Loading...
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-black py-20 text-red-500 text-center">
        {error}
      </section>
    );
  }

  return (
    <section className="bg-black py-20 border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-[#d4a24c] uppercase tracking-[4px] text-sm mb-14">
          Our Work
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {gallery.map((item) => (
            <GalleryCard
              key={item._id}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="border border-[#d4a24c] text-[#d4a24c] px-8 py-3 rounded-md hover:bg-[#d4a24c] hover:text-black transition cursor-pointer">
            View Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurWork;