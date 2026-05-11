const GalleryCard = ({ image, title }) => {
  return (
    <div className="group overflow-hidden rounded-xl cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110"
      />
    </div>
  );
};

export default GalleryCard;