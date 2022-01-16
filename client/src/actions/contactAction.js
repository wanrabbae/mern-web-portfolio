import { toast } from "react-toastify";
import {
  getContactsApi,
  deleteContactApi,
  createContactApi,
} from "../apis/contactApi";

export const getContacts = () => async (dispatch) => {
  try {
    const { data } = await getContactsApi();
    dispatch({ type: "GET_CONTACTS", payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createContact = (educationData) => async (dispatch) => {
  try {
    const { data } = await createContactApi(educationData);
    dispatch({ type: "CREATE_CONTACT", payload: data.data });
    toast.success("your message has been sent");
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong :(");
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await deleteContactApi(id);
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact Deleted Successfully");
  } catch (error) {
    console.log(error);
    toast.error("Failed deleting education! :(");
  }
};
