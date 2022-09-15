import UserCard from "./UserCard";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import axios from "axios";

export default function SearchUser({ searched }) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState({ currentPage: 1, totalPage: 1 });

  // Fetch Users from Unsplash API
  function fetchMore(currentPage = 1) {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

    axios
      .get(
        `${apiRoot}/search/users?client_id=${accessKey}&page=${currentPage}&per_page=30&query=${searched}`
      )
      .then((response) => {
        setUsers([...users, ...response.data.results]);
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

  // if no users available
  if (users.length === 0) {
    return (
      <h1 className=" dark:text-white text-black h-screen flex items-center  justify-center px-2 xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
        No users found for "{searched}"
      </h1>
    );
  }
  return (
    <InfiniteScroll
      dataLength={users.length}
      next={() => fetchMore(page.currentPage)}
      hasMore={page.currentPage <= page.totalPage ? true : false}
      loader={<Loading />}
    >
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-5">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </InfiniteScroll>
  );
}
