import React, { useState } from "react";
import star from "../assets/images/StarFour.png";
import img1 from "../assets/images/workSecImg1.png";
import img2 from "../assets/images/workSecImg2.png";
import img3 from "../assets/images/workSecImg3.png";
import img4 from "../assets/images/workSecImg4.png";
import img5 from "../assets/images/workSecImg5.png";
import img6 from "../assets/images/workSecImg6.png";
import img7 from "../assets/images/workSecImg7.png";

export const FourthSec = () => {
  const [activeWorkSectionTabs, setActiveWorkSectionTabs] = useState(0);
  const workSection = [
    { title: "All", content: "This is the content of Tab 1" },
    { title: "UI/UX DESIGN", content: "This is the content of Tab 2" },
    { title: "LOGO & BRANDING", content: "This is the content of Tab 3" },
    { title: "3D ILUSTRATOR", content: "This is the content of Tab 4" },
    { title: "WEB DEVELOPMENT", content: "This is the content of Tab 5" },
  ];
  return (
    <>
      <div id="blogs" className="container  m-auto py-[40px]">
        {/* <div className="grid md:grid-cols-3 grid-cols-1 gap-4"> */}
        <h2 className=" md:text-[95px] text-[45px] font-black uppercase">
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
          <p className="text-[16px] md:text-[20px] text-[#6f6f6f] mt-3">
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
                      src={img1}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="col-span-2 w-full flex justify-center bg-black">
                    <img
                      alt="Star"
                      src={img2}
                      className="object-contain h-full w-auto"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={img3}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={img4}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={img5}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="col-span-2 w-full flex justify-center bg-black">
                    <img
                      alt="Star"
                      src={img6}
                      className="object-contain h-full w-auto"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={img7}
                      className="object-contain w-full"
                    />
                  </div>
                </div>
              </div>
            )}
            {workSection[activeWorkSectionTabs].title === "UI/UX DESIGN" && (
              <div>
                <div className="grid grid-cols-3 gap-3 my-5">
                  <div className=" w-full">
                    <img
                      alt="Star"
                      src={img1}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="col-span-2 w-full flex justify-center bg-black">
                    <img
                      alt="Star"
                      src={img2}
                      className="object-contain h-full w-auto"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={img3}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={img4}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={img5}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="col-span-2 w-full flex justify-center bg-black">
                    <img
                      alt="Star"
                      src={img6}
                      className="object-contain h-full w-auto"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={img7}
                      className="object-contain w-full"
                    />
                  </div>
                </div>
              </div>
            )}
            {workSection[activeWorkSectionTabs].title === "LOGO & BRANDING" && (
              <div>
                <div className="grid grid-cols-3 gap-3 my-5">
                  <div className=" w-full">
                    <img
                      alt="Star"
                      src={img1}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="col-span-2 w-full flex justify-center bg-black">
                    <img
                      alt="Star"
                      src={img2}
                      className="object-contain h-full w-auto"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={img3}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={img4}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={img5}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="col-span-2 w-full flex justify-center bg-black">
                    <img
                      alt="Star"
                      src={img6}
                      className="object-contain h-full w-auto"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={img7}
                      className="object-contain w-full"
                    />
                  </div>
                </div>
              </div>
            )}
            {workSection[activeWorkSectionTabs].title === "3D ILUSTRATOR" && (
              <div>
                <div className="grid grid-cols-3 gap-3 my-5">
                  <div className=" w-full">
                    <img
                      alt="Star"
                      src={img1}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="col-span-2 w-full flex justify-center bg-black">
                    <img
                      alt="Star"
                      src={img2}
                      className="object-contain h-full w-auto"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={img3}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={img4}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={img5}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="col-span-2 w-full flex justify-center bg-black">
                    <img
                      alt="Star"
                      src={img6}
                      className="object-contain h-full w-auto"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={img7}
                      className="object-contain w-full"
                    />
                  </div>
                </div>
              </div>
            )}
            {workSection[activeWorkSectionTabs].title === "WEB DEVELOPMENT" && (
              <div>
                <div className="grid grid-cols-3 gap-3 my-5">
                  <div className=" w-full">
                    <img
                      alt="Star"
                      src={img1}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="col-span-2 w-full flex justify-center bg-black">
                    <img
                      alt="Star"
                      src={img2}
                      className="object-contain h-full w-auto"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={img3}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={img4}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={img5}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="col-span-2 w-full flex justify-center bg-black">
                    <img
                      alt="Star"
                      src={img6}
                      className="object-contain h-full w-auto"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      alt="Star"
                      src={img7}
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
