import {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
} from "../services/servicesService.js";

export const createServiceController = async (
  req,
  res
) => {
  try {
    const {
      title,
      description,
      price,
      categoryId,
      featured,
      available,
    } = req.body;

    // IMAGE CHECK
    if (!req.file) {
      return res.status(400).json({
        message: "Service image is required",
      });
    }

    // CATEGORY CHECK
    if (!categoryId) {
      return res.status(400).json({
        message: "Category is required",
      });
    }

    const serviceData = {
      title,
      description,
      price,
      categoryId,
      featured,
      available,
      image: `/uploads/services/${req.file.filename}`,
    };

    const service = await createService(
      serviceData
    );

    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllServicesController = async (
  req,
  res
) => {
  try {
    const services =
      await getAllServices();

    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getServiceByIdController = async (
  req,
  res
) => {
  try {
    const service =
      await getServiceById(
        req.params.id
      );

    if (!service) {
      return res.status(404).json({
        message: "Service not found",
      });
    }

    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateServiceController = async (
  req,
  res
) => {
  try {
    const {
      title,
      description,
      price,
      categoryId,
      featured,
      available,
    } = req.body;

    const updatedData = {
      title,
      description,
      price,
      categoryId,
      featured,
      available,
    };

    // OPTIONAL IMAGE UPDATE
    if (req.file) {
      updatedData.image = `/uploads/services/${req.file.filename}`;
    }

    const updatedService =
      await updateService(
        req.params.id,
        updatedData
      );

    if (!updatedService) {
      return res.status(404).json({
        message: "Service not found",
      });
    }

    res.status(200).json(updatedService);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteServiceController = async (
  req,
  res
) => {
  try {
    const deletedService =
      await deleteService(
        req.params.id
      );

    if (!deletedService) {
      return res.status(404).json({
        message: "Service not found",
      });
    }

    res.status(200).json({
      message:
        "Service deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};