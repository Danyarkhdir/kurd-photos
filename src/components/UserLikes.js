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
        console.log("currentLength", page.userLikedCurrentLength);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (userLiked.length === 0) {
    window.scrollTo(0, 0);
    fetchMore();
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
