import React from "react";
import cheerLogo from "../assets/images/cheerful.png";
import bgImg from "../assets/images/HEROPAGE.png";
import globalchart from "../assets/images/globalchart.png";
import fancyWear from "../assets/images/fancywear.png";
import bestBank from "../assets/images/bestbank.png";
import cheerful from "../assets/images/cheerful.png";
import exDone from "../assets/images/exdone.png";
import slabSpace from "../assets/images/slabspace.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div
        className="bg-[#7366fc] pt-4 md:pt-10 overflow-hidden"
        style={{
          background: `url(${bgImg})`,
          backgroundRepeat: "round",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full footer-slider-swiper">
          <Swiper
            data-aos="fade-left"
            slidesPerView={3}
            spaceBetween={10}
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
            className="mySwiperFooter w-full h-fit"
          >
            {/* Swiper slides */}
            {[
              globalchart,
              fancyWear,
              bestBank,
              cheerful,
              exDone,
              slabSpace,
              fancyWear,
            ].map((src, index) => (
              <SwiperSlide key={index}>
                <div className="flex-1 max-w-[120px] md:max-w-[150px]">
                  <img
                    alt={`Company logo`}
                    src={src}
                    className="object-contain w-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Contact info */}
            <div className="flex flex-col gap-2">
              <h4 className="text-white font-semibold text-[20px]">
                Get in touch
              </h4>
              <div>
                <h6 className="text-white text-[15px] mb-1">
                  123 Tech Avenue, Innovation City, TX 75001
                </h6>
                <h6 className="text-white text-[15px] mb-1">info@uixify.com</h6>
                <h6 className="text-white text-[15px] mb-1">
                  +1(123) 4546-7890
                </h6>
              </div>
            </div>
            {/* Special Links */}
            <div className="flex flex-col gap-2">
              <h4 className="text-white font-semibold text-[20px]">
                Special Link
              </h4>
              <div>
                {["Home", "Service", "Our Work", "Testimonial"].map(
                  (item, index) => (
                    <h6 key={index} className="text-white text-[15px] mb-1">
                      {item}
                    </h6>
                  )
                )}
              </div>
            </div>
            {/* Company Links */}
            <div className="flex flex-col gap-2">
              <h4 className="text-white font-semibold text-[20px]">Company</h4>
              <div>
                {["Sign Up", "Contact", "Office Map", "FAQs"].map(
                  (item, index) => (
                    <h6 key={index} className="text-white text-[15px] mb-1">
                      {item}
                    </h6>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <h2
          className="text-center text-[50px] md:text-[85px] lg:text-[250px] text-transparent leading-[0.4] mt-10 md:mt-14 tracking-wide font-black"
          style={{ WebkitTextStroke: "2px #ffff" }}
        >
          CRE
          <span
            className="text-[#c0ff00] font-black"
            style={{ WebkitTextStroke: "0px #ffff" }}
          >
            AT
          </span>
          IVE
        </h2>
      </div>
    </>
  );
};
