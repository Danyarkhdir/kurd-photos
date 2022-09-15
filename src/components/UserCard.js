import { useState } from "react";
import { RiUserFollowFill, RiUserAddFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function UserCard({ user }) {
  const navigate = useNavigate();
  const { t } = useTranslation("common");
  const [followed, setFollowed] = useState(false);
  const handleFollow = () => {
    setFollowed(!followed);
  };
  return (
    <div className="border border-gray-400 dark:hover:border-white hover:border-black rounded p-4 ">
      <div>
        {/* Headaer */}
        <div className="flex items-center justify-between ">
          <div
            onClick={() => {
              navigate(`/@${user.username}`);
            }}
            className="flex items-center cursor-pointer justify-between"
          >
            <img
              className="rounded-full"
              src={user.profile_image.medium}
              alt="user"
            />
            <div className="flex flex-col items-start justify-center mx-4">
              <span className="font-bold text-xl dark:text-white text-black">
                {user.name}
              </span>
              <span className="text-gray-400 ">@{user.username}</span>
            </div>
          </div>
          <div>
            {followed ? (
              <span
                onClick={handleFollow}
                className="flex items-center  self-end rounded-md border border-gray-500 dark:hover:border-white hover:border-black  p-1  px-4  "
              >
                <RiUserFollowFill
                  title="Unfollow"
                  className="text-gray-500 dark:hover:text-white hover:text-black"
                  size={25}
                />
              </span>
            ) : (
              <span
                onClick={handleFollow}
                className="flex items-center   self-end rounded-md border border-gray-500 dark:hover:border-white hover:border-black p-1  px-4  "
              >
                <RiUserAddFill
                  title="Follow"
                  className="text-gray-500 dark:hover:text-white hover:text-black"
                  size={25}
                />
              </span>
            )}
          </div>
        </div>
        {/* user Photos */}
        {user.photos.length !== 0 ? (
          <div className="grid grid-cols-3 gap-2 mt-4">
            {user.photos.map((photo) => {
              return (
                <img
                  onClick={() => {
                    navigate(`/@${user.username}`);
                  }}
                  className="object-cover h-[100px] w-full"
                  key={photo.id}
                  src={photo.urls.small}
                  alt="user uploaded"
                />
              );
            })}
          </div>
        ) : (
          // if user has no photos
          <h2 className="h-[100px]  w-full flex items-center justify-center text-xl  ">
            {" "}
            No Posts yet
          </h2>
        )}

        {/* Link to user profile */}
        <Link
          className="block w-full text-center mt-4 text-gray-400 dark:hover:text-white hover:text-black dark:hover:border-white hover:border-black border py-1 border-gray-400 rounded"
          to={`/@${user.username}`}
        >
          {t("userCard.viewProfile")}
        </Link>
      </div>
    </div>
  );
}
