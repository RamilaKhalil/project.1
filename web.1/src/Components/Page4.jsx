

import React, { useEffect } from "react";
import gsap from "gsap";

const Page4 = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    // Move cursor based on mouse position
    document.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
      });
    });

    // Animate cursor scaling and color change on hover over .child elements
    // @ts-ignore
    document.querySelectorAll(".parent").forEach((elem) => {
      elem.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          scale: 0.9,
          backgroundColor: "rgb(163, 214, 227)", // lightpink for kid-friendly theme
          opacity:0.7,
        });
      });
      elem.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          scale: 0,
          backgroundColor:"rgb(163, 214, 229)",
        });
      });
    });
  }, []);

  return (
    <div className="parent">
  <div id="cursor" className="fixed w-[150px] h-[150px] bg-orange-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-0 pointer-events-none z-[1] "></div>

    <div id="page4" className="min-h-[120vh] w-full relative flex items-center justify-evenly flex-wrap mt-[-20px] bg-white">
    

      <div className="ram z-[2] flex items-center justify-evenly flex-wrap mt-[-25px] py-3">
        
      {[
        {
          src: "/images/clothing-t-shirt-gymboree-pajama-girl-6e14088b4859a6e2431fcc177305f283.png",
          price: "$20",
          size: "2T - 5T",
          description: "Comfortable pajama t-shirt",
        },
        {
          src: "/images/clothing-sleeve-overall-gymboree-infant-clothes-accessories-6f354d56895433f979587ff738ae4e00.png",
          price: "$45",
          size: "2T - 5T",
          description: "Comfortable pajama t-shirt",
        },
        {
          src: "/images/pnghut_carters-macys-skirt-clothing-oshkosh-bgosh-dress.png",
          price: "$25",
          size: "2T - 5T",
          description: "Comfortable pajama t-shirt",
        },
        {
          src: "/images/pnghut_carters-macys-skirt-clothing-oshkosh-bgosh-dress.png",
          price: "$30",
          size: "2T - 4T",
          description: "Cute floral skirt",
        },
        {
          src: "/images/pnghut_carters-dress-bodysuit-clothing-cardigan-snap-fastener-baby-clothes.png",
          price: "$15",
          size: "3M - 18M",
          description: "Adorable baby bodysuit",
        },
        {
          src: "/images/clothing-sleeve-overall-gymboree-infant-clothes-accessories-6f354d56895433f979587ff738ae4e00.png",
          price: "$35",
          size: "6M - 24M",
          description: "Stylish baby overalls",
        },
      ].map((item, index) => (
        <div key={index} className="child h-[54vh] w-[25vw] flex flex-col items-center py-1">
          <img src={item.src} alt={item.description} className="h-[70%]" />
          <div className="flex flex-col items-center mt-2 text-center">
            <p className="font-semibold text-lg text-gray-900">{item.description}</p>
            <p className="text-gray-600">Size: {item.size}</p>
            <p className="text-gray-900 font-bold">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  
  );
};

export default Page4;



