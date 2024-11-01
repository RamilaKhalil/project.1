



import React, { useState } from "react";

const Page2 = ({ img1, img2, img3 }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      id="page2"
      className="min-h-screen w-full relative flex items-center px-[1vw] py-[3vw] justify-between bg-white"
    >
      {/* Element 1 */}
      <div
        className="elem h-full w-[31%] relative flex items-center justify-center overflow-hidden"
      >
        <img
          src={img1}
          alt="Element 1"
          className="h-full w-full object-cover scale-[1.1]"
        />
        <div
          className={`dets absolute top-50% w-[70%] rounded-full bg-gray-800 z-10 transition-all duration-300 ${
            hovered ? "h-[300px]" : "h-[60px]"
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {!hovered && (
            <p className="text-white text-center pt-4">New Arrival For Boys</p>
          )}
          {hovered && (
            <div className="flex flex-col items-center justify-center mt-4">
              <img
                src="/images/pexels-pavel-danilyuk-8421914.jpg" // replace with actual image URL
                alt="Kid Clothes"
                className="w-3/4 h-auto mb-2"
              />
              <a
                href="/shop/kids"
                className="text-white bg-gray-900 px-4 py-2 rounded hover:bg-gray-800"
              >
                Boys Collection
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Element 2 */}
      <div
        className="elem h-full w-[31%] relative flex items-center justify-center overflow-hidden"
      >
        <img
          src={img2}
          alt="Element 2"
          className="h-full w-full object-cover scale-[1.1]"
        />
        <div
          className={`dets absolute top-50% w-[70%] rounded-full bg-gray-800 z-10 transition-all duration-300 ${
            hovered ? "h-[300px]" : "h-[60px]"
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {!hovered && (
            <p className="text-white text-center pt-4">Our Best Sellers</p>
          )}
          {hovered && (
            <div className="flex flex-col items-center justify-center mt-4">
              <img
                src="/images/pexels-vika-glitter-392079-1620758.jpg" // replace with actual image URL
                alt="Kid Clothes"
                className="w-3/4 h-auto mb-2"
              />
              <a
                href="/shop/kids"
                className="text-white bg-gray-900 px-4 py-2 rounded hover:bg-gray-800"
              >
                Best Selling
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Element 3 */}
      <div
        className="elem h-full w-[31%] relative flex items-center justify-center overflow-hidden"
      >
        <img
          src={img3}
          alt="Element 3"
          className="h-full w-full object-cover scale-[1.1]"
        />
        <div
          className={`dets absolute top-50% w-[70%] rounded-full bg-gray-800 z-10 transition-all duration-300 ${
            hovered ? "h-[300px]" : "h-[60px]"
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {!hovered && (
            <p className="text-white text-center pt-4">New Arrival For Girls</p>
          )}
          {hovered && (
            <div className="flex flex-col items-center justify-center mt-4">
              <img
                src="/images/pexels-tamillesesposito-19214179.jpg" // replace with actual image URL
                alt="Kid Clothes"
                className="w-3/4 h-auto mb-2"
              />
              <a
                href="/shop/kids"
                className="text-white bg-gray-900 px-4 py-2 rounded hover:bg-gray-800"
              >
                Girls Collection
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page2;


