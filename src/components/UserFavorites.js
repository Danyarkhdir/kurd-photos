import axios from "axios";
import { useState } from "react";
import Gallery from "./Gallery";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

export default function UserFavorites({ username }) {
  const [userFavorited, setUserFavorited] = useState([]);
  const [userFavoritedLength, setUserFavoritedLength] = useState(0);
  const [page, setPage] = useState({
    currentPage: 1,
    userFavoritedCurrentLength: userFavorited.length,
  });

  //   fetch current user's favorite photos
  const fetchMore = (currentPage = 1) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

    axios
      .get(
        `${apiRoot}/users/${username}/likes?client_id=${accessKey}&per_page=30&page=${currentPage}`
      )
      .then((response) => {
        setUserFavoritedLength(userFavorited.length);
        setUserFavorited([...userFavorited, ...response.data]);
        setPage({
          currentPage: currentPage + 1,
          userFavoritedCurrentLength: userFavorited.length,
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

  // if user didn't favorite any photos
  if (userFavorited.length === 0) {
    return (
      <h1 className=" flex dark:text-white text-black items-center justify-center h-screen px-2 xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        No favorites yet!
      </h1>
    );
  }
  return (
    <InfiniteScroll
      dataLength={userFavoritedLength}
      next={() => fetchMore(page.currentPage)}
      hasMore={
        userFavorited.length > page.userFavoritedCurrentLength ? true : false
      }
      loader={<Loading />}
    >
      <Gallery images={userFavorited} />
    </InfiniteScroll>
  );
}
