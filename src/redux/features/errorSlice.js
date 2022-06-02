import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: {
    title: null,
    description: null
  },
  reducers: {
    onError(state, action) {
      state.title = action.payload.statusText;
      state.description = action.payload.data;
    }
  },
});


export const { onError, onClose } = errorSlice.actions;

export default errorSlice.reducer