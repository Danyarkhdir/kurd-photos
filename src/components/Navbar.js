import { BiSearchAlt } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setLang } from "../features/user/langSlice";
import { logout } from "../features/user/authSlice";
import { MdCamera } from "react-icons/md";
import { setDarkMode } from "../features/user/darkModeSlice";
export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searched, setSearched] = useState("");
  const lang = useSelector((state) => state.language.lang);
  const [showModal, setShowModal] = useState(false);
  const { t, i18n } = useTranslation("common");
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
    const cleanSearch = searched.replaceAll(/[^a-zA-Z0-9 ]/g, "");
    if (searched) navigate(`/search=${cleanSearch}/photos`);
  }
  return (
    <div className="navbar md:fixed top-0 z-50 dark:text-white bg-white dark:bg-black  ">
      <div className="">
        <Link to="" className=" dark:text-white text-black  ">
          <MdCamera size={"40px"} />
        </Link>
      </div>
      <form
        className="form-control  flex-1 xs:mx-3 md:mx-14  lg:mx-16 xl:mx-20"
        onSubmit={(e) => {
          handleSearch(e);
        }}
      >
        <div className="flex w-full input-bordered input h-10 bg-white   items-center px-4 rounded-3xl">
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
        <label className="swap swap-rotate mx-4">
          <input type="checkbox" />
          <svg
            onClick={() => {
              dispatch(setDarkMode());
            }}
            className={`swap-off fill-current w-8 h-8`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            onClick={() => {
              dispatch(setDarkMode());
            }}
            className={`swap-on fill-current w-8 h-8`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
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
              <Link to="" className="justify-between text-base">
                {t("navbar.profile")}
              </Link>
            </li>
            <div className="collapse ">
              <input className="" type="checkbox" />
              <div className=" collapse-title  text-base !px-4">
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
                      className={`flex items-center dark:text-white py-2 ${
                        lang.current
                          ? "dark:bg-gray-600 bg-gray-400"
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
                className="text-base"
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
