import { SignIn } from '../apis/authApi';
import { toast } from 'react-toastify';

export const signinAction = (authData) => async (dispatch) => {

    try {
        const { data } = await SignIn(authData);
        console.log(data);

        localStorage.setItem("userData", JSON.stringify({ token: data.token, isLogged: data.isLogged }))

        toast.success("Sign In Successfully");

        dispatch({ type: "SIGN_IN", payload: { token: data.token, isLogged: data.isLogged } });

    } catch (error) {
        toast.error("Incorrect username or password!")
    }
}