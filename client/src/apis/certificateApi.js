import api from './serverApi'

export const getCertificatesApi = () => {
    return api.get("/certificate")
}