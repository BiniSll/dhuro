import axiosIntance from "../../api/index";
import { login, signUp } from "../features/loginSlice";
import { onError } from "../features/errorSlice";

export const logInReq = async (nav, dispatch, requestData) => {
  try {
    const responsePromise = await axiosIntance.post("/Home/login", requestData);
    let response = await responsePromise.data;
    dispatch(login(response));
    if(responsePromise.status === 200){
      nav("/");
    }
  } catch (error) {
    nav("/Authenticate/signin");
    dispatch(onError(await error.response));
    return error.response;
  }
};

export const signUpReq = async (nav, dispatch, requestData) => {
  try {
    const responsePromise = await axiosIntance.post(
      "/Authenticate/signup",
      requestData
    );

    let response = await responsePromise.data;
    dispatch(signUp(response));
    if(responsePromise.status === 200){
      nav("/");
    }

  } catch (error) {
    nav("/signup");
    dispatch(onError(await error.response));
    return error.response;
  }
};
