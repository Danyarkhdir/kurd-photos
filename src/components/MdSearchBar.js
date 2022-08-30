import { AiOutlineSearch } from "react-icons/ai";
import { useTranslation } from "react-i18next";
export default function SearchBar() {
  const { t } = useTranslation("common");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="w-7/12 xs:hidden md:block "
    >
      <div className="flex  items-center justify-around   md:mx-10 bg-gray-200  px-4 hover:bg-white  rounded-3xl">
        <button type="submit" className="bg-transparent  w-1/12">
          <AiOutlineSearch
            size={24}
            className="text-gray-500 hover:text-black"
          />
        </button>
        <input
          placeholder={t("navbar.searchPlaceHolder")}
          type="search"
          className="bg-transparent w-11/12 md:px-2 lg:px-1  outline-none py-2"
        />
      </div>
    </form>
  );
}
