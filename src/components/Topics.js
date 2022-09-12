import axios from "axios";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Topics({ current }) {
  const [topics, setTopics] = useState();
  const language = useSelector((state) => state.language.lang);
  const { t } = useTranslation("common");

  // Fetching data from Unsplash API
  useEffect(() => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
    axios
      .get(`${apiRoot}/topics?client_id=${accessKey}&page=1&per_page=22`)
      .then((response) => {
        const data = response.data.map((tpc) => {
          return { ...tpc, title: t(`topic.${tpc.slug}`), current: false };
        });
        setTopics(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [language]);

  const handleClick = (id) => {
    const newTopics = topics.map((item) => {
      const slider = document.getElementById("slider");
      const selectedTopic = document.getElementById(id);
      slider.scrollTo(selectedTopic);
      //if item is that which clicked set it to ative
      if (item.id === id) {
        return { ...item, current: true };
      }
      //other items which not active
      return { ...item, current: false };
    });
    setTopics(newTopics);
  };

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 250;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 250;
  };

  return (
    <div className="md:fixed dark:bg-black bg-white md:top-16 md:pt-2  z-30 w-full ">
      <div className="relative flex   items-center border-b border-black">
        {/* Explore */}
        {/* <h1>Danyar</h1> */}
        {language === "en" ? (
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideLeft}
            size={40}
          />
        ) : (
          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideRight}
            size={40}
          />
        )}

        {/* topics scroll menu */}
        <div
          id="slider"
          className="w-full h-12 xs:py-2 md:py-7 flex items-center overflow-x-scroll  whitespace-nowrap  scrollbar-hide overflow-y-hidden"
        >
          {topics &&
            topics.map((item) => (
              <Link
                to={`/topic/${item.slug}`}
                id={item.id}
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`xs:text-base xs:px-3 text-gray-400 md:text-2xl dark:hover:text-white hover:text-black dark:active:text-white active:text-black xs:py-3 md:px-10  md:py-3  inline-block cursor-pointer
              ${
                (item.current || item.slug === current) &&
                " xs:border-b-4 md:border-b-4 dark:text-white text-black dark:border-white border-black cursor-default"
              }
              `}
              >
                {item.title}
              </Link>
            ))}
        </div>
        {language === "en" ? (
          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideRight}
            size={40}
          />
        ) : (
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideLeft}
            size={40}
          />
        )}
      </div>
    </div>
  );
}
