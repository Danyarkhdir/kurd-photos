import axios from "axios";
import { Link, useParams, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import UserPhotos from "../components/UserPhotos";
import UserLikes from "../components/UserLikes";
import Loading from "../components/Loading";
import { useTranslation } from "react-i18next";

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
    return "User Not found";
  }
  return (
    <>
      {user.profile_image ? (
        <div>
          <Navbar />
          <div className=" md:mt-16  bg-base-100 flex flex-col   w-full text-xl ">
            <Profile user={user} profileImage={profileImage} />
            <div className="w-full pb-20  bg-base-100 divide-y ">
              <div className=" flex">
                <Link
                  to={`/@${username.username}`}
                  className={`mx-3 px-3 pb-3 ${
                    location.pathname === `/@${username.username}`
                      ? "border-b-2 border-white text-white"
                      : "text-gray-500"
                  }  hover:text-white  cursor-pointer `}
                >
                  {t("userProfile.photos")}
                </Link>

                <Link
                  to={`/@${username.username}/likes`}
                  className={`xs:mx-20 md:mx-36 px-3 cursor-pointer ${
                    location.pathname === `/@${username.username}/likes`
                      ? "border-b-2 border-white text-white"
                      : "text-gray-500"
                  } hover:text-white`}
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
        </div>
      ) : (
        <div className={"block w-full h-screen "}>
          <Loading />
        </div>
      )}
    </>
  );
}
