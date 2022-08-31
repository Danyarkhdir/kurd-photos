import { Link, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchPhoto from "../components/SearchPhoto";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import SearchUser from "../components/SearchUser";
export default function Searched() {
  const { t } = useTranslation("common");
  const { searched } = useParams("searched");
  const { pathname } = useLocation();
  return (
    <>
      <Navbar />
      <div className="xs:mt-2 md:mt-20  pb-10 ">
        <h2 className="font-bold px-4 pt-2 text-3xl">
          {t("searched.resultsFor")} '{searched}'
        </h2>
        <div className="border-b border-gray-300">
          <Link
            to="photos"
            className={`inline-flex pb-2  hover:text-black font-bold text-xl mx-2 px-2  mt-10 ${
              pathname === "/search=" + searched + "/photos"
                ? "text-black border-b-2 border-black"
                : " text-gray-400"
            } `}
          >
            {t("searched.photos")}
          </Link>
          <Link
            to="users"
            className={`inline-flex pb-2 hover:text-black font-bold text-xl mx-2 px-2  mt-10 ${
              pathname === "/search=" + searched + "/users"
                ? "text-black border-b-2 border-black"
                : " text-gray-400"
            } `}
          >
            {t("searched.users")}
          </Link>
        </div>
        <Routes>
          <Route path="photos" element={<SearchPhoto searched={searched} />} />
          <Route path="users" element={<SearchUser searched={searched} />} />
        </Routes>
      </div>
    </>
  );
}
