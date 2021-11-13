import { getSkillsApi, createSkillApi, deleteSkillApi, updateSkillApi } from '../apis/skillApi';
import { toast } from 'react-toastify';

export const getSkills = () => async (dispatch) => {
    try {
        const { data } = await getSkillsApi();
        dispatch({ type: 'GET_SKILLS', payload: data.data })
    } catch (error) {
        console.log(error.message);
    }
}

export const createSkill = (skill) => async (dispatch) => {
    try {
        const { data } = await createSkillApi(skill);
        dispatch({ type: 'CREATE_SKILL', payload: data.data });
        toast.success('Skill created successfully');
    } catch (error) {
        console.log(error.message);
        toast.error('Error creating skill');
    }
}

export const deleteSkill = (id) => async (dispatch) => {
    try {
        await deleteSkillApi(id);
        dispatch({ type: 'DELETE_SKILL', payload: id });
        toast.success('Skill deleted successfully');
    } catch (error) {
        console.log(error.message);
        toast.error('Error deleting skill');
    }
}

export const updateSkill = (skill) => async (dispatch) => {
    try {
        const { data } = await updateSkillApi(skill.id, skill);
        dispatch({ type: 'UPDATE_SKILL', payload: data.data });
        toast.success('Skill updated successfully');
    } catch (error) {
        console.log(error.message);
        toast.error('Error updating skill');
    }
}