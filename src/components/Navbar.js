import { MdCamera } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { showModal } from "../features/modal/profileSlice";
import ProfileModal from "./ProfileModal";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";
export default function Navbar() {
  const { t } = useTranslation("common");
  const auth = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  return (
    <>
      <div className=" w-full xs:relative md:fixed top-0 left-0 z-40 overflow-hidden  ">
        <div className="md:flex md:items-center justify-between bg-primary-400 xs:pb-4 xs:pt-4  md:py-4 md:px-10 px-7">
          <div className="font-bold text-2xl  flex justify-between items-center bg-primary-400 ">
            {/* left side of navbar */}
            <div className="text-3xl flex items-center   text-white  ">
              <MdCamera />
              <span className="font-extraBold text-white px-1  fontFamily-nunito">
                KrPics
              </span>
            </div>

            {/* right side of navbar */}
            <div className=" text-white  md:hidden flex items-center">
              {auth ? (
                <img
                  onClick={() => dispatch(showModal())}
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=50&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MDkyNTA1OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=50"
                  className=" rounded-full h-9 w-9 cursor-pointer  "
                  alt="user"
                />
              ) : (
                <img
                  onClick={() => dispatch(showModal())}
                  src="https://goodsamjc.org/wp-content/uploads/2020/01/16196015_10154888128487744_6901111466535510271_n.png"
                  className="rounded-full h-9 w-9 cursor-pointer  "
                  alt="user"
                />
              )}
              <LanguageDropdown />
            </div>
          </div>

          <ul
            className={`md:flex md:items-center overflow-hidden  xs:hidden  md:pb-0 pb-12 absolute md:static bg-primary-400 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0  transition-all duration-500 `}
          >
            {auth ? (
              <>
                <img
                  onClick={() => dispatch(showModal())}
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=50&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MDkyNTA1OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=50"
                  className="cursor-pointer mx-4 rounded-full xs:hidden md:block h-9 w-9  "
                  alt="user"
                />
                <LanguageDropdown />
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-sky-800 mx-2 text-white font-bold  py-2 px-6 rounded  hover:bg-sky-600 duration-500"
                >
                  {t("navbar.login")}
                </Link>
                <Link
                  to="register"
                  className="bg-green-600  text-white font-bold  py-2 px-6 rounded mx-2 hover:bg-green-700"
                >
                  {t("navbar.getStarted")}
                </Link>
                <LanguageDropdown />
              </>
            )}
          </ul>
        </div>
      </div>
      <ProfileModal />
    </>
  );
}
