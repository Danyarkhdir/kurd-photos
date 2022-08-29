import axios from "axios";
import { useState, useEffect } from "react";
import Gallery from "./Gallery";

export default function UserLikes({ username }) {
  const [userLiked, setUserLiked] = useState([]);

  // fetch posts which user liked
  useEffect(() => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

    axios
      .get(
        `${apiRoot}/users/${username}/likes?client_id=${accessKey}&per_page=30`
      )
      .then((response) => {
        setUserLiked(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [username]);

  return (
    <div>
      <Gallery images={userLiked} />
    </div>
  );
}
