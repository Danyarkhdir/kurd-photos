import { createSlice } from "@reduxjs/toolkit";

const currentLanguage = localStorage.getItem("lang") || "en";
const initialState = {
  lang: currentLanguage,
  font:
    currentLanguage === "ku"
      ? "alice"
      : currentLanguage === "ar"
      ? "cairo"
      : "lato",
};

const langSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload.lang;
      state.font = action.payload.font;
      localStorage.setItem("lang", action.payload.lang);
    },
  },
});

export const { setLang, setFont } = langSlice.actions;

export default langSlice.reducer;
