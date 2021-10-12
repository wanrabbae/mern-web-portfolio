import { getProjectsApi } from '../apis/projectApi';

export const getProjects = () => async (dispatch) => {
    try {
        const { data } = await getProjectsApi();
        dispatch({ type: 'GET_PROJECTS', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}