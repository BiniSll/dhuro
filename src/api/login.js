import axiosIntance from "./index";
import { login } from "../features/loginSlice";
import { onError } from "../features/errorSlice";

export const logInReq = async (dispatch, requestData) => {
  try {
    const responsePromise = await axiosIntance.post("/Home/login", requestData);
    let response = await responsePromise.data;
    dispatch(login(response));
    return response;
  } catch (error) {
    let errorResponse = await error.response;
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
