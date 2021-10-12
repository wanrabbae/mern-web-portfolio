import { getSkillsApi } from '../apis/skillApi';

export const getSkills = () => async (dispatch) => {
    try {
        const { data } = await getSkillsApi();
        dispatch({ type: 'GET_SKILLS', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}