import { useState, useEffect } from "react";
import axios from "axios";
export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/collections?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&page=2`
      )
      .then(function (response) {
        setData(response.data);
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <div className="pt-5 px-5 md:mt-32">Danyar</div>;
}
