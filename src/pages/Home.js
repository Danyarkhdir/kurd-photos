import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";
export default function Home() {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  console.log(page);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&page=${page}&per_page=50`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);
  return (
    <div className="w-full  flex flex-col bg-primary-500 pt-20 pb-10">
      <div className=" md:mt-32 flex flex-wrap gap-5 justify-center ">
        {!data ? (
          <Loading />
        ) : (
          data.map((item) => {
            return (
              <img
                className="cursor-pointer xs:w-full  md:w-[22rem] lg:w-[28rem] xl:w-[26rem] object-cover "
                key={item.id}
                src={item.urls.regular}
                alt="something"
              />
            );
          })
        )}
      </div>
      <div className="flex justify-center pt-10">
        {/*  Previous Button */}
        <p
          onClick={() => {
            page >= 1 ? setPage(page - 1) : setPage(page);
            window.scrollTo(0, 0);
          }}
          className={`cursor-pointer disabled ${
            page === 1 ? "hidden" : "inline-flex items-center"
          }   py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
        >
          Previous
        </p>

        {/* Next Button */}
        <p
          onClick={() => {
            page <= 1000 ? setPage(page + 1) : setPage(page);
            window.scrollTo(0, 0);
          }}
          className={`cursor-pointer ${
            page === 1000 ? "hidden" : "inline-flex items-center"
          }    py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
        >
          Next
        </p>
      </div>
    </div>
  );
}
