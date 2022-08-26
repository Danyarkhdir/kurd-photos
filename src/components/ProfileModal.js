import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showModal } from "../features/modal/profileSlice";
import { logout } from "../features/user/authSlice";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { useTranslation } from "react-i18next";
export default function Modal() {
  const { t } = useTranslation("common");
  const show = useSelector((state) => state.profileModal.show);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const language = useSelector((state) => state.language.lang);
  const style = `${
    language === "en"
      ? "fixed w-44 xs:right-24 xs:top-14 xs:mt-1 md:right-32 md:top-14  mb-6  mx-auto max-w-3xl"
      : "fixed w-44 xs:left-24 xs:top-14 xs:mt-1 md:left-32 md:top-14  mb-6  mx-auto max-w-3xl "
  }`;

  return (
    <>
      {show ? (
        <>
          <div
            onClick={() => dispatch(showModal())}
            className="z-50 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed  inset-0  outline-none focus:outline-none"
          >
            <div className={style}>
              {/*content*/}
              <div className=" border-0 rounded-b-lg shadow-lg  z-50 shadow-white  flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div
                  className={`${
                    auth && "divide-y"
                  } divide-gray-300 z-50  text-lg py-3  flex-auto`}
                >
                  <div>
                    {auth && (
                      <Link
                        to="/profile"
                        className="block my-1 hover:bg-slate-300  py-1 px-2  cursor-pointer"
                      >
                        {t("profileModal.profile")}
                      </Link>
                    )}
                  </div>

                  {/* logout,login and register botton */}
                  <div>
                    {auth ? (
                      <Link
                        to="/"
                        onClick={() => dispatch(logout())}
                        type="button"
                        className="flex items-center  px-2  cursor-pointer hover:text-blue-300"
                      >
                        {t("profileModal.logout")}{" "}
                        <BiLogOut className="mx-4" size={"18px"} />
                      </Link>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="flex items-center px-2 my-2   cursor-pointer hover:text-blue-300"
                        >
                          {t("profileModal.login")}
                          <BiLogIn className="mx-4" size={"18px"} />
                        </Link>
                        <Link
                          to="/register"
                          className="flex items-center my-2 px-2 cursor-pointer hover:text-green-500"
                        >
                          {t("profileModal.getStarted")}
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
