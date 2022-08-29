import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
function App() {
  const language = useSelector((state) => state.language.lang);
  const currentFont = useSelector((state) => state.language.font);
  return (
    <div
      className={`bg-white w-full  h-screen ${
        currentFont === "cairo"
          ? "font-cairo"
          : currentFont === "alice"
          ? "font-alice"
          : "font-lato"
      }`}
      dir={language === "en" ? "ltr" : "rtl"}
    >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainLayout />
              <Home />
            </>
          }
        />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/@:username/*" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
