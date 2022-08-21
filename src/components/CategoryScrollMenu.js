import React from "react";
import { data } from "./mockData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function CategoryScrollMenu() {
  const [selected, setSelected] = useState(data);
  const language = useSelector((state) => state.language.lang);
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
    <div className="md:fixed xs:mb-  md:top-16 md:pt-2 bg-primary-400  w-full ">
      <div className="relative flex items-center border-b border-black">
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
        <div
          id="slider"
          className="w-full h-12 xs:py-2 md:py-7 flex items-center overflow-x-scroll  whitespace-nowrap  scrollbar-hide overflow-y-hidden"
        >
          {selected.map((item) => (
            <p
              id={item.id}
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`xs:text-sm xs:px-3 text-black md:text-2xl xs:py-3 md:px-10  md:py-3 active:bg-gray-400 inline-block cursor-pointer ${
                item.current &&
                " xs:border-b-2 md:border-b-4 border-black cursor-default"
              } `}
            >
              {item.name}
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
      </div>{" "}
      {/* <img
        className="w-full h-[440px] object-cover"
        src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2607&q=80"
        alt=""
      /> */}
    </div>
  );
}
