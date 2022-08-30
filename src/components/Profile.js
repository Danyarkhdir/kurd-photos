import { useState } from "react";
import { RiUserAddFill, RiUserFollowFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
export default function Profile({ user, profileImage }) {
  const [followed, setFollowed] = useState(false);

  const handleFollow = () => {
    setFollowed(!followed);
  };
  return (
    <div className="bg-white w-full xs:px-4 md:px-0  md:flex justify-center md:h-[350px] xs:h-[600px]">
      <div className="md:w-1/4 flex items-center pt-12 flex-col">
        {profileImage && (
          <img
            className="rounded-full mx-auto h-[150px]"
            src={profileImage}
            alt="profile"
          />
        )}
      </div>
      <div className="md:w-2/4  pt-14 px-1 flex flex-col">
        <div className="flex items-center justify-between  ">
          <span className="xs:text-2xl sm:text-3xl md:text-2xl xl:text-3xl font-bold">
            {user.name}
          </span>
          {followed ? (
            <span
              onClick={handleFollow}
              className="flex items-center xs:mx-10 sm:mx-20 self-end rounded-md border border-gray-500 hover:border-black p-1  px-4  "
            >
              <RiUserFollowFill
                title="Unfollow"
                className="text-gray-500 hover:text-black"
                size={25}
              />
            </span>
          ) : (
            <span
              onClick={handleFollow}
              className="flex items-center xs:mx-10 sm:mx-20 md:mx-10 self-end rounded-md border border-gray-500 hover:border-black p-1  px-4  "
            >
              <RiUserAddFill
                title="Follow"
                className="text-gray-500 hover:text-black"
                size={25}
              />
            </span>
          )}
        </div>

        {user.bio ? (
          <p className="text-lg py-4">{user.bio}</p>
        ) : (
          <p className="text-lg py-4">
            Download free, beautiful high-quality photos curated by{" "}
            {user.first_name}.
          </p>
        )}
        {user.location && (
          <p className="text-lg pt-1 flex items-center text-gray-500">
            <MdLocationOn className="inline " size={20} />
            <span className="mx-2">{user.location}</span>
          </p>
        )}
        {user.instagram_username && (
          <p className="text-lg pt-1 flex items-center text-gray-500">
            <AiOutlineInstagram className="inline " size={20} />
            <span className="mx-2">{user.instagram_username}</span>
          </p>
        )}
      </div>
    </div>
  );
}
