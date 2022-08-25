import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { setLang } from "../features/user/langSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LanguageDropdown() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language.lang);
  const { i18n } = useTranslation("common");
  const languages = [
    {
      name: "en",
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-states-flag-icon.png",
      current: lang === "en",
      font: "lato",
    },
    {
      name: "ku",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Flag_of_Kurdistan.png",
      current: lang === "ku",
      font: "alice",
    },
    {
      name: "ar",
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/saudi-arabia-flag-icon.png",
      current: lang === "ar",
      font: "cairo",
    },
  ];

  const [language, setLanguage] = useState(languages);
  const currentLanguage = language.filter((lang) => lang.current === true);
  function changeLanguage(lang) {
    setLanguage(
      language.map((langs) => {
        langs.name === lang ? (langs.current = true) : (langs.current = false);
        return langs;
      })
    );
  }

  return (
    <Menu as="div" className="relative  mx-3">
      <Menu.Button className="w-8 h-8 object-contain   py-2    ">
        <img
          title="Change Language"
          alt={currentLanguage[0].name}
          src={currentLanguage[0].icon}
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" fixed   w-8    border-none focus:outline-none">
          <div className="py-1 rounded-t-sm  rounded-b-md bg-white">
            {language.map((lang) => {
              if (lang.current === false) {
                return (
                  <Menu.Item key={lang.name}>
                    <img
                      onClick={() => {
                        changeLanguage(lang.name);
                        i18n.changeLanguage(lang.name.toLowerCase());
                        dispatch(
                          setLang({
                            lang: lang.name.toLowerCase(),
                            font: lang.font,
                          })
                        );
                      }}
                      className={classNames(
                        "hover:bg-gray-100 cursor-pointer object-contain text-gray-900text-gray-700 block  py-1 px-1 text-sm"
                      )}
                      alt={lang.name}
                      src={lang.icon}
                    />
                  </Menu.Item>
                );
              }
              return null;
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
