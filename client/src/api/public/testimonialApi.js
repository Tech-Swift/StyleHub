import api from "@/api/client";

export const getTestimonials =
  async () => {
    const response = await api.get(
      "/testimonials"
    );

    return response.data;
  };