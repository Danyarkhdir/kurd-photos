import { AiOutlineSearch } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function SmSearchBar() {
  const navigate = useNavigate();
  const [searched, setSearched] = useState("");
  const { t } = useTranslation("common");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/search=${searched}/photos`);
      }}
      className="w-7/12 md:hidden "
    >
      <div className="flex  items-center justify-around xs:mx-5 font-light xs:text-base sm:text-lg   bg-gray-200  px-2 hover:bg-white  rounded-3xl">
        <button
          type="submit"
          className=" bg-transparent  xs:w-2/12 sm:w-1/12  xs:mx-1 sm:mx-0"
        >
          <Link to={`/search=${searched}/photos`}>
            <AiOutlineSearch
              size={22}
              className="text-gray-500 hover:text-black"
            />
          </Link>
        </button>
        <input
          onChange={(e) => {
            setSearched(e.target.value);
          }}
          placeholder={t("navbar.search")}
          type="search"
          className=" bg-transparent xs:w-10/12 sm:11/12  onChange={}   outline-none py-1 xs:px-3 sm:px-1"
        />
      </div>
    </form>
  );
}
