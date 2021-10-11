import { getEducationsApi } from '../apis/educationApi';

export const getEducations = () => async (dispatch) => {
    try {
        const { data } = await getEducationsApi();
        dispatch({ type: 'GET_EDUCATIONS', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}