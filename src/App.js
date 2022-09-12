import "./App.css";
import { Routes, Route } from "react-router-dom";
import { direction } from "direction";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Searched from "./pages/Searched";
import TopicImages from "./pages/TopicImages";
function App() {
  const { t } = useTranslation("common");
  const darkMode = useSelector((state) => state.darkMode).darkMode;
  const currentFont = useSelector((state) => state.language.font);
  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } dark:bg-black bg-white w-full  h-screen ${
        currentFont === "cairo"
          ? "font-cairo"
          : currentFont === "alice"
          ? "font-alice"
          : "font-lato"
      }`}
      dir={direction(t("lang"))}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/@:username/*" element={<UserProfile />} />
        <Route path="/search=:searched/*" element={<Searched />} />
        <Route path="topic/:topicSlug" element={<TopicImages />} />
      </Routes>
    </div>
  );
}

export default App;
