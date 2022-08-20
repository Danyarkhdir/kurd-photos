import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/user/authSlice";
import profileSlice from "../features/modal/profileSlice";
import langSlice from "../features/user/langSlice";
export default configureStore({
  reducer: {
    auth: authSlice,
    profileModal: profileSlice,
    language: langSlice,
  },
});
