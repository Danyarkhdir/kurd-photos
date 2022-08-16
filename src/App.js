import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
function App() {
  return (
    <div className="bg-primary-500 w-full h-screen">
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
