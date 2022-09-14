import { Link, useParams, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import UserPhotos from "../components/UserPhotos";
import UserLikes from "../components/UserLikes";
import { useTranslation } from "react-i18next";
import UserFavorites from "../components/UserFavorites";
import Footer from "../components/Footer";
import PageNotFound from "./PageNotFound";

export default function MyProfile() {
  const { t } = useTranslation("common");
  const username = useParams("username");
  const location = useLocation();
  const user = [];

  const myData = {
    name: "Mera Muhsin",
    bio: "Hello Everyone..... Ths is my bio",
    location: "Erbil, Kurdistan",
    instagram_username: "mera.kurdi",
  };

  // on first render scroll to the top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!user) {
    return "User Not found";
  }
  return (
    <div className="pb-10">
      <Navbar />
      <div className=" md:mt-16  dark:bg-blackflex flex-col   w-full text-xl ">
        <Profile
          user={myData}
          profileImage={"https://placeimg.com/500/500/people"}
        />
        <div className="w-full pb-20  dark:bg-black bg-white divide-y dark:divide-white divide-black ">
          <div className=" flex">
            <Link
              to=""
              className={`mx-3 px-3 pb-3 ${
                location.pathname === `/profile`
                  ? "border-b-2 dark:border-white border-black dark:text-white text-black"
                  : "text-gray-500"
              }  dark:hover:text-white hover:text-black  cursor-pointer `}
            >
              {t("userProfile.photos")}
            </Link>

            <Link
              to="likes"
              className={`xs:mx-20 md:mx-36 px-3 pb-3 cursor-pointer ${
                location.pathname === `/profile/likes`
                  ? "border-b-2 dark:border-white border-black dark:text-white text-black"
                  : "text-gray-500"
              } dark:hover:text-white hover:text-black`}
            >
              {t("userProfile.likes")}
            </Link>
            <Link
              to="favorites"
              className={`mx-3 px-3 pb-3 cursor-pointer ${
                location.pathname === `/profile/favorites`
                  ? "border-b-2 dark:border-white border-black dark:text-white text-black"
                  : "text-gray-500"
              } dark:hover:text-white hover:text-black`}
            >
              favorites
            </Link>
          </div>
          <Routes>
            <Route
              path="*"
              element={<UserPhotos username={username.username} />}
            />
            <Route
              path={`/likes`}
              element={<UserLikes username={username.username} />}
            />
            <Route
              path={`/favorites`}
              element={<UserFavorites username={username.username} />}
            />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}
