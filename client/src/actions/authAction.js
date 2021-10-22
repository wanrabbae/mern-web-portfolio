import { SignIn } from '../apis/authApi';
import { toast } from 'react-toastify';

export const signinAction = (authData) => async (dispatch) => {
    try {
        const { data } = await SignIn(authData);

        dispatch({ type: "SIGN_IN", payload: { token: data.token, isLogged: data.isLogged } });

        toast.success("Sign In Successfully!");

        setTimeout(() => window.location.href = "/", 4000);

    } catch (error) {
        toast.error("Incorrect username or password!")
    }
}