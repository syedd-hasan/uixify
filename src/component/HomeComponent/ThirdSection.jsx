import React, { useRef, useState } from "react";
import globalchart from "../assets/images/globalchart.png";
import fancyWear from "../assets/images/fancywear.png";
import bestBank from "../assets/images/bestbank.png";
import cheerful from "../assets/images/cheerful.png";
import exDone from "../assets/images/exdone.png";
import slabSpace from "../assets/images/slabspace.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "./ThirdSec.css";

export const ThirdSection = () => {
  return (
    <div id="projects" className="bg-[#7366fc] py-14">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-white mb-6 font-bold text-lg">
          In Collaboration with
        </h3>
        <div className="thirdSecDiv md:mt-4">
          {/* {[globalchart, fancyWear, bestBank, cheerful, exDone, slabSpace].map(
            (src, index) => (
              <div
                key={index}
                className="flex-1 max-w-[120px] md:max-w-[150px]"
              >
                <img
                  alt={`Company ${index + 1}`}
                  src={src}
                  className="object-contain w-full"
                />
              </div>
            )
          )} */}
          <Swiper
            data-aos="fade-left"
            // data-aos="fade-left"
            slidesPerView={3}
            spaceBetween={10}
            // navigation={true}
            // modules={[Navigation]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
            className="mySwiperThird"
          >
            <SwiperSlide>
              <div className="flex-1 max-w-[120px] md:max-w-[150px]">
                <img
                  alt={`Company logo`}
                  src={globalchart}
                  className="object-contain w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex-1 max-w-[120px] md:max-w-[150px]">
                <img
                  alt={`Company logo`}
                  src={fancyWear}
                  className="object-contain w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex-1 max-w-[120px] md:max-w-[150px]">
                <img
                  alt={`Company logo`}
                  src={bestBank}
                  className="object-contain w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex-1 max-w-[120px] md:max-w-[150px]">
                <img
                  alt={`Company logo`}
                  src={cheerful}
                  className="object-contain w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex-1 max-w-[120px] md:max-w-[150px]">
                <img
                  alt={`Company logo`}
                  src={exDone}
                  className="object-contain w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex-1 max-w-[120px] md:max-w-[150px]">
                <img
                  alt={`Company logo`}
                  src={slabSpace}
                  className="object-contain w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex-1 max-w-[120px] md:max-w-[150px]">
                <img
                  alt={`Company logo`}
                  src={fancyWear}
                  className="object-contain w-full"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mt-6">
          {/* <h4 className="text-center text-white text-2xl md:text-4xl font-black uppercase"> */}
          <h4 className=" text-center text-white text-[25px] md:text-[65px] leading-normal md:leading-[40px] mt-6 md:mt-10 font-black tracking-wide">
            We Craft Digital Experiences
            <span className="md:block hidden">
              <br />
            </span>
            that make people stop,
            <span className="md:block hidden">
              <br />
            </span>
            stare and say,
            <span className="md:block hidden">
              <br />
            </span>
            '
            <span className="text-[#c0ff00] capitalize ">
              who pulled that off?!
            </span>
            '
          </h4>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center mt-6 md:mt-14">
          <button
            type="button"
            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:bg-[#c0ff00] hover:text-black hover:border-[#c0ff00] bg-transparent border border-white px-6"
            data-aos="fade-up"
          >
            <span className="text-white font-semibold hover:text-black uppercase">
              Discover
            </span>
          </button>
          {/* <h4 className="text-white text-lg md:text-4xl">
            whether you need work
          </h4> */}
        </div>
      </div>
    </div>
  );
};
