import "../assets/styles/gallery.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { MdFavorite, MdDownload } from "react-icons/md";
export default function Gallery({ images }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const handleUserActions = {
    handleLike: () => {
      setIsLiked(!isLiked);
    },
    handleFavorite: () => {
      setIsSaved(!isSaved);
    },
  };
  return (
    <div className="gallery mt-8">
      {images.map((imageInfo, index) => {
        return (
          <div className="pics " key={index}>
            <Link
              to={`/@${imageInfo.user.username}`}
              className="userProfileLabel"
            >
              <div className="inline-flex  items-center cursor-pointer ">
                <img
                  className="rounded-full border  border-gray-500 mx-3"
                  src={imageInfo.user.profile_image.small}
                  alt="userImage"
                />
                <span className="]  xs:text-lg ">{imageInfo.user.name}</span>
              </div>
            </Link>
            <div
              onMouseLeave={() => setCurrentIndex(-1)}
              onMouseEnter={() => setCurrentIndex(index)}
              className="relative bg-black "
            >
              <img
                className={` cursor-pointer ${
                  currentIndex === index ? "opacityStyle" : "opacity-100"
                }  `}
                src={imageInfo.urls.regular}
                alt={imageInfo.description}
              />
              <Link
                to={`/@${imageInfo.user.username}`}
                className={`${
                  currentIndex === index ? "hoverStyle" : "hidden"
                }  `}
              >
                <div className="inline-flex  items-center cursor-pointer ">
                  <img
                    className="rounded-full border  border-gray-500 mx-3"
                    src={imageInfo.user.profile_image.small}
                    alt="userImage"
                  />
                  <span className="md:text-base text-white xs:text-lg lg:text-lg">
                    {imageInfo.user.name}
                  </span>
                </div>
              </Link>
              {/* className=" " */}
              <div
                className={`${
                  currentIndex === index
                    ? " likeTab    font-bold flex items-center justify-between py-1"
                    : "hidden"
                }  `}
              >
                <div className="flex justify-between items items-center  ">
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
                <div className="flex  ">
                  <IoIosAdd
                    title={`${
                      isSaved ? "Remove from favorites" : "Add to favorites"
                    }`}
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
            <div className="likeTab-1 font-bold flex items-center justify-between py-1 mx-3">
              <div className="flex justify-between items items-center  ">
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
              <div className="flex  ">
                <IoIosAdd
                  title={`${
                    isSaved ? "Remove from favorites" : "Add to favorites"
                  }`}
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
      })}
    </div>
  );
}