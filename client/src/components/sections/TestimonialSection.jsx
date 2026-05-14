import { useEffect, useState } from "react";

import TestimonialCard from "../cards/TestimonialCard";

import { getTestimonials } from "@/api/public/testimonialApi";

const Testimonials = () => {
  const [testimonials, setTestimonials] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTestimonials =
      async () => {
        try {
          const data =
            await getTestimonials();

          setTestimonials(data);
        } catch (error) {
          setError(
            error.response?.data
              ?.message ||
              "Failed to fetch testimonials"
          );
        } finally {
          setLoading(false);
        }
      };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="bg-background py-20 text-center text-foreground">
        Loading...
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-background py-20 text-center text-destructive">
        {error}
      </section>
    );
  }

  return (
    <section className="bg-background py-20 border-t border-border">
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
          Testimonials
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(
            (testimonial) => (
              <TestimonialCard
                key={testimonial._id}
                name={testimonial.name}
                role={testimonial.role}
                review={testimonial.review}
                rating={testimonial.rating}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;