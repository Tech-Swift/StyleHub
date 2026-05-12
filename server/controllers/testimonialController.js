import { createTestimonial,fetchTestimonials, updateTestimonial, deleteTestimonial } from "../services/testimonialService.js";

export const addTestimonial =
  async (req, res) => {
    try {
      const testimonial =
        await createTestimonial(
          req.body
        );

      res.status(201).json(
        testimonial
      );
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to create testimonial",
      });
    }
  };

export const getTestimonials =
  async (req, res) => {
    try {
      const testimonials =
        await fetchTestimonials();

      res.status(200).json(
        testimonials
      );
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          "Failed to fetch testimonials",
      });
    }
  };

export const editTestimonial =
  async (req, res) => {
    try {
      const testimonial =
        await updateTestimonial(
          req.params.id,
          req.body
        );

      res.status(200).json(
        testimonial
      );
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to update testimonial",
      });
    }
  };

export const removeTestimonial =
  async (req, res) => {
    try {
      await deleteTestimonial(
        req.params.id
      );

      res.status(200).json({
        message:
          "Testimonial deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to delete testimonial",
      });
    }
  };