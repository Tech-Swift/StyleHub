import {
  createFeatureService,
  getFeaturesService,
  getFeatureByIdService,
  updateFeatureService,
  deleteFeatureService,
} from "../services/featureService.js";

export const createFeature = async (
  req,
  res,
  next
) => {
  try {
    const feature =
      await createFeatureService(req.body);

    res.status(201).json(feature);
  } catch (error) {
    next(error);
  }
};

export const getFeatures = async (
  req,
  res,
  next
) => {
  try {
    const features =
      await getFeaturesService();

    res.status(200).json(features);
  } catch (error) {
    next(error);
  }
};

export const getFeatureById = async (
  req,
  res,
  next
) => {
  try {
    const feature =
      await getFeatureByIdService(
        req.params.id
      );

    if (!feature) {
      return res.status(404).json({
        message: "Feature not found",
      });
    }

    res.status(200).json(feature);
  } catch (error) {
    next(error);
  }
};

export const updateFeature = async (
  req,
  res,
  next
) => {
  try {
    const updatedFeature =
      await updateFeatureService(
        req.params.id,
        req.body
      );

    if (!updatedFeature) {
      return res.status(404).json({
        message: "Feature not found",
      });
    }

    res.status(200).json(updatedFeature);
  } catch (error) {
    next(error);
  }
};

export const deleteFeature = async (
  req,
  res,
  next
) => {
  try {
    const deletedFeature =
      await deleteFeatureService(
        req.params.id
      );

    if (!deletedFeature) {
      return res.status(404).json({
        message: "Feature not found",
      });
    }

    res.status(200).json({
      message: "Feature deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};