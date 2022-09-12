import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import kurdish from "./translations/Ku/kurdish.json";
import english from "./translations/En/english.json";
import arabic from "./translations/Ar/arabic.json";
import kuTopicsDesc from "./translations/Ku/topicsDesc.json";
import enTopicsDesc from "./translations/En/topicsDesc.json";
import arTopicsDesc from "./translations/Ar/topicsDesc.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    common: english,
    topicsdesc: enTopicsDesc, // 'common' is our custom namespace
  },
  ku: {
    common: kurdish,
    topicsdesc: kuTopicsDesc, // 'common' is our custom namespace
  },
  ar: {
    common: arabic,
    topicsdesc: arTopicsDesc, // 'common' is our custom namespace
  },
};

const language = localStorage.getItem("lang") || "en";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: language, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
