import { Link, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchPhoto from "../components/SearchPhoto";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Searched() {
  const { t } = useTranslation("common");
  const { searched } = useParams("searched");
  return (
    <>
      <Navbar />
      <div className="xs:mt-2 md:mt-20 ">
        <h2 className="font-bold px-4 pt-2 text-3xl">
          {t("searched.resultsFor")} '{searched}'
        </h2>
        <Link
          to="photos"
          className="inline-flex font-bold text-2xl mx-2 px-2  mt-10 border-b-2 border-black"
        >
          {t("searched.photos")}
        </Link>
        <Routes>
          <Route path="photos" element={<SearchPhoto />} />
        </Routes>
      </div>
    </>
  );
}
