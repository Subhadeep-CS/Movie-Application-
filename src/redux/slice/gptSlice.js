import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleGpt: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.toggleGpt = !state.toggleGpt;
    },
  },
});

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
