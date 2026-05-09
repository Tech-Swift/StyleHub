import express from "express";

import upload from "../middlewares/uploadMiddleware.js";
import {
  createServiceController,
  getAllServicesController,
  getServiceByIdController,
  updateServiceController,
  deleteServiceController,
} from "../controllers/serviceController.js";

const router = express.Router();

router
  .route("/")
  .post(upload.single("image"), createServiceController)
  .get(getAllServicesController);

router
  .route("/:id")
  .get(getServiceByIdController)
  .put(upload.single("image"), updateServiceController)
  .delete(deleteServiceController);

export default router;