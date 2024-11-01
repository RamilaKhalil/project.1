// @ts-nocheck

import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa"; // Import star icon from react-icons

const Page5 = () => {
  const sliderRef = useRef(null);

  const reviews = [
    { name: "Alice", review: "Adorable clothes! My kids love them!", rating: 5 },
    { name: "Jack", review: "Very comfortable and cute outfits!", rating: 4 },
    { name: "Emma", review: "Great quality and stylish designs.", rating: 3 },
    { name: "Liam", review: "Perfect for my little one's wardrobe!", rating: 5 },
    { name: "Sophia", review: "So many colors and patterns to choose from!", rating: 4 },
    { name: "Ethan", review: "Good fit and feels soft to touch.", rating: 5 },
    { name: "Mia", review: "My go-to brand for kids' clothing!", rating: 4 },
  ];

  const scrollLeft = () => {
    if (sliderRef.current) {
      // @ts-ignore
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      // @ts-ignore
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };

  return (
    <div id="page5" className="max-h-[100vh] w-full bg-gray-900 flex items-center justify-center py-[10vh]  ">
     
      <div className="relative w-[85vw]">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-1/7 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-[2vh] rounded-full shadow-lg hover:bg-gray-600"
        >
          <FiChevronLeft size="2vw" />
        </button>
        {/* Review Cards */}
        <div
          ref={sliderRef}
          className="flex items-center justify-evenly  overflow-hidden gap-[3vw] scroll-smooth px-[3vw] py-[2vh] "
        >
          {reviews.map((review, index) => (
            <div
            key={index}
              className="flex-shrink-0 w-[60vw] md:w-[25vw] h-[40vh] bg-white rounded-lg shadow-lg p-[3vw] text-center transition-transform duration-300"
            >
              <p className="text-[2vw] font-semibold text-gray-800">{review.name}</p>
            
  <div className="flex justify-center my-[1vh]">
    {Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`text-[1.5vw] ${
          i < review.rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ))}
  </div>
              <p className="text-[1.5vw] text-gray-600 mt-[2vh]">{review.review}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-[2vh] rounded-full shadow-lg hover:bg-gray-600"
        >
          <FiChevronRight size="2vw" />
        </button>
      </div>
    </div>
  );
};

export default Page5;
