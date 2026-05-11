import * as Icons from "lucide-react";

const FeatureCard = ({
  iconName,
  title,
  description,
}) => {
  const Icon = Icons[iconName];

  return (
    <div className="flex flex-col items-center text-center px-6 py-8 border-r border-[#262626] last:border-r-0">
      <div className="mb-5">
        {Icon && (
          <Icon className="w-10 h-10 text-[#d4a24c]" />
        )}
      </div>

      <h3 className="text-white text-lg font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;