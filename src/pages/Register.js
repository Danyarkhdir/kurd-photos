import { Link, useNavigate } from "react-router-dom";
import { MdCamera } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Register() {
  const { t } = useTranslation("common");
  const navigate = useNavigate();
  return (
    <div className="md:flex   dark:bg-black bg-white h-fit">
      {/* Right Screen  */}
      <div className="md:w-4/12 xl:w-5/12  h-64 bg-center  bg-black    md:h-screen  bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1627987469780-fc77d8c9a586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')]">
        <div className="px-2 py-4 md:px-6 md:py-6 lg:px-8  lg:py-8 xl:px-12 xl:py-10  ">
          <MdCamera size={"50px"} className="dark:text-black text-white" />
          <h1 className="md:text-4xl md:mt-80 text-4xl mt-28 sm:mt-32 xl:text-5xl lg:mt-80 xl:mt-80  text-white">
            {t("register.welcome")}
          </h1>
        </div>
      </div>

      {/* Left Screen  */}
      <div className="md:w-8/12 xl:w-7/12 h-screen mx-auto  md:overflow-y-scroll ">
        <div className="md:w-7/12 h-screen  mx-auto ">
          <div className="dark:text-white text-black  p-1 flex flex-col items-center">
            <h1 className="text-5xl font-extrabold mt-20 lg:mt-20">
              {t("register.create")}
            </h1>
            <h3 className="mt-6  text-l ">
              {t("register.title")}
              <Link
                className="underline  text-gray-400 dark:hover:text-white hover:text-black"
                to="/login"
              >
                {" "}
                {t("register.login")}
              </Link>
            </h3>
          </div>

          {/* Register Form */}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/login", { replace: true });
            }}
            className="p-2 mt-7 pb-20 w-full flex flex-col dark:bg-black bg-white"
            autoComplete="off"
          >
            <label className="text-xl" htmlFor="username">
              <span className="text-xl after:content-['*'] after:ml-0.5 after:text-red-500 block  dark:text-white text:black">
                {t("register.username")}
              </span>
            </label>
            <input
              required
              className="h-11 p-2 mt-1 border border-gray-600 rounded focus:outline-none focus:ring-1 text-black focus:ring-black"
              id="username"
              name="username"
              placeholder={t("register.username")}
            />
            <label className="text-xl mt-6" htmlFor="email">
              <span className="text-xl after:content-['*'] after:ml-0.5 after:text-red-500 block  dark:text-white text:black">
                {t("register.email")}
              </span>
            </label>
            <input
              required
              className="h-11 border border-gray-600 p-2 mt-1 rounded focus:outline-none focus:ring-1 text-black focus:ring-black"
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
            />
            <label className="text-xl mt-6" htmlFor="password">
              <span className="text-xl after:content-['*'] after:ml-0.5 after:text-red-500 block  dark:text-white text:black">
                {t("register.password")}
              </span>
            </label>
            <input
              required
              className="h-11 border border-gray-600 p-2 mt-1 rounded focus:outline-none focus:ring-1 text-black focus:ring-black"
              type="password"
              name="pass"
              id="pass"
              placeholder={t("register.password")}
            />
            <input
              type="submit"
              value={t("register.register")}
              className="mt-6 bg-blue-500 text-white rounded h-12 text-xl cursor-pointer active:bg-gray-900  "
            />
          </form>
        </div>
      </div>
    </div>
  );
}
