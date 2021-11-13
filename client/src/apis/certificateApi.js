import api from "./serverApi";

export const getCertificatesApi = () => {
  return api.get("/certificate");
};

export const createCertificateApi = (data) => {
  return api.post("/certificate", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteCertificateApi = (id) => {
  return api.delete(`/certificate/${id}`);
};

export const updateCertificateApi = (dataCrtId, dataCrt) => {
  return api.put(`/certificate/${dataCrtId}`, dataCrt, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
