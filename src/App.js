import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import CategoryScrollMenu from "./components/CategoryScrollMenu";
import Home from "./pages/Home";
function App() {
  const language = useSelector((state) => state.language.lang);
  const currentFont = useSelector((state) => state.language.font);
  return (
    <div
      className={`bg-primary-500 w-full  h-screen ${
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
              <CategoryScrollMenu />
              <Home />
            </>
          }
        />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
