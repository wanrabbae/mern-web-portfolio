import { getCertificatesApi } from '../apis/certificateApi';

export const getCertificates = () => async (dispatch) => {
    try {
        const { data } = await getCertificatesApi();
        dispatch({ type: 'GET_CERTIFICATES', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}