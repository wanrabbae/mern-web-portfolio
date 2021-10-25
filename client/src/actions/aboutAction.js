import {
    getAboutApi
} from '../apis/aboutApi';

export const getAbout = () => async (dispatch) => {
    try {
        const { data } = await getAboutApi();
        dispatch({
            type: 'GET_ABOUT',
            payload: data.data
        });
    } catch (error) {
        console.log(error.message);
    }
}