import { toast } from 'react-toastify';
import { getEducationsApi, deleteEducationApi, createEducationApi } from '../apis/educationApi';

export const getEducations = () => async (dispatch) => {
    try {
        const { data } = await getEducationsApi();
        dispatch({ type: 'GET_EDUCATIONS', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const createEducation = (educationData) => async (dispatch) => {
    try {
        const { data } = await createEducationApi(educationData);
        console.log(data);
        dispatch({ type: 'CREATE_EDUCATION', payload: data });
        toast.success("Education Created Successfully")
    } catch (error) {
        console.log(error);
        toast.error("Failed creating education! :(")
    }
}

export const deleteEducation = (id) => async (dispatch) => {
    try {
        await deleteEducationApi(id)
        dispatch({ type: 'DELETE_EDUCATION', payload: id })
        toast.success("Education Deleted Successfully");
    } catch (error) {
        console.log(error);
        toast.error("Failed deleting education! :(")
    }
}