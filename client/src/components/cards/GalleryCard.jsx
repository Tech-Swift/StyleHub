const GalleryCard = ({ image, title }) => {
  return (
    <div
      className="
        group relative overflow-hidden
        rounded-2xl cursor-pointer
        border border-border
        bg-card
        transition-all duration-300
        hover:shadow-lg
        hover:border-[#d4a24c]/50
      "
    >
      <img
        src={image}
        alt={title}
        className="
          w-full h-[220px]
          object-cover
          transition-transform duration-500
          group-hover:scale-110
        "
      />

      {/* Dark/Light Overlay */}
      <div
        className="
          absolute inset-0
          bg-black/10 dark:bg-black/30
          group-hover:bg-black/20 dark:group-hover:bg-black/40
          transition-colors duration-300
        "
      />

      {/* Gold Accent */}
      <div
        className="
          absolute bottom-0 left-0
          h-1 w-0
          bg-[#d4a24c]
          transition-all duration-300
          group-hover:w-full
        "
      />

      {/* Optional Title */}
      <div
        className="
          absolute bottom-4 left-4
          text-white font-medium
          opacity-0 translate-y-2
          transition-all duration-300
          group-hover:opacity-100
          group-hover:translate-y-0
        "
      >
        {title}
      </div>
    </div>
  );
};

export default GalleryCard;