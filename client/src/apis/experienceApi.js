import api from "./serverApi";

export const getExperiencesApi = () => {
    return api.get("/experience/");
}

export const createExperienceApi = (experience) => {
    return api.post("/experience", experience);
}

export const deleteExperienceApi = (id) => {
    return api.delete(`/experience/${id}`);
}