import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

const profileSlice = createSlice({
  name: "profileModal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.show = !state.show;
    },
  },
});

export const { showModal } = profileSlice.actions;

export default profileSlice.reducer;
