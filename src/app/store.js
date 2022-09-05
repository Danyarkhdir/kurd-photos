import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/user/authSlice";
import langSlice from "../features/user/langSlice";
export default configureStore({
  reducer: {
    auth: authSlice,
    language: langSlice,
  },
});
