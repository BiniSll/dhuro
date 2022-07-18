import axiosIntance from "../../api/index";
import { login, signUp, logout } from "../features/loginSlice";
import { onError } from "../features/errorSlice";

export const logInReq = async (nav, dispatch, requestData) => {
  axiosIntance
    .post("/Authenticate/login", requestData)
    .then((response) => {
      dispatch(login(response.data));
      if (response.status === 200) {
        nav("/");
      }
    })
    .catch((errorResponse) => {
      console.log(errorResponse.response);
      errorResponse.response.statusText = ""
      dispatch(onError(errorResponse.response));
    });
};

export const authenticateReq = async (dispatch, token) => {
  axiosIntance
    .get("/Authenticate")
    .then((res) => {
      console.log({ res });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const logoutReq = async (dispatch) => {
  dispatch(logout);
};

export const signUpReq = async (nav, dispatch, requestData) => {
  try {
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
    let errorResponse = await error.response;
    dispatch(onError(errorResponse));
    nav("/signup");
    return errorResponse;
  }
};
