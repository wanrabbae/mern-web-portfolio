import {
    getExperiencesApi
} from '../apis/experienceApi';

export const getExperiences = () => async (dispatch) => {
    try {
        const {
            data
        } = await getExperiencesApi();
        dispatch({
            type: 'GET_EXPERIENCES',
            payload: data.data
        })
    } catch (error) {
        console.log(error.message);
    }
}