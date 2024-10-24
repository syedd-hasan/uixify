import React, { useEffect } from "react";
import sicBgImg from "../assets/images/six-sec-bg-img.png";
import { BsStars } from "react-icons/bs";

export const SixSec = () => {
  const items = [
    "Mobile App",
    "Animation",
    "Branding",
    "UIUX Design",
    "Web Development",
    "Mobile App",
    "Animation",
    "Branding",
    "UIUX Design",
    "Web Development",
    "Mobile App",
    "Animation",
    "Branding",
    "UIUX Design",
    "Web Development",
    "Mobile App",
    "Animation",
    "Branding",
    "UIUX Design",
    "Web Development",
  ];
  const duplicatedItems = [...items, ...items];
  return (
    <>
      <div
        className="md:pb-[230px] "
        style={{
          background: `url(${sicBgImg}) no-repeat left bottom`,
        }}
      >
        <div data-aos="fade-left">
          <div className="relative md:mt-10" data-aos="fade-left">
            <div className="w-full py-7 flex overflow-hidden bg-[#c0ff00] rotate-[-3deg] mt-4 drop-shadow-[0px_0px_3px_#808080]">
              <div className="marquee2">
                {duplicatedItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center tracking-widest"
                  >
                    <div className="border-4 border-[#606060] mx-2 md:mx-8 h-[30px]"></div>
                    <h1 className="uppercase text-[20px] md:text-[30px] font-bold whitespace-nowrap">
                      {item}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className=" m-auto px-4"
          // style={{
          //   background: `url(${sicBgImg}) no-repeat left bottom`,
          // }}
        >
          <h3
            className="uppercase text-[#7467fe] text-[50px] md:text-[120px] font-black drop-shadow-md text-center leading-[40px] md:leading-[90px] "
            data-aos="fade-right"
          >
            Collab0 <br />{" "}
            <span className="text-black md:ml-[150px] ml-[40px]">Rations</span>
          </h3>
          <div
            className="flex flex-col md:flex-row justify-center items-center gap-6"
            data-aos="fade-left"
          >
            <h3 className="md:text-[40px]">TOGETHER</h3>
            <button
              className="uppercase text-[12px] md:text-[15px] bg-[#c0ff00] hover:scale-105 px-4 py-2 rounded-full flex gap-2 border border-black border-b-4"
              // data-aos="fade-left"
            >
              Contact us <BsStars />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
