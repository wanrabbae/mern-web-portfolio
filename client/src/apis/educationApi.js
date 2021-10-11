import api from "./serverApi";

export const getEducationsApi = () => {
    return api.get("/education/")
}