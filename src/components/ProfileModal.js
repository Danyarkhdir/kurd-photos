import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showModal } from "../features/modal/profileSlice";
import { logout } from "../features/user/authSlice";
import { FiLogOut, FiLogIn } from "react-icons/fi";
export default function Modal() {
  const show = useSelector((state) => state.profileModal.show);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      {/* <button type="button" onClick={() => setShowModal(true)}>
        Open regular modal
      </button> */}
      {show ? (
        <>
          <div
            onClick={() => dispatch(showModal())}
            className="z-20 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none"
          >
            <div className="fixed w-44 xs:right-12 xs:top-12 xs:mt-1 md:right-14 md:top-14  mb-6  mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative divide-y divide-gray-300  text-lg py-3 flex-auto">
                  <div>
                    <Link
                      to="/explore"
                      className="block my-1 hover:bg-slate-300 md:hidden py-1 pl-4 cursor-pointer"
                    >
                      Explore
                    </Link>
                    {auth && (
                      <Link
                        to="/profile"
                        className="block my-1 hover:bg-slate-300  py-1 pl-4 cursor-pointer"
                      >
                        Profile
                      </Link>
                    )}
                  </div>

                  {/* logout,login and register botton */}
                  <div className="pt-2">
                    {auth ? (
                      <Link
                        to="/"
                        onClick={() => dispatch(logout())}
                        type="button"
                        className="flex items-center   pl-4 cursor-pointer hover:text-blue-300"
                      >
                        Logout <FiLogOut className="ml-4" size={"18px"} />
                      </Link>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="flex items-center my-2  pl-4 cursor-pointer hover:text-blue-300"
                        >
                          Login
                          <FiLogIn className="ml-4" size={"18px"} />
                        </Link>
                        <Link
                          to="/register"
                          className="flex items-center my-2 pl-4 cursor-pointer hover:text-green-500"
                        >
                          Get Started
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
