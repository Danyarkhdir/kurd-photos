import { AiFillCamera } from "react-icons/ai";
import Button from "./Button";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { useState } from "react";
export default function Navbar() {
  const links = [
    {
      name: "Explore",
      path: "/",
    },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 ">
      <div className="md:flex md:items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] ">
          <span className="text-3xl  text-primary-400 pr-1">
            <AiFillCamera />
          </span>
          Kurd Photos
          <div
            onClick={() => setOpen(!open)}
            className="text-4xl absolute right-8  cursor-pointer md:hidden "
          >
            {open ? <ImMenu4 /> : <ImMenu3 />}
          </div>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl cursor-pointer text-primary-400 hover:text-primary-200 duration-500 md:my-0 my-7  "
            >
              {link.name}
            </li>
          ))}
          <Button>Log in</Button>
          <Button>Get Started</Button>
        </ul>
      </div>
    </div>
  );
}
