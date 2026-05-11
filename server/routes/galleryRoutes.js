import express from "express";

import {
  createGallery,
  getGallery,
  getGalleryById,
  updateGallery,
  deleteGallery,
} from "../controllers/galleryController.js";

const router = express.Router();

router.route("/")
  .post(createGallery)
  .get(getGallery);

router.route("/:id")
  .get(getGalleryById)
  .put(updateGallery)
  .delete(deleteGallery);

export default router;