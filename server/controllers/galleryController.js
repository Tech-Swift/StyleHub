import {
  createGalleryService,
  getGalleryService,
  getGalleryByIdService,
  updateGalleryService,
  deleteGalleryService,
} from "../services/galleryService.js";

export const createGallery = async (
  req,
  res,
  next
) => {
  try {
    const gallery =
      await createGalleryService(req.body);

    res.status(201).json(gallery);
  } catch (error) {
    next(error);
  }
};

export const getGallery = async (
  req,
  res,
  next
) => {
  try {
    const gallery =
      await getGalleryService();

    res.status(200).json(gallery);
  } catch (error) {
    next(error);
  }
};

export const getGalleryById = async (
  req,
  res,
  next
) => {
  try {
    const gallery =
      await getGalleryByIdService(
        req.params.id
      );

    if (!gallery) {
      return res.status(404).json({
        message: "Gallery item not found",
      });
    }

    res.status(200).json(gallery);
  } catch (error) {
    next(error);
  }
};

export const updateGallery = async (
  req,
  res,
  next
) => {
  try {
    const updatedGallery =
      await updateGalleryService(
        req.params.id,
        req.body
      );

    if (!updatedGallery) {
      return res.status(404).json({
        message: "Gallery item not found",
      });
    }

    res.status(200).json(updatedGallery);
  } catch (error) {
    next(error);
  }
};

export const deleteGallery = async (
  req,
  res,
  next
) => {
  try {
    const deletedGallery =
      await deleteGalleryService(
        req.params.id
      );

    if (!deletedGallery) {
      return res.status(404).json({
        message: "Gallery item not found",
      });
    }

    res.status(200).json({
      message:
        "Gallery item deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};