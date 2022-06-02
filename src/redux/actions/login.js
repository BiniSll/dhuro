import axiosIntance from "../../api/index";
import { login } from "../../features/loginSlice";
import { onError } from "../../features/errorSlice";

export const logInReq = async (nav, dispatch, requestData) => {
  try {
    const responsePromise = await axiosIntance.post("/Home/login", requestData);
    let response = await responsePromise.data;
    dispatch(login(response));
    if(responsePromise.status === 200){
      nav("/");
    }
  } catch (error) {
    let errorResponse = await error.response;
    nav("/signin");
    dispatch(onError(errorResponse));
    return errorResponse;
  }
};

export const signUpReq = async (dispatch, requestData) => {
  try {
    const responsePromise = await axiosIntance.post(
      "/Home/signup",
      requestData
    );
  } catch (error) {
    dispatch(onError(await error.response));
  }
};
