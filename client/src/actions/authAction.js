import {
    SignIn
} from '../apis/authApi';
import {
    toast
} from 'react-toastify';

import {
    useHistory
} from 'react-router-dom';

export const signinAction = (authData) => async (dispatch) => {
    const history = useHistory();

    try {
        const { data } = await SignIn(authData);
        console.log(data);
        if (data.status === 'failed') {
            toast.error("Incorrect username or password!");
            return false;
        }

        localStorage.setItem("userData", JSON.stringify({ token: data.token, isLogged: data.isLogged }))

        toast.success("Sign In Successfully");

        dispatch({ type: "SIGN_IN", payload: { token: data.token, isLogged: data.isLogged } })

    } catch (error) {
        toast.error("Something went wrong :(")
    }
}