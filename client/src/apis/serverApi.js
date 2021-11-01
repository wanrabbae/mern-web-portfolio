import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
    baseURL: process.env.REACT_APP_ENVIRONMENT === 'development' ? 'http://localhost:4000/api' : process.env.REACT_APP_SERVER_URL,
    withCredentials: true,
});
// kirim setiap request ke server dengan header Authorization yang berisi token
api.interceptors.request.use((req) => {
    const token = Cookies.get('token');
    if (token) {
        req.headers.Authorization = `${token}`;
    }
    return req;
})

export default api;
