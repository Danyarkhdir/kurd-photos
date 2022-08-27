import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { MdFavorite, MdDownload } from "react-icons/md";

export default function Image({ postInfo }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleUserActions = {
    handleLike: () => {
      setIsLiked(!isLiked);
    },
    handleFavorite: () => {
      setIsSaved(!isSaved);
    },
  };
  return (
    <div>
      <Link to={`/profile/${postInfo.user.id}`}>
        <div className="mt-6 mb-3 inline-flex items-center cursor-pointer ">
          <img
            className="rounded-full border border-gray-500 mx-3"
            src={postInfo.user.profile_image.small}
            alt="userImage"
          />
          <span className="md:text-base xs:text-lg lg:text-lg">
            {postInfo.user.name}
          </span>
        </div>
      </Link>
      <img
        alt={postInfo.description}
        className="cursor-zoom-in sm:h-[500px] md:h-[600px] lg:h-[700px] sm:object-cover w-full"
        src={postInfo.urls.regular}
      />

      <div className="flex items-center justify-between  py-1 ">
        <div className="flex items items-center mx-3 ">
          <>
            <MdFavorite
              title={isLiked ? "Unlike" : "Like"}
              onClick={() => {
                handleUserActions.handleLike();
              }}
              className={`rounded-lg cursor-pointer mt-1  border p-1  ${
                isLiked
                  ? "bg-red-600 border-red-600 hover:border-red-700 hover:bg-red-700 text-white"
                  : " bg-white  text-gray-400 hover:text-gray-900 border-gray-400 hover:border-gray-500"
              }`}
              size={35}
            />
          </>
        </div>
        <div className="flex mx-3">
          <IoIosAdd
            title={`${isSaved ? "Remove from favorites" : "Add to favorites"}`}
            onClick={() => handleUserActions.handleFavorite()}
            className={`mx-3 mt-1 rounded-lg cursor-pointer p-1 border font-bold ${
              isSaved
                ? "bg-green-500  hover:bg-green-600 border-green-500  hover:border-green-600 text-white"
                : " bg-white   text-gray-400 hover:text-gray-900 border-gray-400 hover:border-gray-500"
            }`}
            size={35}
          />
          <MdDownload
            title="Download"
            className=" rounded-lg mt-1 cursor-pointer bg-white p-1 border  text-gray-400 hover:text-gray-900 border-gray-400 hover:border-gray-500"
            size={35}
          />
        </div>
      </div>
    </div>
  );
}
