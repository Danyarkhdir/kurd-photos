import axios from "axios";
import { Link, useParams, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import UserPhotos from "../components/UserPhotos";
import UserLikes from "../components/UserLikes";
import Loading from "../components/Loading";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import NotFound from "./NotFound";

export default function UserProfile() {
  const { t } = useTranslation("common");
  const username = useParams("username");
  const location = useLocation();
  const [user, setUser] = useState([]);
  const [profileImage, setProfileImage] = useState("");

  // on first render scroll to the top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // fetch user informations
  useEffect(() => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

    axios
      .get(`${apiRoot}/users/${username.username}?client_id=${accessKey}`)
      .then((response) => {
        setUser(response.data);
        setProfileImage(response.data.profile_image.large);
      })
      .catch(() => {
        setUser(null);
      });
  }, [username]);

  if (!user) {
    return <NotFound text="User" />;
  }
  return (
    <>
      {user.profile_image ? (
        <div className="pb-10">
          <Navbar />
          <div className=" md:mt-16  dark:bg-blackflex flex-col   w-full text-xl ">
            <Profile user={user} profileImage={profileImage} />
            <div className="w-full pb-20  dark:bg-black bg-white divide-y dark:divide-white divide-black ">
              <div className=" flex">
                <Link
                  to={`/@${username.username}`}
                  className={`mx-3 px-3 pb-3 ${
                    location.pathname === `/@${username.username}`
                      ? "border-b-2 dark:border-white border-black dark:text-white text-black"
                      : "text-gray-500"
                  }  dark:hover:text-white hover:text-black  cursor-pointer `}
                >
                  {t("userProfile.photos")}
                </Link>

                <Link
                  to={`/@${username.username}/likes`}
                  className={`xs:mx-20 md:mx-36 px-3 pb-3 cursor-pointer ${
                    location.pathname === `/@${username.username}/likes`
                      ? "border-b-2 dark:border-white border-black dark:text-white text-black"
                      : "text-gray-500"
                  } dark:hover:text-white hover:text-black`}
                >
                  {t("userProfile.likes")}
                </Link>
              </div>
              <Routes>
                <Route
                  path="/"
                  element={<UserPhotos username={username.username} />}
                />
                <Route
                  path={`/likes`}
                  element={<UserLikes username={username.username} />}
                />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <div className={"block w-full h-screen "}>
          <Loading />
        </div>
      )}
    </>
  );
}
