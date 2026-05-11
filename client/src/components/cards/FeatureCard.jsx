import * as Icons from "lucide-react";

const FeatureCard = ({
  iconName,
  title,
  description,
}) => {
  const Icon = Icons[iconName];

  return (
    <div
      className="
        flex flex-col items-center text-center
        px-6 py-8
        border-r border-border
        last:border-r-0
        transition-all duration-300
        hover:bg-accent/40
      "
    >
      <div className="mb-5">
        {Icon && (
          <Icon
            className="
              w-10 h-10
              text-[#d4a24c]
              transition-transform duration-300
              hover:scale-110
            "
          />
        )}
      </div>

      <h3
        className="
          text-foreground text-lg
          font-semibold mb-3
        "
      >
        {title}
      </h3>

      <p
        className="
          text-muted-foreground
          text-sm leading-relaxed
        "
      >
        {description}
      </p>

      <div className="w-12 h-[2px] bg-[#d4a24c] mt-5 rounded-full opacity-80" />
    </div>
  );
};

export default FeatureCard;