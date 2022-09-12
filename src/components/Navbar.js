import { BiSearchAlt } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setLang } from "../features/user/langSlice";
import { logout } from "../features/user/authSlice";
import { MdCamera } from "react-icons/md";
import { setDarkMode } from "../features/user/darkModeSlice";
import { CgDarkMode } from "react-icons/cg";
export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searched, setSearched] = useState("");
  const lang = useSelector((state) => state.language.lang);
  const [showModal, setShowModal] = useState(false);
  const { t, i18n } = useTranslation("common");
  const mode =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  const languages = [
    {
      name: t("navbar.en"),
      abbr: "en",
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-states-flag-icon.png",
      current: lang === "en",
      font: "lato",
      alt: "English flag",
    },
    {
      name: t("navbar.ku"),
      abbr: "ku",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Flag_of_Kurdistan.png",
      current: lang === "ku",
      font: "alice",
      alt: "Kurdish flag",
    },
    {
      name: t("navbar.ar"),
      abbr: "ar",
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/saudi-arabia-flag-icon.png",
      current: lang === "ar",
      font: "cairo",
      alt: "Arabic flag",
    },
  ];
  const [language, setLanguage] = useState(languages);
  function changeLanguage(lang) {
    setLanguage(
      language.map((langs) => {
        langs.abbr === lang ? (langs.current = true) : (langs.current = false);
        return langs;
      })
    );
  }

  function handleSearch(e) {
    e.preventDefault();

    const cleanSearch = decodeURIComponent(
      searched.replaceAll(/[^a-zA-Z0-9أ-ی ]/g, "")
    );
    if (searched) navigate(`/search=${cleanSearch}/photos`);
  }
  return (
    <div className="navbar md:fixed top-0 z-50 dark:text-white bg-white dark:bg-black  ">
      <div className="">
        <Link
          to="/"
          className=" dark:text-white text-black  "
          title={t("navbar.explore")}
        >
          <MdCamera size={"40px"} />
        </Link>
      </div>
      <form
        className="form-control  flex-1 xs:mx-3 md:mx-14  lg:mx-16 xl:mx-20"
        onSubmit={(e) => {
          handleSearch(e);
        }}
      >
        <div className="flex w-full border-gray-400 input-bordered input h-10 bg-white   items-center px-4 rounded-3xl">
          <div onClick={(e) => handleSearch(e)}>
            <BiSearchAlt
              size={22}
              className="cursor-pointer text-gray-400 hover:text-black"
            />
          </div>
          <input
            required={true}
            onChange={(e) => {
              setSearched(e.target.value);
            }}
            type="text"
            placeholder={t("navbar.search")}
            className="bg-transparent outline-none xs:text-lg  text-black  md:text-xl mx-2 w-full"
          />
        </div>
      </form>
      <div className="flex justify-between items-center gap-2 ">
        {/* DarkMode toggle */}
        <label className="xs:mx-0 md:mx-4">
          <CgDarkMode
            title={mode ? "Light Mode" : "Dark Mode"}
            size={30}
            className="text-black dark:text-white"
            onClick={() => {
              dispatch(setDarkMode());
            }}
          />
        </label>

        {/*  Profile DropDown */}
        <div className="dropdown dropdown-end ">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div
              onClick={() => {
                setShowModal(!showModal);
              }}
              className="w-10 rounded-full"
            >
              <img src="https://placeimg.com/80/80/people" alt="user" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className={`${
              showModal ? "" : "hidden"
            } mt-3 p-2 shadow   menu menu-compact dropdown-content border bg-white dark:border-white border-black ${
              lang === "en" ? "" : "!fixed left-2"
            }  dark:bg-black  rounded-box w-52`}
          >
            <li>
              <Link
                to=""
                className="justify-between text-base dark:text-white text-black"
              >
                {t("navbar.profile")}
              </Link>
            </li>
            <div className="collapse ">
              <input className="" type="checkbox" />
              <div className=" collapse-title  text-base dark:text-white text-black !px-4">
                {t("navbar.changeLang")}
              </div>
              <div className="collapse-content">
                {languages.map((lang) => {
                  return (
                    <div
                      onClick={() => {
                        changeLanguage(lang.abbr);
                        i18n.changeLanguage(lang.abbr);
                        dispatch(
                          setLang({
                            lang: lang.abbr,
                            font: lang.font,
                          })
                        );
                      }}
                      key={lang.name}
                      className={`flex items-center dark:text-white text-black py-1 ${
                        lang.current
                          ? "dark:bg-gray-600 bg-gray-300"
                          : "dark:bg-black bg-white"
                      } gap-3 dark:hover:bg-gray-600 hover:bg-gray-400 px-2 cursor-pointer`}
                    >
                      <img
                        src={lang.icon}
                        alt={lang.alt}
                        width={25}
                        height={25}
                      />{" "}
                      {lang.name}
                    </div>
                  );
                })}
              </div>
            </div>

            <li>
              <Link
                onClick={() => dispatch(logout())}
                to="/"
                className="text-base dark:text-white text-black"
              >
                {t("navbar.logout")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
