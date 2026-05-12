import Testimonial from "../models/Testimonial.js";

export const createTestimonial =
  async (data) => {
    return await Testimonial.create(data);
  };
  
export const fetchTestimonials =
  async () => {
    return await Testimonial.find();
  };

export const updateTestimonial =
  async (id, data) => {
    return await Testimonial.findByIdAndUpdate(
      id,
      data,
      {
        new: true,
      }
    );
  };

export const deleteTestimonial =
  async (id) => {
    return await Testimonial.findByIdAndDelete(
      id
    );
  };