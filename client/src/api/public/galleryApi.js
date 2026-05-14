import api  from "@/api/client";

export const getGallery = async () => {
  const response = await api.get("/gallery");

  return response.data;
};