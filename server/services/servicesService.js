import Service from "../models/Service.js";

/**
 * CREATE SERVICE
 */
export const createService = async (serviceData) => {
  const service = await Service.create(serviceData);
  return service;
};

/**
 * GET ALL SERVICES
 */
export const getAllServices = async () => {
  return await Service.find()
    .populate("categoryId")
    .sort({ createdAt: -1 });
};

/**
 * GET SINGLE SERVICE
 */
export const getServiceById = async (serviceId) => {
  return await Service.findById(serviceId)
    .populate("categoryId");
};

/**
 * UPDATE SERVICE
 */
export const updateService = async (
  serviceId,
  updatedData
) => {
  const updatedService =
    await Service.findByIdAndUpdate(
      serviceId,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    ).populate("categoryId");

  return updatedService;
};

/**
 * DELETE SERVICE
 */
export const deleteService = async (serviceId) => {
  return await Service.findByIdAndDelete(serviceId);
};