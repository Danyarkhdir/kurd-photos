import { MdCamera } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { showModal } from "../features/modal/profileSlice";
import ProfileModal from "./ProfileModal";
export default function Navbar() {
  const auth = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();
  const links = [
    {
      name: "Explore",
      path: "/",
    },
  ];
  return (
    <>
      <div className=" w-full xs:relative md:fixed top-0 left-0 z-50 ">
        <div className="md:flex md:items-center justify-between bg-primary-400 py-4 md:px-10 px-7">
          <div className="font-bold text-2xl  flex items-center bg-primary-400 ">
            <span className="text-3xl  text-white  pr-1">
              <MdCamera />
            </span>
            <span className="font-extraBold text-white  fontFamily-nunito">
              KrPics
            </span>
            <div className=" text-white  md:hidden flex items-center">
              {auth ? (
                <img
                  onClick={() => dispatch(showModal())}
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=50&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MDkyNTA1OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=50"
                  className=" rounded-full h-9 w-9 cursor-pointer absolute right-8"
                  alt="user"
                />
              ) : (
                <img
                  onClick={() => dispatch(showModal())}
                  src="https://goodsamjc.org/wp-content/uploads/2020/01/16196015_10154888128487744_6901111466535510271_n.png"
                  className="rounded-full h-9 w-9 cursor-pointer absolute right-8 "
                  alt="user"
                />
              )}
            </div>
          </div>

          <ul
            className={`md:flex md:items-center  xs:hidden  md:pb-0 pb-12 absolute md:static bg-primary-400 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 `}
          >
            {links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-xl cursor-pointer text-white hover:text-gray-800 duration-500 md:my-0 my-7  "
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
            {auth ? (
              <>
                <img
                  onClick={() => dispatch(showModal())}
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=50&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MDkyNTA1OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=50"
                  className="cursor-pointer ml-8 rounded-full xs:hidden md:block h-9 w-9  "
                  alt="user"
                />
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-sky-800 md:mx-0 mr-1 text-white font-bold  py-2 px-6 rounded md:ml-8 hover:bg-sky-600 duration-500"
                >
                  Login
                </Link>
                <Link
                  to="register"
                  className="bg-green-600 md:mx-0 mr-1 text-white font-bold  py-2 px-6 rounded md:ml-8 hover:bg-green-700"
                >
                  Get Started
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
      <ProfileModal />
    </>
  );
}
