import { createSlice } from "@reduxjs/toolkit";

const currentLanguage = localStorage.getItem("lang") || "en";
const initialState = {
  lang: currentLanguage,
  font:
    currentLanguage === "ku"
      ? "alice"
      : currentLanguage === "ar"
      ? "cairo"
      : "",
};

const langSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem("lang", action.payload);
    },
    setFont: (state, action) => {
      state.font = action.payload;
      localStorage.setItem("font", action.payload);
    },
  },
});

export const { setLang, setFont } = langSlice.actions;

export default langSlice.reducer;
