import api from "../client";

export const submitContactForm = async (data) => {
  const response = await api.post("/contact", data);

  return response.data;
};