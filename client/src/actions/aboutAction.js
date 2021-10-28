import { getAboutApi, createAboutApi, deleteAboutApi } from '../apis/aboutApi';
import { toast } from 'react-toastify';

export const getAbout = () => async (dispatch) => {
    try {
        const { data } = await getAboutApi();
        dispatch({ type: 'GET_ABOUT', payload: data.data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createAbout = (dataAbout) => async (dispatch) => {
    try {
        const { data } = await createAboutApi(dataAbout);
        dispatch({ type: 'CREATE_ABOUT', payload: data.data });
        toast.success("About Created Successfully");
    } catch (error) {
        console.log(error.message);
        toast.error("Failed creating about! :(")
    }
}

export const deleteAbout = (id) => async (dispatch) => {
    try {
        await deleteAboutApi(id);
        dispatch({ type: 'DELETE_ABOUT', payload: id });
        toast.success("About Deleted Successfully");
    } catch (error) {
        console.log(error.message);
        toast.error("Failed deleting about! :(")
    }
}