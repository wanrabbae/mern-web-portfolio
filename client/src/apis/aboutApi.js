import api from "./serverApi";

export const getAboutApi = () => {
  return api.get("/about");
};

export const createAboutApi = (data) => {
  return api.post("/about", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteAboutApi = (id) => {
  return api.delete(`/about/${id}`);
};

export const updateAboutApi = (id, data) => {
  return api.put(`/about/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
