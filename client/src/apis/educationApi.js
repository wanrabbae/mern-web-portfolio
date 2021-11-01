import api from "./serverApi";

export const getEducationsApi = () => {
    return api.get("/education/");
}

export const createEducationApi = (data) => {
    return api.post("/education", data)
}

export const deleteEducationApi = (educationId) => {
    return api.delete(`/education/${educationId}`);
}