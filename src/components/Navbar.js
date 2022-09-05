import { BiSearchAlt } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setLang } from "../features/user/langSlice";
import { logout } from "../features/user/authSlice";
export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searched, setSearched] = useState("");
  const lang = useSelector((state) => state.language.lang);
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
  return (
    <div className="navbar md:fixed top-0 z-50 bg-base-100 ">
      <div className="flex-1">
        <Link to="" className="btn btn-ghost normal-case text-xl">
          KrPics
        </Link>
      </div>
      <form
        className="form-control  flex-1 "
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/search=${searched}/photos`);
        }}
      >
        <div className="flex w-full input-bordered input items-center">
          <Link to={`/search=${searched}/photos`}>
            <BiSearchAlt size={22} className="cursor-pointer" />
          </Link>
          <input
            onChange={(e) => {
              setSearched(e.target.value);
            }}
            type="text"
            placeholder={t("navbar.search")}
            className="bg-transparent outline-none text-xl mx-2 w-full"
          />
        </div>
      </form>
      <div className="flex-1 justify-end gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="user" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className={`mt-3 p-2 shadow   menu menu-compact dropdown-content ${
              lang === "en" ? "" : "!fixed left-2"
            }  bg-base-100 rounded-box w-52`}
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
                      className={`flex items-center ${
                        lang.current ? "bg-base-300" : "bg-base-100"
                      } gap-3 hover:bg-base-200 px-2 cursor-pointer`}
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
