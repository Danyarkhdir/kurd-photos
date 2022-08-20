import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import CategoryScrollMenu from "./components/CategoryScrollMenu";
import { useSelector } from "react-redux";

function App() {
  const language = useSelector((state) => {
    console.log(state.language.lang);
    return state.language.lang;
  });
  const font = useSelector((state) => {
    console.log(state.language.font);
    return state.language.font;
  });
  return (
    <div
      className={`bg-primary-500 w-full h-screen font-${font}`}
      dir={language === "en" ? "ltr" : "rtl"}
    >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainLayout />
              <CategoryScrollMenu />
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
