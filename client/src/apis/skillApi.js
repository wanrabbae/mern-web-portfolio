import api from './serverApi';

export const getSkillsApi = () => {
    return api.get('/skills');
}