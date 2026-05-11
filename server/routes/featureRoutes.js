import express from "express";

import {
  createFeature,
  getFeatures,
  getFeatureById,
  updateFeature,
  deleteFeature,
} from "../controllers/featureController.js";

const router = express.Router();

router.route("/")
  .post(createFeature)
  .get(getFeatures);

router.route("/:id")
  .get(getFeatureById)
  .put(updateFeature)
  .delete(deleteFeature);

export default router;