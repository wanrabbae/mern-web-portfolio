import api from './serverApi'

export const getAboutApi = () => {
    return api.get("/about")
}