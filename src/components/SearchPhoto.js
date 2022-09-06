import { useState } from "react";
import axios from "axios";
import Gallery from "./Gallery";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
export default function SearchPhoto({ searched }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState({ currentPage: 1, totalPage: 1 });

  function fetchMore(currentPage = 1) {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

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

  if (page.currentPage === 1) fetchMore(page.currentPage);
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
