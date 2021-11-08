import { toast } from 'react-toastify';
import { getEducationsApi, deleteEducationApi, createEducationApi, updateEducationApi } from '../apis/educationApi';

export const getEducations = () => async (dispatch) => {
    try {
        const { data } = await getEducationsApi();
        dispatch({ type: 'GET_EDUCATIONS', payload: data.data })
    } catch (error) {
        console.log(error.message);
    }
}

export const createEducation = (educationData) => async (dispatch) => {
    try {
        const { data } = await createEducationApi(educationData);
        dispatch({ type: 'CREATE_EDUCATION', payload: data.data });
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

export const updateEducation = (educationData) => async (dispatch) => {
    try {
        const { data } = await updateEducationApi(educationData.id, educationData);
        dispatch({ type: 'UPDATE_EDUCATION', payload: data.data });
        toast.success("Education Updated Successfully")
    } catch (error) {
        console.log(error);
        toast.error("Failed updating education! :(")
    }
}