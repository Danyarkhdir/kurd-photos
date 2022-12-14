import { AiOutlineCamera } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useTranslation } from "react-i18next";
import { login } from "../features/user/authSlice";

export default function Login() {
  const { t } = useTranslation("common");
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user));
    navigate("/");
  };
  return (
    <div className="w-full h-screen  dark:bg-black bg-white pb-10">
      <div className="md:w-6/12 w-full mx-auto ">
        {/* Login Header */}
        <div className="dark:text-white text-black  p-1 flex flex-col items-center">
          <AiOutlineCamera className="dark:text-white text-black text-8xl " />
          <h1 className="text-5xl mt-2 font-extrabold dark:text-white text-black">
            {t("login.login")}
          </h1>
          <h3 className="mt-6 dark:text-white text-black text-l">
            {t("login.welcome")}
          </h3>
        </div>

        {/* Login Form  */}
        <form
          onSubmit={onSubmit}
          className="p-2 mt-7 w-full flex flex-col dark:bg-black bg-white"
          autoComplete="off"
        >
          <label className="text-xl" htmlFor="username">
            <span className="text-xl after:content-['*'] after:ml-0.5 after:text-red-500 block  dark:text-white text-black">
              {t("login.username")}
            </span>
          </label>
          <input
            required
            onChange={(e) => setUser(e.target.value)}
            className="h-11 p-2 mt-1 border border-gray-600 rounded focus:outline-none focus:ring-1 text-black focus:ring-black"
            id="username"
            name="username"
            placeholder={t("login.username").toLowerCase()}
          />
          <div className="flex justify-between mt-6">
            <label className="text-xl" htmlFor="password">
              <span className="text-xl after:content-['*'] after:ml-0.5 after:text-red-500 block  dark:text-white text-black">
                {t("login.password")}
              </span>
            </label>
            <span className="text-gray-600 cursor-pointer hover:text-white mr-1 ">
              {t("login.forgotPassword")}
            </span>
          </div>
          <input
            required
            className="h-11 border border-gray-600 p-2 mt-1 rounded focus:outline-none focus:ring-1 text-black focus:ring-black"
            type="password"
            name="pass"
            id="pass"
            placeholder={t("login.password").toLowerCase()}
          />
          <input
            type="submit"
            value={t("login.login")}
            className="mt-6  text-white bg-green-600  rounded h-12 text-xl cursor-pointer active:bg-gray-900  "
          />
        </form>

        {/* Login Footer */}
        <div className="border text-gray-700 border-gray-500 bg-gray-300 mx-2 py-5 text-center mt-6 rounded-sm text-l ">
          <p>
            {t("login.dontHaveAccount")}
            <Link
              className="underline   text-gray-600 hover:text-black "
              to="/register"
            >
              {t("login.join")} KrPics
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
