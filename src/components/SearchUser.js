import UserCard from "./UserCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SearchUser({ searched }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

    axios
      .get(
        `${apiRoot}/search/users?client_id=${accessKey}&per_page=30&query=${searched}`
      )
      .then((response) => {
        setUsers(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searched]);
  return (
    <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-5">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
