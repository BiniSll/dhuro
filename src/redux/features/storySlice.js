import { createSlice } from "@reduxjs/toolkit";

export const storySlice = createSlice({
  name: "story",
  initialState: {
    story: null,
  },
  reducers: {
    AddStories: (state, action) => {

      state.story = action.payload;
    },
  },
});

export const { AddStories } = storySlice.actions;

export default storySlice.reducer;
