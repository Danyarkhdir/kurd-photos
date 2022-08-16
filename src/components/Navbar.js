import { MdCamera } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
export default function Navbar() {
  const logedIn = true;
  const links = [
    {
      name: "Explore",
      path: "/",
    },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 ">
      <div className="md:flex md:items-center justify-between bg-primary-400 py-4 md:px-10 px-7">
        <div className="font-bold text-2xl  flex items-center bg-primary-400 ">
          <span className="text-3xl  text-white  pr-1">
            <MdCamera />
          </span>
          <span className="font-extraBold text-white  fontFamily-nunito">
            KrPics
          </span>
          <div className=" text-white  md:hidden flex items-center">
            {logedIn && (
              <img
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=50&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MDkyNTA1OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=50"
                className="mr-4 rounded-full h-9 w-9 cursor-pointer absolute right-16"
                alt="user"
              />
            )}
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 text-white  cursor-pointer md:hidden flex items-center"
            >
              {open ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
          </div>
        </div>

        <ul
          className={`md:flex md:items-center   md:pb-0 pb-12 absolute md:static bg-primary-400 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl cursor-pointer text-white hover:text-gray-800 duration-500 md:my-0 my-7  "
            >
              {link.name}
            </li>
          ))}
          {logedIn ? (
            <img
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=50&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MDkyNTA1OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=50"
              className="ml-8 rounded-full xs:hidden md:block h-9 w-9  "
              alt="user"
            />
          ) : (
            <>
              <Link
                to="login"
                className="bg-sky-800 md:mx-0 mr-1 text-white font-bold  py-2 px-6 rounded md:ml-8 hover:bg-sky-600 duration-500"
              >
                Login
              </Link>
              <Link
                to="register"
                className="bg-green-600 md:mx-0 mr-1 text-white font-bold  py-2 px-6 rounded md:ml-8 hover:bg-green-700 duration-500"
              >
                Get Started
              </Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
