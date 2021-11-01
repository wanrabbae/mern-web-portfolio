import { getProjectsApi, createProjectApi, deleteProjectApi } from '../apis/projectApi';
import { toast } from 'react-toastify';

export const getProjects = () => async (dispatch) => {
    try {
        const { data } = await getProjectsApi();
        dispatch({ type: 'GET_PROJECTS', payload: data.data })
    } catch (error) {
        console.log(error.message);
    }
}

export const createProject = (project) => async (dispatch) => {
    try {
        const { data } = await createProjectApi(project);
        dispatch({ type: 'CREATE_PROJECT', payload: data.data })
        toast.success('Project created successfully');
    } catch (error) {
        console.log(error.message);
        toast.error("Failed creating project! :(");
    }
}

export const deleteProject = (projectId) => async (dispatch) => {
    try {
        await deleteProjectApi(projectId);
        dispatch({ type: 'DELETE_PROJECT', payload: projectId })
        toast.success('Project deleted successfully');
    } catch (error) {
        console.log(error.message);
        toast.error("Failed deleting project! :(");
    }
}