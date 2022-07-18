import { createSlice } from "@reduxjs/toolkit";

export const storySlice = createSlice({
  name: "story",
  initialState: {
    story: null,
  },
  reducers: {
    AddStories: (state, action) => {
      const oldStories = {...state.story};
      const newStories = {...action.payload};
      debugger;

      if(oldStories !== null)
      {
        newStories.Items = [...oldStories.Items, ...newStories.Items];
      }

      state.story = newStories;
    },
  },
});

export const { AddStories } = storySlice.actions;

export default storySlice.reducer;
