import { AiOutlineSearch } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function SearchBar() {
  const navigate = useNavigate();
  const [searched, setSearched] = useState("");
  const { t } = useTranslation("common");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/search=${searched}/photos`);
      }}
      className="w-7/12 xs:hidden md:block "
    >
      <div className="flex  items-center justify-around   md:mx-10 bg-gray-200  px-4 hover:bg-white  rounded-3xl">
        <button type="submit" className="bg-transparent  w-1/12">
          <Link to={`/search=${searched}/photos`}>
            <AiOutlineSearch
              size={24}
              className="text-gray-500 hover:text-black"
            />
          </Link>
        </button>
        <input
          onChange={(e) => {
            setSearched(e.target.value);
          }}
          placeholder={t("navbar.searchPlaceHolder")}
          type="search"
          className="bg-transparent w-11/12 md:px-2 lg:px-1  outline-none py-2"
        />
      </div>
    </form>
  );
}
