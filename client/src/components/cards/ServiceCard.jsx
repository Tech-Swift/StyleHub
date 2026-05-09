import { Button } from "@/components/ui/button";

export default function ServiceCard({ service }) {
  const imageUrl = `http://localhost:5000${service.image}`;

  return (
    <div className="group w-full min-w-0 bg-white dark:bg-[#0b0b0b] rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800">

      {/* IMAGE */}
      <div className="relative aspect-[4/4.8] sm:aspect-[4/5] overflow-hidden">
        <img
          src={imageUrl}
          alt={service.title}
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Category (FIXED) */}
        <span className="absolute top-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur">
          {service.categoryId?.name}
        </span>

        {/* Price */}
        <span className="absolute top-2 right-2 bg-white/90 dark:bg-black/70 text-black dark:text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">
          ${service.price}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-2.5 sm:p-3 space-y-1">

        <h3 className="text-[13px] sm:text-sm font-semibold text-gray-900 dark:text-white line-clamp-1">
          {service.title}
        </h3>

        <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2">
          {service.description}
        </p>

        {/* FOOTER */}
        <div className="flex items-center justify-between pt-2">

          <span
            className={`text-[10px] px-2 py-0.5 rounded-full ${
              service.available
                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
            }`}
          >
            {service.available ? "Available" : "Unavailable"}
          </span>

          <Button
            variant="brand"
            size="sm"
            className="text-[11px] px-3 py-1"
          >
            Book
          </Button>

        </div>
      </div>
    </div>
  );
}