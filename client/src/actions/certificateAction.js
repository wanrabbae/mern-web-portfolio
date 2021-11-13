import {
  getCertificatesApi,
  createCertificateApi,
  deleteCertificateApi,
  updateCertificateApi,
} from "../apis/certificateApi";
import { toast } from "react-toastify";

export const getCertificates = () => async (dispatch) => {
  try {
    const { data } = await getCertificatesApi();
    dispatch({ type: "GET_CERTIFICATES", payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCertificate = (dataCrt) => async (dispatch) => {
  try {
    const { data } = await createCertificateApi(dataCrt);
    dispatch({ type: "CREATE_CERTIFICATE", payload: data.data });
    toast.success("Certificate Created Successfully");
  } catch (error) {
    console.log(error.message);
    toast.error("Failed creating certificate! :(");
  }
};

export const deleteCertificate = (id) => async (dispatch) => {
  try {
    await deleteCertificateApi(id);
    dispatch({ type: "DELETE_CERTIFICATE", payload: id });
    toast.success("Certificate Deleted Successfully");
  } catch (error) {
    console.log(error.message);
    toast.error("Failed deleting certificate! :(");
  }
};

export const updateCertificate = (dataCrtId, dataCrt) => async (dispatch) => {
  try {
    const { data } = await updateCertificateApi(dataCrtId, dataCrt);
    console.log(dataCrt);
    dispatch({ type: "UPDATE_CERTIFICATE", payload: data.data });
    toast.success("Certificate Updated Successfully");
  } catch (error) {
    console.log(error.message);
    toast.error("Failed updating certificate! :(");
  }
};
