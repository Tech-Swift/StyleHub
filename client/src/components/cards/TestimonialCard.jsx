import { Star } from "lucide-react";

const TestimonialCard = ({
  name,
  role,
  review,
  rating,
}) => {
  const initial =
    name.charAt(0).toUpperCase();

  return (
    <div
      className="
        bg-card
        border border-border
        rounded-2xl
        p-6
        transition-all duration-300
        hover:border-[#d4a24c]/50
        hover:shadow-lg
      "
    >
      <div className="flex items-center gap-4 mb-5">
        <div
          className="
            w-14 h-14
            rounded-full
            bg-[#d4a24c]
            text-black
            flex items-center justify-center
            text-xl font-bold
          "
        >
          {initial}
        </div>

        <div>
          <h3 className="text-foreground font-semibold">
            {name}
          </h3>

          <p className="text-muted-foreground text-sm">
            {role}
          </p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map(
          (_, index) => (
            <Star
              key={index}
              className="
                w-4 h-4
                fill-[#d4a24c]
                text-[#d4a24c]
              "
            />
          )
        )}
      </div>

      <p
        className="
          text-muted-foreground
          leading-relaxed
          text-sm
        "
      >
        "{review}"
      </p>
    </div>
  );
};

export default TestimonialCard;