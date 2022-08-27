import axios from "axios";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function CategoryScrollMenu() {
  const [selected, setSelected] = useState();
  const language = useSelector((state) => state.language.lang);
  const url = "https://api.unsplash.com";

  // Fetching data from Unsplash API
  useEffect(() => {
    axios
      .get(
        `${url}/collections?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&per_page=30`
      )
      .then((response) => {
        const data = response.data.map((catg) => {
          return { ...catg, current: false };
        });
        setSelected(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClick = (id) => {
    const newSelected = selected.map((item) => {
      const slider = document.getElementById("slider");
      const selecedCategory = document.getElementById(id);
      slider.scrollTo(selecedCategory);
      //if item is that which clicked set it to ative
      if (item.id === id) {
        return { ...item, current: true };
      }
      //other items which not active
      return { ...item, current: false };
    });
    setSelected(newSelected);
  };

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 250;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 250;
  };

  return (
    <div className="md:fixed  md:top-16 md:pt-2 bg-primary-400 z-30 w-full ">
      <div className="relative flex items-center border-b border-black">
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

        {/* Category Slider */}
        <div
          id="slider"
          className="w-full h-12 xs:py-2 md:py-7 flex items-center overflow-x-scroll  whitespace-nowrap  scrollbar-hide overflow-y-hidden"
        >
          {selected &&
            selected.map((item) => (
              <p
                id={item.id}
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`xs:text-base xs:px-3 text-black md:text-2xl xs:py-3 md:px-10  md:py-3 active:text-white inline-block cursor-pointer
              ${
                item.current &&
                " xs:border-b-4 md:border-b-4 text-white border-black cursor-default"
              }
              `}
              >
                {item.title}
              </p>
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
