import { useState, useEffect } from "react";
import axios from "axios";
export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&per_page=50`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="py-20  md:mt-32 flex flex-wrap gap-5 justify-center bg-primary-500">
      {data &&
        data.map((item) => {
          return (
            <img
              className="cursor-pointer xs:w-full  md:w-[22rem] lg:w-[28rem] xl:w-[26rem] object-cover "
              key={item.id}
              src={item.urls.regular}
              alt="something"
            />
          );
        })}
    </div>
  );
}
