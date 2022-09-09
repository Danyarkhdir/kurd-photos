import { useState, useEffect } from "react";
import axios from "axios";
import Gallery from "./Gallery";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

export default function SearchPhoto({ searched }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState({ currentPage: 1, totalPage: 1 });
  const apiRoot = "https://api.unsplash.com";
  const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchImages();
  }, [searched]);

  function fetchImages() {
    axios
      .get(
        `${apiRoot}/search/photos?client_id=${accessKey}&page=1&per_page=30&query=${searched}`
      )
      .then((response) => {
        setImages(response.data.results);
        setPage({
          currentPage: 2,
          totalPage: response.data.total_pages,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function fetchMore(currentPage = 2) {
    axios
      .get(
        `${apiRoot}/search/photos?client_id=${accessKey}&page=${currentPage}&per_page=30&query=${searched}`
      )
      .then((response) => {
        setImages([...images, ...response.data.results]);
        setPage({
          currentPage: currentPage + 1,
          totalPage: response.data.total_pages,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <InfiniteScroll
      dataLength={images.length}
      next={() => fetchMore(page.currentPage)}
      hasMore={page.currentPage <= page.totalPage ? true : false}
      loader={<Loading />}
    >
      <Gallery images={images} />
    </InfiniteScroll>
  );
}
