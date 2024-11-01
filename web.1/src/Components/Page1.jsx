import React,{ useEffect } from 'react';
import gsap from 'gsap';

const Page1 = () => {

 

  useEffect(() => {
    const videocon = document.querySelector("#video-container");
    const playbtn = document.querySelector("#play");

    // GSAP animations for hover and mouse movement
    // @ts-ignore

   
    // @ts-ignore
    videocon.addEventListener("mouseenter", () => {
      gsap.to(playbtn, { scale: 1, opacity: 1 });
    });

    // @ts-ignore
    videocon.addEventListener("mouseleave", () => {
      gsap.to(playbtn, { scale: 0, opacity: 0 });
    });

    document.addEventListener("mousemove", (e) => {
      gsap.to(playbtn, {
        left: e.clientX - 60,
        top: e.clientY - 70,
        opacity:1,
      });
    });
  }, []);

  

  return (
    <div className="min-h-screen w-full px-[1vw]  relative" id="page1">
    <h1 className="text-[15vw] uppercase  mt-[4vw]  font-futura leading-[14vw] tracking-[-8px] text-gray-900">
      CHANGE YOUR STYLE
    </h1>
   
  
    <div
        id="play"
        className="fixed text-white bg-blue-300 rounded-full text-center font-bold uppercase opacity-0 scale-0 z-50 transition-transform duration-300"
        style={{ padding: "3vw 2.2vw", fontSize: "1.3vw", fontFamily: "futura" }}
      >
        PLAY
      </div>

  
    <div className="h-full w-full bg-gray-300 mt-[-10vw] relative"  id="video-container">
    <video
  className="h-full w-full object-cover"

  loop
  muted
  controls>
  <source  src="/video/4715376-hd_2048_1080_25fps.mp4" type="video/mp4" />
 </video>   
    </div>
  </div>
  
  );

}

export default Page1;


