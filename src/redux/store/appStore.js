import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import moviesReducer from "../slice/moviesSlice";
import gptReducer from "../slice/gptSlice";
import languageReducer from "../slice/languageSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    language: languageReducer,
  },
});

export default appStore;
