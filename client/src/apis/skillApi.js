import api from './serverApi';

export const getSkillsApi = () => {
    return api.get('/skills');
}

export const createSkillApi = (skill) => {
    return api.post('/skills', skill);
}

export const deleteSkillApi = (skillId) => {
    return api.delete(`/skills/${skillId}`);
}

export const updateSkillApi = (skillId, skill) => {
    return api.put(`/skills/${skillId}`, skill);
}