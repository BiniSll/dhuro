import axiosIntance from "../../api/index";
import { AddStories } from "../features/storySlice";

export const createStory = (dispatch, requestModel) => {
  axiosIntance
    .post("/Story", requestModel, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log("Error on creating story!", error);
    });
};

export const getStories = (dispatch, page) => {
  axiosIntance
    .get(`/Story/${page}/10?order=-1`)
    .then((res) => {
      dispatch(AddStories(res.data));
    })
    .catch((error) => {
      console.log("Error on get stories: ", error);
    });
};
