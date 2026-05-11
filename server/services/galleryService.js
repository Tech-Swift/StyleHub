import Gallery from "../models/Gallery.js";

export const createGalleryService = async (
  galleryData
) => {
  return await Gallery.create(galleryData);
};

export const getGalleryService = async () => {
  return await Gallery.find().sort({
    createdAt: -1,
  });
};

export const getGalleryByIdService = async (id) => {
  return await Gallery.findById(id);
};

export const updateGalleryService = async (
  id,
  updateData
) => {
  return await Gallery.findByIdAndUpdate(
    id,
    updateData,
    {
      new: true,
      runValidators: true,
    }
  );
};

export const deleteGalleryService = async (id) => {
  return await Gallery.findByIdAndDelete(id);
};