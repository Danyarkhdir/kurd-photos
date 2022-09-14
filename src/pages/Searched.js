import { Link, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchPhoto from "../components/SearchPhoto";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import SearchUser from "../components/SearchUser";
import Footer from "../components/Footer";
export default function Searched() {
  const { t } = useTranslation("common");
  const { searched } = useParams("searched");
  const { pathname } = useLocation();
  const cleanPathname = decodeURIComponent(pathname).replaceAll(" ", "%20");
  const path = searched.replaceAll(" ", "%20");
  return (
    <>
      <Navbar />
      <div className=" md:mt-16  pb-10 dark:bg-black bg-white">
        <h2 className="font-bold px-4 dark:text-white text-black pt-4 text-3xl">
          {t("searched.resultsFor")} '{searched}'
        </h2>
        <div className="border-b dark:border-white border-black">
          <Link
            to="photos"
            className={`inline-flex pb-2  dark:hover:text-white hover:text-black font-bold text-xl mx-2 px-2  mt-10 ${
              cleanPathname !== "/search=" + path + "/users"
                ? "dark:text-white text-black border-b-2 dark:border-white border-black"
                : " text-gray-400"
            } `}
          >
            {t("searched.photos")}
          </Link>
          <Link
            to="users"
            className={`inline-flex pb-2 hover:text-black dark:hover:text-white font-bold text-xl mx-2 px-2  mt-10 ${
              cleanPathname === "/search=" + path + "/users"
                ? "dark:text-white text-black border-b-2 dark:border-white border-black"
                : " text-gray-400"
            } `}
          >
            {t("searched.users")}
          </Link>
        </div>
        <Routes>
          <Route path="*" element={<SearchPhoto searched={searched} />} />
          <Route path="users" element={<SearchUser searched={searched} />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
