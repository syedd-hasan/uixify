import React, { useEffect, useState } from "react";
import bgImg from "../assets/images/HEROPAGE.png";
import ngEle from "../assets/images/hero-page-bg-elmt.png";
import { BsStars } from "react-icons/bs";
import LogoModel from "../CanvasModel/LogoModel";
import SplineModel from "../CanvasModel/LogoModel";
import SplineCanvas from "../CanvasModel/LogoModel";
import ContactForm from "../Modal/ContactForm"; // Import the modal component

export const Main = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.9.30/build/spline-viewer.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
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
        className="relative bg-[#7366fc] pt-10 h-fit md:pb-10 pb-6 md:mt-[60px] mt-[40px]"
        style={{
          background: `url(${bgImg})`,
          backgroundRepeat: "round",
          backgroundSize: "cover",
        }}
      >
        <div
          className="container mx-auto px-2 "
          style={{
            background: `url(${(
              <div className="absolute flex justify-center w-full sm:w-[45%]  md:right-0 right-[-30%] bottom-[-60%]">
                <spline-viewer
                  url="https://prod.spline.design/FwpXkt0J890LbRt1/scene.splinecode"
                  className="main-spline-logo md:h-[500px] sm:h-[400px] h-[250pc]"
                  style={{ width: "100%" }}
                ></spline-viewer>
              </div>
            )}) no-repeat right bottom`,
            backgroundSize: "40%",
          }}
        >
          <div className="md:relative flex items-center flex-wrap gap-x-4">
            <h1 className="text-white text-4xl 2xl:text-[150px] lg:text-[110px] md:text-[100px] sm:text-[100px] uppercase font-black drop-shadow-[-5px_5px_5px_#3f3f3f] leading-normal md:leading-[150px] h-fit">
              We turn boring {/* <br /> */}
              {/* </h1> */}
              {/* <h1 className=" md:block text-white text-4xl md:text-[130px]  sm:text-[120px] uppercase font-black  drop-shadow-[-5px_5px_5px_#3f3f3f] leading-normal md:leading-[150px] w-fit"> */}
              into
            </h1>
            <button
              className="md:absolute md:left-[25%] md:bottom-[15%] mb-4 drop-shadow-[-5px_5px_5px_#3f3f3f] rotate-[-15deg]  bg-[#c0ff00] p-2  rounded-full flex items-center hover:scale-105 "
              // data-aos="fade-left"
            >
              <span className="uppercase font-bold text-xl md:text-[85px] sm:text-[40px] bg-[#c0ff00] md:px-4 px-8 py-2 rounded-full flex items-center gap-2 border border-black border-dashed">
                BOLD <BsStars />
              </span>
            </button>
          </div>

          <div className="relative flex relative mt-4 md:mt-8 md:pb-[100px]">
            <div className="w-full ">
              <p className="w-full md:w-[50%] font-medium text-white text-lg md:text-[25px]">
                We are a team of passionate UI/UX designers dedicated to
                transforming ideas into user-centered digital experiences."
              </p>
              <button
                data-aos="fade-right"
                className="absolute btn-hover-eft transition-transform duration-300 ease-in-out drop-shadow-[0px_0px_3px_#808080] uppercase text-lg md:text-[25px] bg-[#c0ff00] hover:scale-105 px-4 py-2 rounded-full flex gap-2 mt-5 md:mt-8 border border-black border-b-4 z-50"
                onClick={() => setModalOpen(true)}
              >
                BORROW OUR BRILLIANCE <BsStars />
              </button>
            </div>
            <div className="absolute hidden md:flex justify-center w-full xl:w-[145%] md:w-[125%] sm:w-[135%] xl:h-[465%] md:h-[365%] sm: sm:w-[50%] w-[40%] xl:left-[5%] md:left-[10%]  xl:top-[-230%] top-[-140%]">
              <spline-viewer
                url="https://prod.spline.design/FwpXkt0J890LbRt1/scene.splinecode"
                className="main-spline-logo 2xl:h-[600px] md:h-[200px] sm:h-[300px] h-[250px] md:ml-[20%]"
                style={{ width: "100%" }}
              ></spline-viewer>
            </div>
          </div>
        </div>
        <div className="relative md:mt-10" data-aos="fade-left">
          <div className="absolute top-[45%] w-[110vw] py-7 flex overflow-hidden bg-[#c0ff00] rotate-[0deg] drop-shadow-[0px_0px_16px_#b5b4b4]">
            <div className="marquee">
              {duplicatedItems.map((item, index) => (
                <div key={index} className="flex items-center tracking-widest">
                  <div className="border-4 border-[#606060] mx-2 md:mx-8 h-[30px]"></div>
                  <h1 className="uppercase text-[20px] md:text-[30px] font-bold whitespace-nowrap">
                    {item}
                  </h1>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[110vw] py-7 flex overflow-hidden bg-[#c0ff00] rotate-[-3deg] mt-4 drop-shadow-[0px_4px_16px_#7e7e7e]">
            <div className="marquee2">
              {duplicatedItems.map((item, index) => (
                <div key={index} className="flex items-center tracking-widest">
                  <div className="border-4 border-[#606060] mx-2 md:mx-8 h-[30px]"></div>
                  <h1 className="uppercase text-[20px] md:text-[30px] font-bold whitespace-nowrap">
                    {item}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ContactForm isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </>
  );
};
