import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/user/authSlice";
import langSlice from "../features/user/langSlice";
import darkModeSlice from "../features/user/darkModeSlice";
export default configureStore({
  reducer: {
    auth: authSlice,
    language: langSlice,
    darkMode: darkModeSlice,
  },
});
