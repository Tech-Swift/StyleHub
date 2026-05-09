import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import api from "@/api/client";
import ServiceCard from "@/components/cards/ServiceCard";

export default function ServiceSection() {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesRes, categoriesRes] = await Promise.all([
          api.get("/services"),
          api.get("/categories"),
        ]);

        setServices(servicesRes.data);
        setCategories(categoriesRes.data);

      console.log("SAMPLE SERVICE:", servicesRes.data[0]);
      console.log("SERVICES FROM API:", servicesRes.data);
      console.log("CATEGORIES FROM API:", categoriesRes.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // FILTER LOGIC
  const filteredServices = services.filter((service) => {
    const matchesCategory =
      !selectedCategory ||
      service.categoryId?._id === selectedCategory;

    const matchesSearch =
      service.title
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      service.description
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative w-full py-6 bg-white dark:bg-[#050505] overflow-hidden transition-colors duration-300">

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      <Container fluid>
        <div className="px-4 sm:px-6 lg:px-8 relative z-10">

          {/* HEADER */}
          <div className="mb-12">

            <p className="text-sm uppercase tracking-[0.3em] text-[#D4A24C] text-center">
              Premium Beauty Collection
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-center text-foreground leading-tight">
              Discover Premium 
              <br />

              <span className="text-[#D4A24C]">
                Services
              </span>
            </h2>

            <p className="mt-5 text-center text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Explore curated beauty and grooming experiences crafted
              by elite professionals for modern luxury and confidence.
            </p>

            {/* SEARCH */}
            <div className="mt-8 flex justify-center">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:max-w-md px-4 sm:px-5 py-3 text-sm rounded-full border border-border bg-background text-foreground outline-none focus:ring-2 focus:ring-[#D4A24C]"
              />
            </div>

            {/* CATEGORY FILTERS */}
            <div className="flex justify-start sm:justify-center gap-3 mt-6 flex-nowrap sm:flex-wrap overflow-x-auto scrollbar-hide pb-2">

              {/* ALL */}
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-5 py-2 text-xs rounded-full transition-all duration-300 ${
                  selectedCategory === null
                    ? "bg-[#D4A24C] text-black"
                    : "border border-border text-foreground hover:border-[#D4A24C]"
                }`}
              >
                All
              </button>

              {/* DYNAMIC CATEGORIES */}
              {categories.map((cat) => (
                <button
                  key={cat._id}
                  onClick={() => setSelectedCategory(cat._id)}
                  className={`px-5 py-2 text-xs rounded-full transition-all duration-300 ${
                    selectedCategory === cat._id
                      ? "bg-[#D4A24C] text-black"
                      : "border border-border text-foreground hover:border-[#D4A24C]"
                  }`}
                >
                  {cat.name}
                </button>
              ))}

            </div>

          </div>

          {/* CONTENT */}
          <div>

            {/* LOADING */}
            {loading && (
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6">

                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="h-[360px] rounded-2xl bg-gray-200 dark:bg-gray-800 animate-pulse"
                    />
                  ))}

                </div>
              )}

            {/* EMPTY */}
            {!loading && filteredServices.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                No services found matching your filters.
              </div>
            )}

            {/* GRID */}
            {!loading && filteredServices.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-5">
                {filteredServices.map((service) => (
                  <ServiceCard
                    key={service._id}
                    service={service}
                  />
                ))}

              </div>
            )}

          </div>

        </div>
      </Container>

    </section>
  );
}