import { AiOutlineCamera } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { login } from "../features/user/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user));
    navigate("/");
  };
  return (
    <div className="md:w-6/12 h-screen w-full mx-auto ">
      <div className="text-black  p-1 flex flex-col items-center">
        <AiOutlineCamera className="text-black text-8xl " />
        <h1 className="text-5xl mt-2 font-extrabold">Login</h1>
        <h3 className="mt-6  text-l">Welcome Back.</h3>
      </div>
      <form
        onSubmit={onSubmit}
        className="p-2 mt-7 w-full flex flex-col "
        autoComplete="off"
      >
        <label className="text-xl" htmlFor="username">
          <span className="text-xl after:content-['*'] after:ml-0.5 after:text-red-500 block  text-black">
            Username
          </span>
        </label>
        <input
          required
          onChange={(e) => setUser(e.target.value)}
          className="h-11 p-2 mt-1 border border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-black"
          id="username"
          name="username"
          placeholder="username"
        />
        <div className="flex justify-between mt-6">
          <label className="text-xl" htmlFor="password">
            <span className="text-xl after:content-['*'] after:ml-0.5 after:text-red-500 block  text-black">
              Password
            </span>
          </label>
          <span className="text-gray-600 cursor-pointer hover:text-black mr-1 ">
            Forgot your password?{" "}
          </span>
        </div>
        <input
          required
          className="h-11 border border-gray-600 p-2 mt-1 rounded focus:outline-none focus:ring-1 focus:ring-black"
          type="password"
          name="pass"
          id="pass"
          placeholder="password"
        />
        <input
          type="submit"
          value="Login"
          className="mt-6 bg-black text-white rounded h-12 text-xl cursor-pointer active:bg-gray-900  "
        />
      </form>
      <div className="border border-gray-500 mx-2 py-5 text-center mt-6 rounded-sm text-l">
        <p>
          Don’t have an account?{" "}
          <Link
            className="underline  text-gray-600 hover:text-black"
            to="/register"
          >
            Join KrPics
          </Link>
        </p>
      </div>
    </div>
  );
}
