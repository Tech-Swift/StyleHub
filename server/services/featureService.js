import Feature from "../models/Feature.js";

export const createFeatureService = async (
  featureData
) => {
  return await Feature.create(featureData);
};

export const getFeaturesService = async () => {
  return await Feature.find().sort({
    createdAt: -1,
  });
};

export const getFeatureByIdService = async (id) => {
  return await Feature.findById(id);
};

export const updateFeatureService = async (
  id,
  updateData
) => {
  return await Feature.findByIdAndUpdate(
    id,
    updateData,
    {
      new: true,
      runValidators: true,
    }
  );
};

export const deleteFeatureService = async (id) => {
  return await Feature.findByIdAndDelete(id);
};