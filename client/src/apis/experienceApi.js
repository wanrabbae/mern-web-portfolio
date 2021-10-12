import api from "./serverApi";

export const getExperiencesApi = () => {
    return api.get("/experience/")
}