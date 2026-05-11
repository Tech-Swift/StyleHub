import api from "./client";

export const getFeatures = async () => {
  const response = await api.get("/features");

  return response.data;
};