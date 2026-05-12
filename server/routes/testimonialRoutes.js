import express from "express";

import { addTestimonial,getTestimonials, editTestimonial, removeTestimonial } from "../controllers/testimonialController.js";

const router = express.Router();

router.post("/", addTestimonial);
router.get("/", getTestimonials);
router.put("/:id", editTestimonial);
router.delete("/:id", removeTestimonial);

export default router;