import { createExperienceApi, getExperiencesApi, deleteExperienceApi, updateExperienceApi } from '../apis/experienceApi';
import { toast } from 'react-toastify';

export const getExperiences = () => async (dispatch) => {
    try {
        const { data } = await getExperiencesApi();
        dispatch({ type: 'GET_EXPERIENCES', payload: data.data })
    } catch (error) {
        console.log(error.message);
    }
}

export const createExperience = (experience) => async (dispatch) => {
    try {
        const { data } = await createExperienceApi(experience);
        await dispatch({ type: 'CREATE_EXPERIENCE', payload: data.data });
        toast.success('Experience created successfully');
    } catch (error) {
        console.log(error.message);
        toast.error('Experience creation failed!');
    }
}

export const deleteExperience = (id) => async (dispatch) => {
    try {
        await deleteExperienceApi(id);
        dispatch({ type: 'DELETE_EXPERIENCE', payload: id });
        toast.success('Experience deleted successfully');
    } catch (error) {
        console.log(error.message);
        toast.error('Experience deletion failed!');
    }
}

export const updateExperience = (experience) => async (dispatch) => {
    try {
        const { data } = await updateExperienceApi(experience.id, experience);
        dispatch({ type: 'UPDATE_EXPERIENCE', payload: data.data });
        toast.success('Experience updated successfully');
    } catch (error) {
        console.log(error.message);
        toast.error('Experience update failed!');
    }
}