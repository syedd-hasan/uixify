import React, { useEffect } from "react";
import leftSecImg from "../assets/images/fifth-sec-l-1.png";
import rightSecImg from "../assets/images/fifth-sec-r.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import user1 from "../assets/user/user1.png";
import user2 from "../assets/user/user2.png";
import "./SixSec.css";

export const FifthSec = () => {
  return (
    <>
      <div id="testimonials" className=" m-auto py-14">
        <div
          className="grid md:grid-cols-2 grid-cols-1 gap-4"
          // style={{
          //   background: `url(${leftSecImg}) no-repeat left center`,
          //   backgroundSize: "contain",
          // }}
        >
          <div
            className="flex flex-col items-center md:items-end justify-center h-[400px] md:bg-[length:auto_450px] bg-[length:auto_200px]"
            style={{
              background: `url(${leftSecImg}) no-repeat left center`,
              backgroundSize: "contain",
            }}
          >
            <h3
              data-aos="fade-right"
              className="relative uppercase text-[70px] md:text-[90px] font-black m-0 leading-[70px] text-center drop-shadow-xl"
            >
              What <br />
              They're
            </h3>
            <button
              className="  rotate-[-7deg] bg-[#c0ff00] p-2 rounded-full flex items-center  drop-shadow-[0px_0px_3px_#808080]"
              // data-aos="fade-right"
            >
              <span className="drop-shadow-2xl uppercase text-[30px] md:text-[35px] font-bold bg-[#c0ff00] px-4 py-0 md:px-7 md:py-2 rounded-full border border-black border-dashed leading-8">
                Saying
              </span>
            </button>
          </div>

          <div>
            <div
              className="flex flex-col items-center justify-center h-[400px]"
              style={{
                background: `url(${rightSecImg}) no-repeat right bottom`,
                backgroundSize: "100px",
              }}
            >
              <Swiper
                data-aos="flip-right"
                effect={"cards"}
                // loop={true}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper reviewSwiper"
              >
                <SwiperSlide>
                  <div className="flex flex-col  pb-4 pt-8 px-6 h-full text-black">
                    <div className="flex items-center border-b border-black gap-4 mb-6 pb-4">
                      <div className="w-[30%] rounded-full swiper-div-img p-2">
                        <img
                          src={user1}
                          className="object-contain w-full"
                          alt="User 1"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="text-[23px]">William Atam</h4>
                        <h6 className="text-[13px]">CEO of Vatich</h6>
                      </div>
                    </div>
                    <div className="">
                      <p className="text-[18px]">
                        "The team at Ceerful transformed our outdated website
                        into a modern, user-friendly platform that has
                        significantly boosted our online presence."
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col  pb-4 pt-8 px-6 h-full text-black">
                    <div className="flex items-center border-b border-black gap-4 mb-6 pb-4">
                      <div className="w-[30%] rounded-full swiper-div-img2 p-2">
                        <img
                          src={user2}
                          className="object-contain w-full"
                          alt="User 2"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="text-[23px]">Jane Doe</h4>
                        <h6 className="text-[13px]">CTO of TechCorp</h6>
                      </div>
                    </div>
                    <div>
                      <p className="text-[18px]">
                        "Their innovative approach and dedication made a
                        remarkable difference for our business."
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col  pb-4 pt-8 px-6 h-full text-black">
                    <div className="flex items-center border-b border-black gap-4 mb-6 pb-4">
                      <div className="w-[30%] rounded-full swiper-div-img3 p-2">
                        <img
                          src={user1}
                          className="object-contain w-full"
                          alt="User 1"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="text-[23px]">Michael Smith</h4>
                        <h6 className="text-[13px]">
                          Founder of Creative Minds
                        </h6>
                      </div>
                    </div>
                    <div>
                      <p className="text-[18px]">
                        "A fantastic team that delivered exactly what we
                        needed!"
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
