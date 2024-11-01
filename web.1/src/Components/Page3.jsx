import React from "react";

const Page3 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-[5vw] py-[3vh] mt-[-80px]">
      {/* Heading */}
      <h1 className="font-futura text-black text-[5vw] leading-[6vw] text-center mb-[2vh]">
        Welcome to Twirl & Co.
      </h1>

      {/* Paragraph */}
      <p className="font-futura text-black text-[2vw] leading-[3vw] text-center max-w-[70vw] py-[3vh]">
        Twirl & Co. is dedicated to bringing you the finest and most stylish
        clothes for kids, blending comfort with playfulness in every piece.
        Explore our collection, designed to spark joy and keep up with the
        energy of little ones. We believe in clothes that let kids be kids!
      </p>
        
    </div>
  );
};

export default Page3;
