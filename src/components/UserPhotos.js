import axios from "axios";
import { useState, useEffect } from "react";
import Images from "./Images";
export default function UserPhotos({ username }) {
  const [userPhotos, setUserPhotos] = useState([]);

  //   fetch current user's photos
  useEffect(() => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

    axios
      .get(
        `${apiRoot}/users/${username}/photos?client_id=${accessKey}&per_page=30`
      )
      .then((response) => {
        setUserPhotos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [username]);

  return <Images images={userPhotos} />;
}
