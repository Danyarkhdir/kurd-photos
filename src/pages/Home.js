import axios from "axios";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Loading from "../components/Loading";
export default function Home() {
  const { t } = useTranslation("common");
  const firstPage = 1,
    lastPage = 15;
  const [viewPages, setViewPages] = useState([1, 2]);
  const [data, setData] = useState();
  const [page, setPage] = useState(firstPage);
  console.log(page);

  const handleNext = () => {
    page < lastPage ? setPage(page + 1) : setPage(page);
    page === viewPages[1]
      ? page === lastPage - 1
        ? setViewPages([page + 1])
        : setViewPages([page + 1, page + 2])
      : setViewPages(viewPages);
    window.scrollTo(0, 0);
  };

  const handlePrevious = () => {
    page > firstPage ? setPage(page - 1) : setPage(page);
    page === viewPages[1]
      ? page === firstPage + 1
        ? setViewPages([firstPage, firstPage + 1])
        : setViewPages(viewPages)
      : setViewPages([page - 2, page - 1]);
    window.scrollTo(0, 0);
  };

  const handleDoubleNext = () => {
    if (page === lastPage - 2) {
      setViewPages([lastPage]);
    } else {
      if (page === viewPages[0]) {
        setViewPages([page + 2, page + 3]);
        setPage(page + 2);
      } else {
        setViewPages([page + 1, page + 2]);
        setPage(page + 1);
      }
    }
    window.scrollTo(0, 0);
  };

  const handleDoublePrevious = () => {
    if (page === viewPages[0]) {
      setViewPages([page - 2, page - 1]);
      setPage(page - 1);
    } else {
      setViewPages([page - 3, page - 2]);
      setPage(page - 2);
    }

    window.scrollTo(0, 0);
  };

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
    <div className="w-full  flex flex-col bg-primary-400 pt-20 pb-10">
      <div className=" md:mt-32 flex flex-wrap gap-5 justify-center ">
        {!data ? (
          <Loading />
        ) : (
          data.map((item) => {
            return (
              <div className="object-cover  ">
                <img
                  className="cursor-pointer xs:w-full h-[500px]    md:w-[22rem] lg:w-[28rem] xl:w-[26rem] object-cover "
                  key={item.id}
                  src={item.urls.regular}
                  alt="something"
                />
                <h1 className="bg-red-500  ">Danyar</h1>
              </div>
            );
          })
        )}
      </div>
      <div className="flex justify-center items-center pt-10">
        {/*  Previous Button */}
        <p
          onClick={handlePrevious}
          className={`cursor-pointer ${
            page <= firstPage + 1 ? "hidden" : "flex"
          }  items-center h-8 mx-3  px-4  text-xs  text-gray-500 bg-white rounded-sm border border-gray-300 hover:bg-red-600 hover:text-white `}
        >
          {t("home.previous")}
        </p>

        {/* Next pages */}
        <p
          onClick={handleDoublePrevious}
          className={`cursor-pointer ${
            page <= firstPage + 1 ? "hidden" : "flex items-center"
          } h-8  mx-1 px-4  text-sm  text-gray-500 bg-white rounded-sm border border-gray-300 hover:bg-gray-500 hover:text-white `}
        >
          ..
        </p>
        {viewPages.map((index) => (
          <p
            key={index}
            onClick={() => {
              setPage(index);
              window.scrollTo(0, 0);
            }}
            className={` ${
              page === index
                ? "bg-gray-500 text-white hover:text-white cursor-default"
                : "text-gray-500  cursor-pointer hover:bg-gray-500 hover:text-white"
            } flex items-center h-8  mx-1 px-4  text-sm   bg-white rounded-sm border border-gray-300  hover:text-gray-700 `}
          >
            {index}
          </p>
        ))}

        {/* Double Next */}
        <p
          onClick={handleDoubleNext}
          className={`cursor-pointer ${
            page >= lastPage - 1 ? "hidden" : "flex items-center"
          } h-8  mx-1 px-4  text-sm  text-gray-500 bg-white rounded-sm border border-gray-300 hover:bg-gray-500 hover:text-white `}
        >
          ..
        </p>
        {/* Next Button */}
        <p
          onClick={handleNext}
          className={`cursor-pointer ${
            page > lastPage - 1 ? "hidden" : "flex"
          }  items-center h-8  mx-3 px-4  text-xs  text-gray-500 bg-white rounded-sm border border-gray-300 hover:bg-green-800 hover:text-white `}
        >
          {t("home.next")}
        </p>
      </div>
    </div>
  );
}
