import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: {
    isOpen: false,
    title: null,
    description: null
  },
  reducers: {
    onError(state, action) {
      state.isOpen = true;
      state.title = action.payload.statusText;
      state.description = action.payload.data;
    },
    onClose(state){
      state.isOpen = false;
      state.title = null;
      state.description = null;
    }
  },
});


export const { onError, onClose } = errorSlice.actions;

export default errorSlice.reducer