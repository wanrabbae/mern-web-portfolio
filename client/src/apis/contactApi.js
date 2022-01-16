import api from "./serverApi";

export const getContactsApi = () => {
  return api.get("/contact/");
};

export const createContactApi = (data) => {
  return api.post("/contact", data);
};

export const deleteContactApi = (contactId) => {
  return api.delete(`/contact/${contactId}`);
};
