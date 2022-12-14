import axios from "axios";
import { useState } from "react";
import Gallery from "./Gallery";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

export default function UserLikes({ username }) {
  const [userLiked, setUserLiked] = useState([]);
  const [userLikedLength, setUserLikedLength] = useState(0);
  const [page, setPage] = useState({
    currentPage: 1,
    userLikedCurrentLength: userLiked.length,
  });

  //   fetch current user's photos
  const fetchMore = (currentPage = 1) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

    axios
      .get(
        `${apiRoot}/users/${username}/likes?client_id=${accessKey}&per_page=30&page=${currentPage}`
      )
      .then((response) => {
        setUserLikedLength(userLiked.length);
        setUserLiked([...userLiked, ...response.data]);
        setPage({
          currentPage: currentPage + 1,
          userLikedCurrentLength: userLiked.length,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (page.currentPage === 1) {
    window.scrollTo(0, 0);
    fetchMore();
  }

  // if user didn't like any photos
  if (userLiked.length === 0) {
    return (
      <h1 className=" flex items-center dark:text-white text-black justify-center h-screen px-2 xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        No likes yet!
      </h1>
    );
  }
  return (
    <InfiniteScroll
      dataLength={userLikedLength}
      next={() => fetchMore(page.currentPage)}
      hasMore={userLiked.length > page.userLikedCurrentLength ? true : false}
      loader={<Loading />}
    >
      <Gallery images={userLiked} />
    </InfiniteScroll>
  );
}
