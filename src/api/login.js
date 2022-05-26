import axiosIntance from "./index";
import { login } from "../features/loginSlice";

export const logInReq = async(dispatch, requestData) => {
  try{
    const responsePromise = await axiosIntance.post("/Home/login", requestData);
    dispatch(login(await responsePromise.data))
    return responsePromise.status;
  }
  catch(error){
    return {title: error.response.status, description: error.response.statusText};
  }
};
