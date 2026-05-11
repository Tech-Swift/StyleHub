import { useEffect, useState } from "react";

import api from "@/api/client";

import FeatureCard from "../cards/FeatureCard";

const WhyChooseUs = () => {
  const [features, setFeatures] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await api.get("/features");

        setFeatures(response.data);
      } catch (error) {
        setError(
          error.response?.data?.message ||
            "Failed to fetch features"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
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
        <h2 className="text-center text-primary uppercase tracking-[4px] text-sm mb-14">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature._id}
              iconName={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;