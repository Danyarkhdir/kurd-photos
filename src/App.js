import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import CategoryScrollMenu from "./components/CategoryScrollMenu";
function App() {
  return (
    <div className="bg-primary-500 w-full h-screen">
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
