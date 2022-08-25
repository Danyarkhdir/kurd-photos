import Imgix, { Picture, Source } from "react-imgix";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { MdFavoriteBorder, MdFavorite, MdDownload } from "react-icons/md";
import Loading from "./Loading";

export default function Post({ postInfo }) {
  const [userData, setUserData] = useState({
    ...postInfo,
    isLiked: false,
    isFavorite: false,
  });
  const commonProps = {
    src: userData.urls.regular,
    imgixParams: {
      fit: "crop",
      crop: "faces",
    },
  };

  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleUserActions = {
    handleLike: () => {
      setUserData({
        ...userData,
        isLiked: !isLiked,
      });
      setIsLiked(!isLiked);
    },
    handleFavorite: () => {
      setUserData({
        ...userData,
        isFavorite: !isSaved,
      });
      setIsSaved(!isSaved);
    },
  };
  return (
    <>
      <div className={`${loaded ? "hidden" : "visible bg-black h-screen"}`}>
        <Loading />
      </div>
      <div className={`${loaded ? "block md:rounded-b-sm" : "hidden "}`}>
        <Link to={`/profile/${userData.user.id}`}>
          <div className="mt-4 mb-3 inline-flex items-center cursor-pointer ">
            <img
              className="rounded-full border border-gray-500 mx-3"
              src={userData.user.profile_image.small}
              alt="userImage"
              onLoad={() => setLoaded(true)}
            />
            <span className="md:text-base xs:text-lg lg:text-lg">
              {userData.user.name}
            </span>
          </div>
        </Link>
        <Picture>
          <Source
            {...commonProps}
            height={1500}
            htmlAttributes={{ media: "(min-width: 320px)" }}
          />
          <Imgix className="cursor-zoom-in" src={userData.urls.regular} />
        </Picture>
        <div className="flex items-center justify-between mt-1 py-1 ">
          <div className="inline-flex items-center mx-3 ">
            {userData.isLiked ? (
              <MdFavorite
                title="Unlike"
                onClick={() => handleUserActions.handleLike()}
                className="mx-3 rounded-lg cursor-pointer bg-white p-1"
                size={35}
              />
            ) : (
              <MdFavoriteBorder
                title="Like"
                onClick={() => handleUserActions.handleLike()}
                className="mx-3 rounded-lg cursor-pointer bg-white p-1"
                size={35}
              />
            )}
            {userData.isFavorite ? (
              <AiFillStar
                title="Remove from favorites"
                onClick={() => handleUserActions.handleFavorite()}
                className="mx-3 rounded-lg cursor-pointer bg-white p-1"
                size={35}
              />
            ) : (
              <AiOutlineStar
                title="Add to favorites"
                onClick={() => handleUserActions.handleFavorite()}
                className="mx-3 rounded-lg cursor-pointer bg-white p-1"
                size={35}
              />
            )}
          </div>
          <MdDownload
            title="Download"
            className="mx-5 rounded-lg cursor-pointer bg-white p-1"
            size={35}
          />
        </div>
      </div>
    </>
  );
}
