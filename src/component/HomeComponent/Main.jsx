import React, { useEffect, useState } from "react";
import bgImg from "../assets/images/HEROPAGE.png";
import { BsStars } from "react-icons/bs";
// import LogoModel from "../CanvasModel/LogoModel";
// import SplineModel from "../CanvasModel/LogoModel";
// import SplineCanvas from "../CanvasModel/LogoModel";
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
        // className="relative bg-[#7366fc] flex flex-col justify-between pt-10  h-[95vh] md:pb-10 2xl:mt-[60px] md:mt-[60px] mt-[40px]"
        className="relative bg-[#7366fc] flex flex-col justify-between pt-10 min-[2000px]:h-[600px] lg:h-[100vh] sm:h-[780px] h-[450px] max-[2000px]:pt-[10vh] "
        style={{
          background: `url(${bgImg})`,
          backgroundRepeat: "round",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto px-2">
          <div className="md:relative w-full flex  flex-wrap gap-x-4 mt-4">
            <h1 className=" tracking-wide text-white text-4xl 2xl:text-[130px] xl:text-[110px] lg:text-[85px] md:text-[80px] sm:text-[100px] uppercase font-black drop-shadow-[-5px_5px_5px_#3f3f3f] leading-normal md:leading-[100px] lg:leading-[90px] xl:leading-[130px] 2xl:leading-[150px] h-fit">
              We turn boring <br className=" " />
            </h1>
            <h1 className=" text-white text-4xl 2xl:text-[130px] xl:text-[110px] lg:text-[85px] md:text-[80px] sm:text-[100px] uppercase font-black drop-shadow-[-5px_5px_5px_#3f3f3f] leading-normal md:leading-[100px] lg:leading-[90px] xl:leading-[130px] 2xl:leading-[150px] h-fit">
              into
            </h1>
            {/* <button
              className="absolute xl:left-[24%] lg:left-[25%] md:left-[25%] sm:left-[20%] left-[26%] lg:bottom-[8%] md:bottom-[15%] bottom-[69%] items-center mb-4 drop-shadow-[-5px_5px_5px_#3f3f3f] md:rotate-[-15deg] rotate-[-13deg] bg-[#c0ff00] p-2  rounded-full flex items-center "
              // data-aos="fade-left"
            >
              <span className="uppercase font-bold text-[20px] xl:text-[70px] lg:text-[50px] md:text-[50px] sm:text-[40px] bg-[#c0ff00] md:px-4 px-4  rounded-full flex items-center gap-2 border border-black border-dashed">
                BOLD <BsStars />
              </span>
            </button> */}
            <button
              className="sm:absolute lg:left-[22%] sm:left-[27%]  left-[22%]  bottom-[12%] items-center mb-4 drop-shadow-[-5px_5px_5px_#3f3f3f] md:rotate-[-15deg] rotate-[-13deg] bg-[#c0ff00] p-2  rounded-full flex items-center "
              // data-aos="fade-left"
            >
              <span className="uppercase font-bold text-[20px] xl:text-[70px] lg:text-[50px] md:text-[40px] sm:text-[40px] bg-[#c0ff00] px-4    rounded-full flex items-center gap-2 border border-black border-dashed">
                BOLD <BsStars />
              </span>
            </button>
          </div>

          {/* <div className="relative flex flex-col md:flex-row items-center flex-wrap gap-x-4 p-4">
            <h1 className="text-white text-4xl 2xl:text-[150px] xl:text-[110px] lg:text-[85px] md:text-[80px] sm:text-[100px] uppercase font-black drop-shadow-[-5px_5px_5px_#3f3f3f] leading-normal md:leading-[100px] lg:leading-[90px] xl:leading-[130px] 2xl:leading-[150px] h-fit text-center md:text-left">
              We turn boring <br className="hidden md:block" />
            </h1>
            <h1 className="text-white text-4xl 2xl:text-[150px] xl:text-[110px] lg:text-[85px] md:text-[80px] sm:text-[100px] uppercase font-black drop-shadow-[-5px_5px_5px_#3f3f3f] leading-normal md:leading-[100px] lg:leading-[90px] xl:leading-[130px] 2xl:leading-[150px] h-fit text-center md:text-left">
              into
            </h1>
            <button className="mt-4 md:mt-6 lg:mt-8 xl:mt-10 drop-shadow-[-5px_5px_5px_#3f3f3f] bg-[#c0ff00] p-2 rounded-full flex items-center mx-auto md:mx-0">
              <span className="uppercase font-bold text-[20px] xl:text-[70px] lg:text-[50px] md:text-[50px] sm:text-[40px] bg-[#c0ff00] md:px-4 px-4 rounded-full flex items-center gap-2 border border-black border-dashed">
                BOLD <BsStars />
              </span>
            </button>
          </div> */}

          <div className="relative flex relative ">
            <div className="w-full ">
              <p className="w-full md:w-[50%] font-medium text-white text-lg md:text-[20px]">
                We are a team of passionate UI/UX designers dedicated to
                transforming ideas into user-centered digital experiences.
              </p>
              <button
                // data-aos="fade-right"
                className="absolute font-medium btn-hover-eft transition-transform duration-300 ease-in-out drop-shadow-[0px_0px_3px_#808080] uppercase text-[10px] md:text-[20px] bg-[#c0ff00] hover:scale-105 px-4 py-2 rounded-full flex items-center gap-2 mt-5 xl:mt-8 lg:mt-[12px] border border-black border-b-4 z-50"
                onClick={() => setModalOpen(true)}
              >
                BORROW OUR BRILLIANCE <BsStars />
              </button>
            </div>
            {/* <div className="absolute md:hidden flex justify-center w-full xl:w-[145%] md:w-[125%] sm:w-[140%] 2xl:h-[695%] xl:h-[660%] lg:h-[660%] md:h-[400%] h-[200%] sm:w-[50%] w-[160%] xl:left-[0%] md:left-[10%]  xl:top-[-380%] lg:top-[-290%] md:top-[-160%]">
              <spline-viewer
                url="https://prod.spline.design/FwpXkt0J890LbRt1/scene.splinecode"
                className="main-spline-logo 2xl:h-[600px] md:h-[200px] sm:h-[300px] h-[250px] md:ml-[20%]"
                style={{ width: "100%" }}
              ></spline-viewer>
            </div> */}
            {/* <div className="absolute md:hidden flex justify-center xl:w-[145%] sm:w-[425%] sm:w-[140%] 2xl:h-[695%] xl:h-[660%] lg:h-[660%] md:h-[400%] sm:h-[300%] h-[200%] sm:w-[50%] w-[160%] xl:left-[0%] md:left-[10%]  xl:top-[-380%] lg:top-[-290%] md:top-[-160%]">
              <spline-viewer
                url="https://prod.spline.design/FwpXkt0J890LbRt1/scene.splinecode"
                className="main-spline-logo 2xl:h-[600px] md:h-[200px] sm:h-[300px] h-[250px] md:ml-[20%]"
                style={{ width: "100%" }}
              ></spline-viewer>
            </div> */}
          </div>
        </div>
        {/* <div className="absolute flex justify-center xl:w-[145%] md:w-[125%] sm:w-[140%]  min-[2000px]:h-[895%] 2xl:h-[1395%] xl:h-[660%] lg:h-[660%] md:h-[400%] h-[30vh] sm:w-[50%] w-[160%] xl:left-[0%] md:left-[10%] bottom-[0] md:bottom-[-100%]">
          <spline-viewer
            url="https://prod.spline.design/FwpXkt0J890LbRt1/scene.splinecode"
            className="main-spline-logo 2xl:h-[600px] md:h-[200px] sm:h-[300px] h-[250px] md:ml-[20%]"
            style={{ width: "100%" }}
          ></spline-viewer>
        </div> */}
        <div className="absolute hidden md:flex justify-center xl:w-[145%] md:w-[125%] sm:w-[140%]  md:h-[120%] h-[30vh] sm:w-[50%] w-[160%] xl:left-[0%] md:left-[10%] sm:top-[0] top-[50%]">
          <spline-viewer
            url="https://prod.spline.design/FwpXkt0J890LbRt1/scene.splinecode"
            className="main-spline-logo 2xl:h-[600px] md:h-[200px] sm:h-[300px] h-[250px] md:ml-[20%]"
            style={{ width: "100%" }}
          ></spline-viewer>
        </div>
        <div className="relative  ">
          <div className="absolute top-[55%] w-[110vw] md:py-3 py-3 flex overflow-hidden bg-[#c0ff00] rotate-[0deg] drop-shadow-[0px_0px_16px_#b5b4b4]">
            <div className="marquee">
              {duplicatedItems.map((item, index) => (
                <div key={index} className="flex items-center tracking-widest">
                  <div className="md:border-4 border-2 border-[#606060] mx-2 md:mx-8 h-[30px]"></div>
                  <h1 className="uppercase text-[20px] md:text-[30px] font-bold whitespace-nowrap">
                    {item}
                  </h1>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[110vw] md:py-3 py-3 flex overflow-hidden bg-[#c0ff00] rotate-[-3deg] drop-shadow-[0px_4px_16px_#7e7e7e]">
            <div className="marquee2">
              {duplicatedItems.map((item, index) => (
                <div key={index} className="flex items-center tracking-widest">
                  <div className="md:border-4 border-2 border-[#606060] mx-2 md:mx-8 h-[30px]"></div>
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
