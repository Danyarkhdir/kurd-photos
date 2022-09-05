import axios from "axios";
import { useState } from "react";
import Gallery from "./Gallery";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
export default function UserPhotos({ username }) {
  const [userPhotos, setUserPhotos] = useState([]);
  const [userPhotosLength, setUserPhotosLength] = useState(0);
  const [page, setPage] = useState({
    currentPage: 1,
    userPhotosCurrentLength: userPhotos.length,
  });

  //   fetch current user's photos
  const fetchMore = (currentPage = 1) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

    axios
      .get(
        `${apiRoot}/users/${username}/photos?client_id=${accessKey}&per_page=30&page=${currentPage}`
      )
      .then((response) => {
        setUserPhotosLength(userPhotos.length);
        setUserPhotos([...userPhotos, ...response.data]);
        setPage({
          currentPage: currentPage + 1,
          userPhotosCurrentLength: userPhotos.length,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (userPhotos.length === 0) {
    window.scrollTo(0, 0);
    fetchMore();
  }
  return (
    <InfiniteScroll
      dataLength={userPhotosLength}
      next={() => fetchMore(page.currentPage)}
      hasMore={userPhotos.length > page.userPhotosCurrentLength ? true : false}
      loader={<Loading />}
    >
      <Gallery images={userPhotos} />
    </InfiniteScroll>
  );
}
