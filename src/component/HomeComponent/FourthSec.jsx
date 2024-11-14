import React, { useState } from "react";
import star from "../assets/images/StarFour.png";
import img1 from "../assets/images/workSecImg1.png";
import img2 from "../assets/images/workSecImg2.png";
import img3 from "../assets/images/workSecImg3.png";
import img4 from "../assets/images/workSecImg4.png";
import img5 from "../assets/images/workSecImg5.png";
import img6 from "../assets/images/workSecImg6.png";
import img7 from "../assets/images/workSecImg7.png";
import b1 from "../assets/images/logo-branding/b1.png";
import b2 from "../assets/images/logo-branding/b2.png";
import b3 from "../assets/images/logo-branding/b3.png";
import b4 from "../assets/images/logo-branding/b4.png";
import b5 from "../assets/images/logo-branding/b5.png";
import b6 from "../assets/images/logo-branding/b6.png";
import b8 from "../assets/images/logo-branding/b8.png";

import ui1 from "../assets/images/ui/UI-1.png";
import ui2 from "../assets/images/ui/UI-2.png";
import ui3 from "../assets/images/ui/UI-3.png";
import ui4 from "../assets/images/ui/UI-4.png";
import ui5 from "../assets/images/ui/UI-5.png";
import ui6 from "../assets/images/ui/UI-6.png";
import ui7 from "../assets/images/ui/UI-7.png";
import ui8 from "../assets/images/ui/UI-8.png";
import ui9 from "../assets/images/ui/UI-9.png";
import ui10 from "../assets/images/ui/UI-10.png";
import ui11 from "../assets/images/ui/UI-11.png";
import ui12 from "../assets/images/ui/UI-12.png";
import ui13 from "../assets/images/ui/UI-13.png";
import ui14 from "../assets/images/ui/UI-14.png";
import ui15 from "../assets/images/ui/UI-15.png";
import ui16 from "../assets/images/ui/UI-16.png";
import ui17 from "../assets/images/ui/UI-17.png";
import ui18 from "../assets/images/ui/UI-18.png";
import ui19 from "../assets/images/ui/UI-19.png";
import ui20 from "../assets/images/ui/UI-20.png";

import an1 from "../assets/images/Animation/Shan.png";
import an2 from "../assets/images/Animation/Cadbury.png";
import an3 from "../assets/images/Animation/Kurkure.png";
import an4 from "../assets/images/Animation/Lays.png";
import an5 from "../assets/images/Animation/MAGAL.png";
import an6 from "../assets/images/Animation/Moro.png";
import an7 from "../assets/images/Animation/Nationals-Food.png";
import an8 from "../assets/images/Animation/Nescafe.png";
import an9 from "../assets/images/Animation/PSO.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const FourthSec = () => {
  const [activeWorkSectionTabs, setActiveWorkSectionTabs] = useState(0);
  const [visibleImages, setVisibleImages] = useState(9);

  const workSection = [
    { title: "All", content: "This is the content of Tab 1" },
    { title: "UI/UX DESIGN", content: "This is the content of Tab 2" },
    { title: "LOGO & BRANDING", content: "This is the content of Tab 3" },
    { title: "ANIMATION", content: "This is the content of Tab 4" },
  ];

  const images = [
    ui1,
    ui2,
    ui3,
    ui4,
    ui5,
    ui6,
    ui7,
    ui8,
    ui9,
    ui10,
    ui11,
    ui12,
    ui13,
    ui14,
    ui15,
    ui16,
    ui17,
    ui18,
    ui19,
    ui20,
  ];

  const handleLoadMore = () => {
    setVisibleImages((prev) => prev + 11);
  };
  const handleLoadBack = () => {
    setVisibleImages((prev) => Math.max(prev - 11, 9)); // Prevent going below 9
  };
  return (
    <>
      <div id="blogs" className="container px-2 m-auto py-[40px]">
        {/* <div className="grid md:grid-cols-3 grid-cols-1 gap-4"> */}
        <h2 className=" md:text-[90px] text-[45px] font-black uppercase">
          Creativity in <span className="text-[#7467fe]">action</span>
        </h2>
        <div>
          <div className="flex gap-2">
            {[...Array(3)].map((_, index) => (
              <img
                key={index}
                alt="Star"
                src={star}
                className="object-contain w-auto"
              />
            ))}
          </div>
          <p className="text-[16px] md:text-[18px] text-[#6f6f6f] mt-3">
            Sure, anyone can claim to be creative. But at Uixify, we prefre to
            let our work do the talking. From sleek, Intuitive design to
            jawdropping animations and videos that actually get watched, our
            porfolio showcase the results we're proud of. Take a look at what
            we've done-and imagine{" "}
            <span className="uppercase text-[#7467fe]">
              WHat we can do for you.
            </span>
          </p>
        </div>
        {/* </div> */}
        <div>
          <div className="flex justify-evenly flex-wrap mt-8">
            {workSection.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveWorkSectionTabs(index)}
                className={`py-2 px-2 md:text-[18px] text-[10px] font-medium focus:outline-none ${
                  activeWorkSectionTabs === index
                    ? "md:text-[19px] text-[12px] bg-[#c0ff00] rounded-full font-semibold text-black scale-105  border border-black border-b-4 md:w-[243px] "
                    : "text-black hover:scale-105"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div>
            {workSection[activeWorkSectionTabs].title === "All" && (
              <div>
                <div className="grid md:grid-cols-3 grid-cols-2 gap-3 my-5">
                  <div className=" w-full">
                    <img
                      alt="Star"
                      src={ui1}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className=" w-full flex justify-center ">
                    <img
                      alt="Star"
                      src={ui2}
                      className="object-cover h-full w-auto"
                    />
                  </div>
                  <div className=" w-full flex justify-center ">
                    <img
                      alt="Star"
                      src={an6}
                      className="object-cover h-full w-auto"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={b3}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={ui5}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={b5}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className=" w-full flex justify-center ">
                    <img
                      alt="Star"
                      src={an8}
                      className="object-cover h-full w-auto"
                    />
                  </div>
                  <div className=" w-full flex justify-center ">
                    <img
                      alt="Star"
                      src={ui7}
                      className="object-cover h-full w-auto"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={ui8}
                      className="object-contain w-full"
                    />
                  </div>
                </div>
              </div>
            )}
            {workSection[activeWorkSectionTabs].title === "UI/UX DESIGN" && (
              <div className="relative">
                <div
                  className="grid md:grid-cols-3 grid-cols-2 gap-3 my-5 relative"
                  style={{
                    mask:
                      visibleImages < images.length
                        ? "linear-gradient(to bottom, rgba(0,0,0, 1) 0%, rgba(0,0,0, 1) 40%, rgba(0,0,0, 0) 95%, rgba(0,0,0, 0) 100%)"
                        : "none",
                    WebkitMask:
                      visibleImages < images.length
                        ? "linear-gradient(to bottom, rgba(0,0,0, 1) 0%, rgba(0,0,0, 1) 70%, rgba(0,0,0, 0) 100%, rgba(0,0,0, 0) 100%)"
                        : "none",
                    font: "2em/1.6em Arial",
                  }}
                >
                  {images.slice(0, visibleImages).map((image, index) => (
                    <div key={index} className="relative w-full">
                      <img
                        alt={`UI design ${index + 1}`}
                        src={image}
                        className={`object-contain w-full transition-opacity `}
                      />
                    </div>
                  ))}
                </div>
                {visibleImages > 2 && (
                  <div className="absolute inset-x-0 bottom-[2px] flex justify-center ">
                    {visibleImages < images.length && (
                      <button
                        onClick={handleLoadMore}
                        className="flex items-center p-3 bg-[#7366fc] text-white rounded-full mx-2 shadow-lg transition-transform transform hover:scale-105"
                      >
                        <IoIosArrowDown className="text-[50px]" />
                      </button>
                    )}
                  </div>
                )}
                {visibleImages > 2 && (
                  <div className=" inset-x-0 bottom-[5%] flex justify-center mb-2">
                    {visibleImages >= images.length && (
                      <button
                        onClick={handleLoadBack}
                        className="flex items-center p-3 bg-[#7366fc] text-white rounded-full mx-2 shadow-lg transition-transform transform hover:scale-105"
                      >
                        <IoIosArrowUp className="text-[50px]" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}

            {workSection[activeWorkSectionTabs].title === "LOGO & BRANDING" && (
              <div>
                <div className="grid md:grid-cols-3 grid-cols-2 gap-3 my-5">
                  <div className=" w-full">
                    <img
                      alt="Star"
                      src={b2}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="col-span-2 w-full flex justify-center ">
                    <img
                      alt="Star"
                      src={b1}
                      className="object-cover h-full w-auto"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={b3}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={b4}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={b5}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="col-span-2 w-full flex justify-center ">
                    <img
                      alt="Star"
                      src={b8}
                      className="object-cover h-full w-auto"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={b6}
                      className="object-contain w-full"
                    />
                  </div>
                </div>
              </div>
            )}
            {workSection[activeWorkSectionTabs].title === "ANIMATION" && (
              <div>
                <div className="grid md:grid-cols-3 grid-cols-2 gap-3 my-5">
                  <div className=" w-full flex justify-center ">
                    <img
                      alt="Star"
                      src={an2}
                      className="object-contain h-full w-auto"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={an1}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={an9}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={an3}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={an4}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={an5}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className=" w-full flex justify-center ">
                    <img
                      alt="Star"
                      src={an6}
                      className="object-contain h-full w-auto"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={an7}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={an8}
                      className="object-contain w-full"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
