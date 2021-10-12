import api from './serverApi';

export const getProjectsApi = () => {
    return api.get('/projects');
}