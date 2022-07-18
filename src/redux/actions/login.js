import axiosIntance from "../../api/index";
import { login, signUp } from "../features/loginSlice";
import { onError } from "../features/errorSlice";

export const logInReq = async (nav, dispatch, requestData) => {
  try {
    const responsePromise = await axiosIntance.post(
      "/Authenticate/login",
      requestData
    );
    let response = await responsePromise.data;
    dispatch(login(response));
    if (responsePromise.status === 200) {
      nav("/");
    }
  } catch (error) {
    let errorResponse = await error.response
    dispatch(onError(errorResponse));
    nav("/signin");
    return errorResponse;
  }
};

export const signUpReq = async (nav, dispatch, requestData) => {
  try {
    debugger;
    const responsePromise = await axiosIntance.post(
      "/Authenticate/signup",
      requestData
    );

    let response = await responsePromise.data;
    dispatch(signUp(response));
    if (responsePromise.status === 200) {
      nav("/");
    }
  } catch (error) {
    let errorResponse = await error.response
    dispatch(onError(errorResponse));
    nav("/signup");
    return errorResponse;
  }
};
