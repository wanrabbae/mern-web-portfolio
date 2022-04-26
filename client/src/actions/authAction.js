import { SignIn } from "../apis/authApi";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export const signinAction = (authData) => async (dispatch) => {
  try {
    const { data } = await SignIn(authData);

    dispatch({
      type: "SIGN_IN",
      payload: { token: data.token, isLogged: data.isLogged },
    });

    Cookies.set("token", data.token, { expires: 1, path: "/" });

    toast.success("Sign In Successfully!");
  } catch (error) {
    toast.error("Incorrect username or password!");
  }
};
