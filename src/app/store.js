import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/user/authSlice";
import profileSlice from "../features/modal/profileSlice";
export default configureStore({
  reducer: {
    auth: authSlice,
    profileModal: profileSlice,
  },
});
