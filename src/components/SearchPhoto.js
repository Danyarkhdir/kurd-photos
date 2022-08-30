import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "./Gallery";
export default function SearchPhoto() {
  const [images, setImages] = useState([]);
  const { searched } = useParams("searched");
  useEffect(() => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

    axios
      .get(
        `${apiRoot}/search/photos?client_id=${accessKey}&per_page=30&query=${searched}`
      )
      .then((response) => {
        setImages(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searched]);
  return <Gallery images={images} />;
}
